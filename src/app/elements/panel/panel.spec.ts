import { render, screen } from '@testing-library/angular';
import { PanelComponent } from './panel.component';

const title = 'lotr';
const subtitle = 'Did you know, that Namo Mandos is the best character ever?';

describe('Note', () => {
  it('Should render correctly', async () => {
    // Given
    // When
    await render(PanelComponent, { componentInputs: { title, subtitle } });
    // Then
    expect(screen.getByText(title)).toBeVisible();
    expect(screen.getByText(subtitle)).toBeVisible();
  });
});
