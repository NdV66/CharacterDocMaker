import { screen, render } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { ButtonComponent } from './button.component';

const textMock = 'click me!';

describe('ButtonComponent', () => {
  it('Should create as basic', async () => {
    // Given
    // When
    await render(ButtonComponent, { componentProperties: { text: textMock } });
    // Then
    const button = screen.getByText(textMock);
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  it('Should be disabled', async () => {
    // Given
    // When
    await render(ButtonComponent, {
      componentProperties: { text: textMock, isDisabled: true },
    });
    // Then
    const button = screen.getByText(textMock);
    expect(button).toBeDisabled();
  });

  it('Should not be clickable when disabled', async () => {
    // Given
    const onClickMock = jest.fn();
    await render(ButtonComponent, {
      componentProperties: {
        text: textMock,
        isDisabled: true,
        onClick: onClickMock,
      },
    });
    const button = screen.getByText(textMock);
    // When
    await userEvent.click(button);
    // Then
    expect(button).toBeDisabled();
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it('Should be clickable when not disabled', async () => {
    // Given
    const onClickMock = jest.fn();
    await render(ButtonComponent, {
      componentProperties: {
        text: textMock,
        onClick: onClickMock,
      },
    });
    const button = screen.getByText(textMock);
    // When
    await userEvent.click(button);
    // Then
    expect(button).not.toBeDisabled();
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
