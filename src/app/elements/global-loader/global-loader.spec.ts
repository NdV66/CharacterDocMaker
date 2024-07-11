import { render, screen } from '@testing-library/angular';
import { GlobalLoaderComponent } from './global-loader.component';

describe('GlobalLoader', () => {
  it('Should show loader (when isLoading == true)', async () => {
    //Given
    await render(GlobalLoaderComponent, {
      componentInputs: { isLoading: true },
    });
    //When
    //Then
    const loader = screen.getByTestId('global-loader');
    expect(loader).toBeVisible();
  });

  it('Should not show loader (when isLoading == false)', async () => {
    //Given
    await render(GlobalLoaderComponent, {
      componentInputs: { isLoading: false },
    });
    //When
    //Then
    const loader = screen.queryByTestId('global-loader');
    expect(loader).toBeNull();
  });
});
