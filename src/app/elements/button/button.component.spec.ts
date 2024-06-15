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
    expect(screen.getByText(textMock)).toBeTruthy();
  });
});
