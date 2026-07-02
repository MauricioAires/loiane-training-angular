import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-curso',
  imports: [],
  templateUrl: './input-property.html',
  styleUrl: './input-property.css',
  inputs: ['nomeCurso:nome'],
})
export class InputProperty {
  // @Input('nome')
  nomeCurso: string = '';
}
