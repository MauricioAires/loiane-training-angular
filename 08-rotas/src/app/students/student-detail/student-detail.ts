import { Component, DestroyRef, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from '../../shared/interfaces/student';
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
    // private studentsService: StudentsService,
    private router: Router,
  ) {
    /**
     * Lembrar de sempre ler utilizando um observable.
     * porque dessa forma se a URL mudar eu vou ter o novo dado,
     */
  }

  ngOnInit(): void {
    // this.#getStudent();

    console.log('ngOnInit: StudentDetailComponent');

    this.activatedRoute.data.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(({ student }) => {
      console.log('Recebendo o objeto Aluno do resolver');
      this.student.set(student as IStudent);
    });
  }

  // #getStudent(): void {
  //   this.activatedRoute.params.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
  //     this.student.set(this.studentsService.getStudent(Number(params['studentId'])));
  //   });
  // }

  protected updateStudent(): void {
    this.router.navigate(['/', 'students', this.student()?.id, 'edit']);
  }
}

/**
 * Qual utilizar um resolver?
 * Como lidar com o erro oa carregar o usuário ?
 * Como exibir o estado de carregamento de uma página para outra?
 */
