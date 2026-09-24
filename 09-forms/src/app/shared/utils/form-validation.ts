import type {
  AbstractControl,
  FormArray,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const formValidations = {
  requiredMinCheckbox: (min = 1): ValidatorFn => {
    const validator: ValidatorFn = (control: AbstractControl) => {
      // const values = formArray.controls;
      // let totalChecked = 0;

      // for (let i = 0; i < values.length; i++) {
      //   if (values[i].value) {
      //     totalChecked += 1;
      //   }
      // }

      const formArray = control as FormArray;

      const totalChecked = formArray.controls.filter((c) => !!c.value).length;

      return totalChecked >= min ? null : { requiredMinCheckbox: true };
    };

    return validator;
  },

  cepValidator: (control: FormControl): ValidationErrors | null => {
    const cep = control.value;

    if (cep && cep !== '') {
      const cepRegex = /^[0-9]{8}$/;

      return cepRegex.test(cep)
        ? null
        : ({
            cepInvalid: true,
          } as ValidationErrors);
    }

    return null;
  },

  equalsTo: (otherField: string): ValidatorFn => {
    const validator: ValidatorFn = (control: AbstractControl) => {
      if (!otherField) {
        throw new Error('É necessário informar o campo.');
      }

      const parent = control.parent;

      /**
       * a validação pode ser executada antes do form ter sido
       * construído, por isso tem essa validação
       */
      if (!parent) {
        return null;
      }

      const field = parent.get(otherField);

      if (!field) {
        throw new Error(`O campo "${otherField}" não existe.`);
      }

      return field.value === control.value ? null : { equalsTo: true };
    };

    return validator;
  },
};
