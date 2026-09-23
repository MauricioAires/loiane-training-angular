import type { AbstractControl, FormArray, ValidatorFn } from '@angular/forms';

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
};
