import { render, screen } from '@testing-library/angular';
import { FooterComponent } from './footer.component';
import { TEXTS } from '@translations/en-EN';

describe('Footer', () => {
  it('Should create as basic', async () => {
    // Given
    // When
    await render(FooterComponent);
    // Then
    const contact = screen.getByText(TEXTS.footer.contact.title);
    const github = screen.getByText(TEXTS.footer.github.title);

    expect(contact).toBeInTheDocument();
    expect(github).toBeInTheDocument();
    expect(screen.getByText(TEXTS.footer.info)).toBeInTheDocument();
    expect(contact).toHaveAttribute('href', TEXTS.footer.contact.link);
    expect(github).toHaveAttribute('href', TEXTS.footer.github.link);
  });
});
