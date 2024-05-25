import { FormControl } from '@angular/forms';

export const isFormControlInvalid = (formControlItem: FormControl) =>
  formControlItem.invalid && (formControlItem.dirty || formControlItem.touched);
