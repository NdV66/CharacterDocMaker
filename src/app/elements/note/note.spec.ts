import { render, screen } from '@testing-library/angular';
import { NoteComponent } from './note.component';

const text = 'Did you know, that Namo Mandos is the best character ever?';

describe('Note', () => {
  it('Should render correctly', async () => {
    // Given
    // When
    await render(NoteComponent, { componentInputs: { text } });
    // Then
    expect(screen.getByText(text)).toBeVisible();
  });
});
