import { NgForOf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  imports: [NgForOf],
  templateUrl: './diretiva-ngfor.html',
  styleUrl: './diretiva-ngfor.css',
})
export class DiretivaNgfor {
  cursos: string[] = ['Angular', 'JavaScript', 'TypeScript', 'React', 'Vue'];
}
