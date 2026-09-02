import { Component, DestroyRef, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CoursesService } from '../shared/services/courses/courses';
@Component({
  imports: [],
  selector: 'app-course-details',
  styleUrl: './course-details.scss',
  templateUrl: './course-details.html',
})
export class CourseDetails implements OnInit, OnDestroy {
  protected courseId = signal(0);
  protected inscricao!: Subscription;

  protected course = signal<any>({});

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private destroyRef: DestroyRef,
    private router: Router,
  ) {
    // this.courseId = this.activatedRoute.snapshot.params['courseId'];
  }

  ngOnInit(): void {
    this.inscricao = this.activatedRoute.params
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        if (Number.isNaN(params['courseId'])) return;

        this.courseId.set(params['courseId']);

        this.course.set(this.coursesService.getCourse(this.courseId()));

        if (this.course() === null) {
          /**
           * Roteamento imperativo
           */
          this.router.navigate(['not-found']);
        }
      });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}

/**
 * Quando uma rota utiliza ID's na rota é preferível
 * que eu fique escutando as mudanças da rota e não apenas
 * pegar os dados via constructor ou @ngOnInit
 */
