import { Component, DestroyRef, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../shared/services/students/students';
import { FormsModule } from '@angular/forms';
import { IFormCanDeactivate } from '../../shared/guards/students-deactivate/students-deactivate.interface';
import { IStudent } from '../../shared/interfaces/student';

@Component({
  imports: [FormsModule],
  selector: 'app-student-form',
  styleUrl: './student-form.scss',
  templateUrl: './student-form.html',
})
export class StudentForm implements OnInit, IFormCanDeactivate {
  protected readonly student = signal<IStudent>({
    id: 0,
    email: '',
    name: '',
  });

  readonly #formUpdated = signal(false);

  constructor(
    private activatedRoute: ActivatedRoute,
    private destroyRef: DestroyRef,
    private studentsService: StudentsService,
  ) {}

  ngOnInit(): void {
    this.#getStudent();
  }

  #getStudent(): void {
    this.activatedRoute.params.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const res = this.studentsService.getStudent(Number(params['studentId']));

      if (res === null) return;

      this.student.set(res);
    });
  }

  protected onInput(): void {
    this.#formUpdated.set(true);
  }

  protected canGoOutside(): boolean {
    if (this.#formUpdated()) {
      const result = window.confirm('Tem certeza que deseja sair dessa página?');

      return result;
    }

    return true;
  }

  public canDeactivate(): boolean {
    return this.canGoOutside();
  }
}
