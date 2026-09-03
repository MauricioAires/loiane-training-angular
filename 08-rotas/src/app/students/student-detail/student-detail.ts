import { Component, DestroyRef, OnInit, signal } from '@angular/core';
import { IStudent, StudentsService } from '../../shared/services/students/students';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [],
  selector: 'app-student-detail',
  styleUrl: './student-detail.scss',
  templateUrl: './student-detail.html',
})
export class StudentDetail implements OnInit {
  protected readonly student = signal<IStudent | null>(null);

  constructor(
    private activatedRoute: ActivatedRoute,
    private destroyRef: DestroyRef,
    private studentsService: StudentsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.#getStudent();
  }

  #getStudent(): void {
    this.activatedRoute.params.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      this.student.set(this.studentsService.getStudent(Number(params['studentId'])));
    });
  }

  protected updateStudent(): void {
    this.router.navigate(['/', 'students', this.student()?.id, 'edit']);
  }
}
