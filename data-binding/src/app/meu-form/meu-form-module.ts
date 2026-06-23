import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuForm } from './meu-form/meu-form';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [MeuForm],
  exports: [MeuForm],
})
export class MeuFormModule {}
