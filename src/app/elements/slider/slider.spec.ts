import { render, screen } from '@testing-library/angular';
import { SliderComponent } from './slider.component';

const label = 'Some label here';
const id = 'my-id';

describe('Slider', () => {
  const renderElement = (props: Partial<SliderComponent> = {}) =>
    render(SliderComponent, {
      componentProperties: {
        label,
        id,
        ...props,
      },
    });

  it('Should render correctly (with defaults)', async () => {
    // Given
    // When
    await renderElement();
    // Then
    expect(screen.getByText(label)).toBeVisible();
    expect(screen.getByRole('input')).toBeVisible();
    expect(screen.getByRole('input')).toHaveValue('0');
  });

  it('Should render correctly (with given value)', async () => {
    // Given
    const value = 49;
    // When
    await renderElement({ value });
    // Then
    expect(screen.getByText(label)).toBeVisible();
    expect(screen.getByRole('input')).toBeVisible();
    expect(screen.getByRole('input')).toHaveValue(value.toString());
  });

  it("Should respect min value and don' allow something less than this", async () => {
    // Given
    const min = 10;
    const value = min - 6;
    // When
    await renderElement({ value, min });
    // Then
    expect(screen.getByText(label)).toBeVisible();
    expect(screen.getByRole('input')).toBeVisible();
    expect(screen.getByRole('input')).toHaveValue(min.toString());
  });

  it("Should respect max value and don' allow something more than this", async () => {
    // Given
    const max = 10;
    const value = max + 6;
    // When
    await renderElement({ value, max });
    // Then
    expect(screen.getByText(label)).toBeVisible();
    expect(screen.getByRole('input')).toBeVisible();
    expect(screen.getByRole('input')).toHaveValue(max.toString());
  });
});
