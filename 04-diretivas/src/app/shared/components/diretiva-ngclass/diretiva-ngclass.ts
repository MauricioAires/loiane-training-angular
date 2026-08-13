import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  imports: [NgClass],
  templateUrl: './diretiva-ngclass.html',
  styleUrl: './diretiva-ngclass.css',
})
export class DiretivaNgclass {
  protected meuFavorito = false;

  protected onClick(): void {
    this.meuFavorito = !this.meuFavorito;
  }
}
