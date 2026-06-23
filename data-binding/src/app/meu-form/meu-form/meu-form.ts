import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.html',
  styleUrl: './meu-form.css',
  standalone: false,
})
export class MeuForm {
  nome: string = 'abd';
  pessoa = {
    nome: 'Mariana',
    idade: 20,
  };
}
