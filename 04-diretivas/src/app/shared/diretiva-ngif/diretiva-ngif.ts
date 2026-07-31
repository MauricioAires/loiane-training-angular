import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  imports: [],
  templateUrl: './diretiva-ngif.html',
  styleUrl: './diretiva-ngif.css',
})
export class DiretivaNgif {
  cursos: string[] = [];
  mostrarCursos: boolean = false;

  onMostrarCursos(): void {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
