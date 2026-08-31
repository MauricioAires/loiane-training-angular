import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  styleUrl: './receber-curso-criado.scss',
  templateUrl: './receber-curso-criado.html',
  standalone: false,
})
export class ReceberCursoCriado implements OnInit {
  curso: string = '';

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursosService.emitirCursoCriado.subscribe((curso) => {
      this.curso = curso;
    });
  }
}
