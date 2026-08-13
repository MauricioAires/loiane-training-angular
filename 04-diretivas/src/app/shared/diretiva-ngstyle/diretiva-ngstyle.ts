import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretiva-ngstyle',
  imports: [FormsModule, NgStyle],
  templateUrl: './diretiva-ngstyle.html',
  styleUrl: './diretiva-ngstyle.css',
})
export class DiretivaNgstyle {
  protected ativo = true;
  protected tamanhoFonte = 20;

  protected onChange(): void {
    this.ativo = !this.ativo;
  }
}
