import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSummaryFormComponent } from './project-summary-form.component';

describe('ProjectSummaryFormComponent', () => {
  let component: ProjectSummaryFormComponent;
  let fixture: ComponentFixture<ProjectSummaryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSummaryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSummaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
