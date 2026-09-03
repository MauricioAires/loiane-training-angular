import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { IStudent, StudentsService } from '../shared/services/students/students';

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
