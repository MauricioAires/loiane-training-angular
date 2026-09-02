import { Component, DestroyRef, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  imports: [],
  selector: 'app-course-details',
  styleUrl: './course-details.scss',
  templateUrl: './course-details.html',
})
export class CourseDetails implements OnInit, OnDestroy {
  protected courseId = signal('');
  protected inscricao!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,

    private destroyRef: DestroyRef,
  ) {
    // this.courseId = this.activatedRoute.snapshot.params['courseId'];
  }

  ngOnInit(): void {
    this.inscricao = this.activatedRoute.params
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        this.courseId.set(params['courseId']);
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
