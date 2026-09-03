import { Component, DestroyRef, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { IStudent, StudentsService } from '../../shared/services/students/students';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-student-form',
  styleUrl: './student-form.scss',
  templateUrl: './student-form.html',
})
export class StudentForm implements OnInit {
  protected readonly student = signal<IStudent>({
    id: 0,
    email: '',
    name: '',
  });

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
}
