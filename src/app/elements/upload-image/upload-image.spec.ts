import { render, screen } from '@testing-library/angular';
import { UploadImageComponent } from './upload-image.component';

describe('UploadImage', () => {
  it('Should render correctly with minimal setup', async () => {
    //Given
    //When
    await render(UploadImageComponent);
    //Then
    expect(screen.getByRole('input')).toBeVisible();
  });

  it('Should show loader text, when loading', async () => {
    //Given
    const loadingText = 'Loading...';
    const uploadText = 'Upload an image, maybe.';
    //When
    await render(UploadImageComponent, {
      componentInputs: { isLoading: true, loadingText, uploadText },
    });
    //Then
    expect(screen.getByText(loadingText)).toBeVisible();
    expect(screen.queryByText(uploadText)).toBeNull();
  });
});
