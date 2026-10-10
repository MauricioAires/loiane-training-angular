import { Component, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  imports: [],
  template: '',
})
export abstract class BaseForm {
  protected form = signal<FormGroup>({} as FormGroup);

  abstract submit(): void;

  onSubmit() {
    if (this.form().valid) {
      this.submit();

      return;
    }

    this.checkFormValidations(this.form());
  }

  private checkFormValidations(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);

      // Modificado // sujo
      control?.markAsDirty();
      // control?.markAllAsDirty();
      // Tocado
      control?.markAsTouched();
      // control?.markAllAsTouched();

      if (control instanceof FormGroup) {
        this.checkFormValidations(control);
      }
    });
  }

  reset(): void {
    this.form().reset();
  }

  checkIsValidAndTouched(fieldName: string): boolean {
    const field = this.form().get(fieldName);

    if (field === null) return false;

    return (!field.valid && (field.touched || field.dirty)) ?? false;
  }

  checkIsRequired(fieldName: string): boolean {
    const field = this.form().get(fieldName);

    if (field === null) return false;

    return field.hasError('required');
  }

  checkValidEmail(): boolean {
    const field = this.form().get('email');

    return field?.getError('invalid') && field.touched;
  }

  applyCSSError(fieldName: string) {
    return {
      'is-invalid': this.checkIsValidAndTouched(fieldName),
    };
  }
}
