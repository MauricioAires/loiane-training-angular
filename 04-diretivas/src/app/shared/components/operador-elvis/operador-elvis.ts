import { Component } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  imports: [],
  templateUrl: './operador-elvis.html',
  styleUrl: './operador-elvis.css',
})
export class OperadorElvis {
  tarefa: any = {
    desc: 'Descrição da tarefa',
    // responsavel: null,
    responsavel: {
      usuario: null,
    },
  };
}
