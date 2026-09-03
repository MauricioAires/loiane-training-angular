import { Service } from '@angular/core';

export interface IStudent {
  id: number;
  name: string;
  email: string;
}

@Service()
export class StudentsService {
  private students: IStudent[] = [
    {
      id: 1,
      name: 'Aluno 01',
      email: 'aluno01@gmail.com',
    },
    {
      id: 2,
      name: 'Aluno 02',
      email: 'aluno02@gmail.com',
    },
    {
      id: 3,
      name: 'Aluno 03',
      email: 'aluno03@gmail.com',
    },
  ];

  getStudents() {
    return this.students;
  }

  getStudent(studentId: number) {
    return this.students.find((item) => item.id === Number(studentId)) ?? null;
  }
}
