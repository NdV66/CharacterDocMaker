import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { render, screen } from '@testing-library/angular';
import { TextareaComponent } from './textarea.component';
import userEvent from '@testing-library/user-event';
import * as formUtils from '@utils/form';
import { TEXTS } from '@translations/en-EN';

const labelMock = 'Hello there!';
const text = 'LOTR is the best.';
const fb = new FormBuilder();
const formGroupMock = fb.group({
  mockField: ['', [Validators.required]],
});

const renderElement = () =>
  render(TextareaComponent, {
    componentInputs: {
      inputName: 'mockField',
      form: formGroupMock,
      label: labelMock,
    },
  });

describe('TextArea', () => {
  let formControlItem: FormControl;

  beforeEach(() => {
    formControlItem = formGroupMock.controls['mockField'] as FormControl;
  });

  it('Should render with correctly without errors', async () => {
    //Given
    //When
    await renderElement();
    //Then
    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.queryByText(TEXTS.form.errors.required)).toBeNull();
    expect(screen.getByText(labelMock)).toBeVisible();
  });

  it('Should handle text change', async () => {
    //Given
    await renderElement();
    //When
    const element = screen.getByRole('textbox');
    await userEvent.type(element, text);
    //Then
    expect(screen.getByDisplayValue(text)).toBeVisible();
  });

  it('Should not render any error', async () => {
    //Given
    await renderElement();
    //When
    await userEvent.type(screen.getByRole('textbox'), text);
    //Then
    expect(screen.queryByText(TEXTS.form.errors.required)).toBeNull();
  });

  it('Should render an error', async () => {
    //Given
    jest.spyOn(formUtils, 'isFormControlInvalid').mockReturnValue(true);
    await renderElement();
    //When
    const element = screen.getByRole('textbox');
    await userEvent.type(element, text);
    await userEvent.clear(element);
    //Then
    expect(screen.getByText(TEXTS.form.errors.required)).toBeVisible();
  });
});
