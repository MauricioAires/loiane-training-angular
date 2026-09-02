import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLinkWithHref } from '@angular/router';
import { CoursesService } from '../shared/services/courses/courses';

@Component({
  imports: [RouterLinkWithHref],
  selector: 'app-courses',
  styleUrl: './courses.scss',
  templateUrl: './courses.html',
})
export class Courses implements OnInit {
  protected courses = signal<any>([]);

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses.set(this.coursesService.getCourses());
  }
}
