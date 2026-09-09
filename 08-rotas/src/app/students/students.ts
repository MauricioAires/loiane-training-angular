import { Component, OnInit, signal } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { StudentsService } from '../shared/services/students/students';
import type { IStudent } from '../shared/interfaces/student';

@Component({
  imports: [RouterOutlet, RouterLinkWithHref],
  providers: [StudentsService],
  selector: 'app-students',
  styleUrl: './students.scss',
  templateUrl: './students.html',
})
export class Students implements OnInit {
  protected readonly students = signal<IStudent[]>([]);

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.students.set(this.studentsService.getStudents());
  }
}
