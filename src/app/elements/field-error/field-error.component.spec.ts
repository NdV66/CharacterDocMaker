import { screen, render } from '@testing-library/angular';
import { FieldErrorComponent } from './field-error.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TEXTS } from '@translations/en-EN';

const fb = new FormBuilder();
const formGroupMock = fb.group({
  mockField: ['', [Validators.required]],
});

describe('ButtonComponent', () => {
  let formControlItem: FormControl;

  const renderElement = () =>
    render(FieldErrorComponent, {
      componentProperties: { formControlItem },
    });

  beforeEach(() => {
    formControlItem = formGroupMock.controls['mockField'] as FormControl;
  });

  it('Should not render any error', async () => {
    // Given
    // When
    await renderElement();
    // Then
    const element = screen.getByText('This field is required');
    expect(element).toBeVisible();
  });

  it('Should not render any error (even when touched)', async () => {
    // Given
    formControlItem.markAllAsTouched();
    // When
    await renderElement();
    // Then
    const element = screen.getByText('This field is required');
    expect(element).toBeVisible();
  });

  const cases = [
    { error: 'required', text: TEXTS.form.errors.required },
    { error: 'maxlength', text: TEXTS.form.errors.maxlength },
    { error: 'pattern', text: TEXTS.form.errors.pattern },
    { error: 'minlength', text: TEXTS.form.errors.minlength },
  ];

  it.each(cases)(`Should show $1 error`, async ({ error, text }) => {
    // Given
    formControlItem.setErrors({ [error]: true });
    formControlItem.markAllAsTouched();
    // When
    await renderElement();
    // Then
    const element = screen.getByText(text);
    expect(element).toBeVisible();
  });
});
