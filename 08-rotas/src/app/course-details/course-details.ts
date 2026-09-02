import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-course-details',
  styleUrl: './course-details.scss',
  templateUrl: './course-details.html',
})
export class CourseDetails {
  protected courseId!: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.courseId = this.activatedRoute.snapshot.params['courseId'];
  }
}
