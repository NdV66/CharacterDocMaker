import { FormBuilder, Validators } from '@angular/forms';
import { fireEvent, render, screen } from '@testing-library/angular';
import * as formUtils from '@utils/form';
import { InputComponent } from './input.component';
import { TEXTS } from '@translations/en-EN';

const labelMock = 'Hello there!';
const text = 'LOTR is the best.';
const inputTarget = {
  target: { value: text },
};

const fb = new FormBuilder();
const formGroupMock = fb.group({
  mockField: ['', [Validators.required]],
});

describe('Input', () => {
  const renderElement = () =>
    render(InputComponent, {
      componentProperties: {
        inputName: 'mockField',
        form: formGroupMock,
        label: labelMock,
      },
    });

  it('Should render without any error', async () => {
    // Given
    jest.spyOn(formUtils, 'isFormControlInvalid').mockReturnValue(false);
    // When
    await renderElement();
    // Then
    expect(screen.queryByText(TEXTS.form.errors.required)).toBeNull();
    expect(screen.getByText(labelMock)).toBeVisible();
    expect(screen.getByRole('input')).toBeVisible();
  });

  it('Should render with an error', async () => {
    // Given
    jest.spyOn(formUtils, 'isFormControlInvalid').mockReturnValue(true);
    // When
    await renderElement();
    // Then
    expect(screen.getByText(TEXTS.form.errors.required)).toBeVisible();
    expect(screen.getByText(labelMock)).toBeVisible();
    expect(screen.getByRole('input')).toBeVisible();
  });

  it('Should handle changing value (with an error even when typing)', async () => {
    // Given
    jest.spyOn(formUtils, 'isFormControlInvalid').mockReturnValue(true);
    // When
    await renderElement();
    fireEvent.change(screen.getByRole('input'), inputTarget);
    // Then
    expect(screen.getByText(TEXTS.form.errors.required)).toBeVisible();
    expect(screen.getByText(labelMock)).toBeVisible();
    expect(screen.getByRole('input')).toBeVisible();
    expect(screen.getByRole('input')).toHaveValue(text);
  });

  it('Should handle changing value (no error)', async () => {
    // Given
    jest.spyOn(formUtils, 'isFormControlInvalid').mockReturnValue(false);
    // When
    await renderElement();
    fireEvent.change(screen.getByRole('input'), inputTarget);
    // Then
    expect(screen.queryByText(TEXTS.form.errors.required)).toBeNull();
    expect(screen.getByText(labelMock)).toBeVisible();
    expect(screen.getByRole('input')).toBeVisible();
    expect(screen.getByRole('input')).toHaveValue(text);
  });
});
