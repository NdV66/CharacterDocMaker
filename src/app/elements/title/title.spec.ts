import { render, screen } from '@testing-library/angular';
import { TitleComponent } from './title.component';

const title = 'Lorien Garden is the best place in Aman.';
const subtitle = "Trust me, I'm an Vala.";

describe('Title', () => {
  it('Should render correctly (title only)', async () => {
    //Given
    //When
    await render(TitleComponent, { componentInputs: { title } });
    //Then
    expect(screen.getByText(title)).toBeVisible();
  });

  it('Should render correctly (title and subtitle)', async () => {
    //Given
    //When
    await render(TitleComponent, { componentInputs: { title, subtitle } });
    //Then
    expect(screen.getByText(title)).toBeVisible();
    expect(screen.getByText(subtitle)).toBeVisible();
  });
});
