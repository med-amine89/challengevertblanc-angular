import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireVertComponent } from './formulaire-vert.component';

describe('FormulaireVertComponent', () => {
  let component: FormulaireVertComponent;
  let fixture: ComponentFixture<FormulaireVertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireVertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireVertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
