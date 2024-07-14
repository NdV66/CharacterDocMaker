import userEvent from '@testing-library/user-event';
import { TextButtonComponent } from './text-button.component';
import { render, screen } from '@testing-library/angular';

const text = 'This is a button';

describe('TextButtonComponent', () => {
  it('Should create a button', async () => {
    //Given
    //When
    await render(TextButtonComponent, {
      componentInputs: { text, onClick: jest.fn() },
    });
    //Then
    expect(screen.getByText(text)).toBeVisible();
  });

  it('Should handle on click action correctly', async () => {
    //Given
    const onClickMock = jest.fn();
    await render(TextButtonComponent, {
      componentInputs: { text, onClick: onClickMock },
    });
    // When
    const button = screen.getByText(text);
    await userEvent.click(button);
    //Then
    expect(button).toBeVisible();
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
