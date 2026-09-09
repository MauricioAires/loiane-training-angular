import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-not-found',
  styleUrl: './not-found.scss',
  templateUrl: './not-found.html',
})
export class NotFound {}

/**
 * Sempre que for declarar rotas, sempre colocar
 * rotas que tem o endereço fixo no começo
 * hard-coded ele compara de top-down
 *
 * Rota vazias e páginas não encontradas sempre no final
 * das configurações das rotas.
 */
