import { Service } from '@angular/core';

@Service()
export class CoursesService {
  getCourses() {
    return [
      {
        id: 1,
        name: 'Angular 2',
      },
      {
        id: 2,
        name: 'Java',
      },
    ];
  }

  getCourse(courseId: number) {
    const courses = this.getCourses();

    return courses.find((item) => item.id === Number(courseId)) ?? null;
  }
}
