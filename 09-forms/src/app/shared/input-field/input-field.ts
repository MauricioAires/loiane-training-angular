import { NgClass } from '@angular/common';
import { Component, forwardRef, input, model, signal } from '@angular/core';
import { ErrorMsg } from '../error-msg/error-msg';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

/**
 * Value Accessor é uma interface do angular
 * mas ele deixa muitas funções que não é utilizado o novo
 * padrão é  utilizar o signal
 */

@Component({
  selector: 'app-input-field',
  imports: [NgClass, ErrorMsg, FormsModule],
  templateUrl: './input-field.html',
  styleUrl: './input-field.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputField),
      multi: true,
    },
  ],
})
export class InputField implements ControlValueAccessor {
  readonly classeCss = input<any>({});
  readonly id = input('');
  readonly label = input('');
  readonly inputTipo = input('text');
  readonly control = input<null | AbstractControl>();
  readonly isReadOnly = model(false);

  private innerValue = signal<any>(null);

  get value() {
    return this.innerValue();
  }

  set value(v: any) {
    if (v === this.innerValue()) return;

    this.innerValue.set(v);

    this.onChangeCb(v);
  }

  /**
   *
   * Responsável por setar o valor.
   */
  writeValue(v: any): void {
    this.value = v;
  }

  /**
   *
   * Utilizado para notificar o Angular quando o valor
   * do input muda.
   *
   */
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  /**
   *
   * Utilizado para para informar o Angular quando o campo for tocado
   */
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }
  /**
   * Usado para informar quando o campo está desabilitado
   * para impedir que digite
   */
  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly.set(isDisabled);
  }

  onChangeCb: (value: any) => void = () => {};
  onTouchedCb: () => void = () => {};
}
