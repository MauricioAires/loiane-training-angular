import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-data-form',
  imports: [ReactiveFormsModule],
  templateUrl: './data-form.html',
  styleUrl: './data-form.scss',
})
export class DataForm implements OnInit {
  protected form = signal<FormGroup>({} as FormGroup);

  constructor(private fb: FormBuilder) {}

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
        name: [null],
        email: [null],
      }),
    );
  }
}
