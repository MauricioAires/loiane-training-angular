import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, DestroyRef, OnInit, signal } from '@angular/core';
import { FormDebug } from '../../shared/form-debug/form-debug';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-data-form',
  imports: [ReactiveFormsModule, FormDebug],
  templateUrl: './data-form.html',
  styleUrl: './data-form.scss',
})
export class DataForm implements OnInit {
  protected form = signal<FormGroup>({} as FormGroup);

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private destroyRef: DestroyRef,
  ) {}

  // sempre que o componente for inicializado.
  public ngOnInit(): void {
    // Form mais verbosa para criar form.
    // A melhor é usando o construtor
    // this.form.set(
    //   new FormGroup({
    //     name: new FormControl(null),
    //     email: new FormControl(null),
    //   }),
    // );

    /**
     * é a gosto do freguês.
     */

    this.form.set(
      this.fb.group({
        name: [null, [Validators.required]],
        email: [null, [Validators.required]],
      }),
    );
  }

  protected onSubmit(): void {
    // console.log(this.form().value);

    this.http
      .post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(this.form().value), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          console.log(res);

          /**
           * O reset deve ficar dentro do subscribe de de
           * preferência apenas no sucesso.
           */
          // this.form().reset();

          this.reset();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  protected reset(): void {
    this.form().reset();
  }
}
