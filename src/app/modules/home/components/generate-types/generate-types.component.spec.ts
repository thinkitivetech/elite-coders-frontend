import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTypesComponent } from './generate-types.component';

describe('GenerateTypesComponent', () => {
  let component: GenerateTypesComponent;
  let fixture: ComponentFixture<GenerateTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
