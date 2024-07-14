import { render, screen } from '@testing-library/angular';
import { LabelComponent } from './label.component';

const labelMock = 'This is a label.';

describe('Label', () => {
  const renderElement = (isError: boolean) =>
    render(LabelComponent, {
      componentProperties: {
        text: labelMock,
        isError,
        forField: 'field',
      },
    });

  it('Should render correctly (no error)', async () => {
    // Given
    // When
    await renderElement(false);
    // Then
    expect(screen.getByText(labelMock)).toBeVisible();
  });

  it('Should render correctly (with an error)', async () => {
    // Given
    // When
    await renderElement(true);
    // Then
    expect(screen.getByText(labelMock)).toBeVisible();
  });
});
