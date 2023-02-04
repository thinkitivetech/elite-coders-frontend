import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSkillsFormComponent } from './technical-skills-form.component';

describe('TechnicalSkillsFormComponent', () => {
  let component: TechnicalSkillsFormComponent;
  let fixture: ComponentFixture<TechnicalSkillsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalSkillsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalSkillsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
