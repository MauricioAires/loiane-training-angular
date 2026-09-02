import { Component, OnInit, signal, DestroyRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { CoursesService } from '../shared/services/courses/courses';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [RouterLinkWithHref],
  selector: 'app-courses',
  styleUrl: './courses.scss',
  templateUrl: './courses.html',
})
export class Courses implements OnInit {
  protected courses = signal<any>([]);
  protected page = signal<number>(0);

  constructor(
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute,
    private destroyRef: DestroyRef,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.courses.set(this.coursesService.getCourses());

    this.activatedRoute.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params: Record<string, number>) => {
        this.page.set(Number(params['pagina']));
      });
  }

  protected nextPage(): void {
    // this.page.update((state) => state + 1);

    this.router.navigate(['/', 'courses'], {
      queryParams: {
        pagina: this.page() + 1,
      },
    });
  }
}
