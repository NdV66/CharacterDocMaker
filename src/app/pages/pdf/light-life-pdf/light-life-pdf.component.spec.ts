import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightLifePdfComponent } from './light-life-pdf.component';

describe('LightLifePdfComponent', () => {
  let component: LightLifePdfComponent;
  let fixture: ComponentFixture<LightLifePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightLifePdfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LightLifePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
