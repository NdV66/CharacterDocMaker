import { render, screen } from '@testing-library/angular';
import { NavbarComponent } from './navbar.component';
import { TEXTS } from '@translations/en-EN';

describe('Navbar', () => {
  it('Should render correctly', async () => {
    // Given
    // When
    await render(NavbarComponent);
    // Then
    expect(screen.getByText(TEXTS.appName)).toBeVisible();
  });
});
