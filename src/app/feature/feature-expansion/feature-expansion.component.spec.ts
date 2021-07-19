import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureExpansionComponent } from './feature-expansion.component';

describe('FeatureExpansionComponent', () => {
  let component: FeatureExpansionComponent;
  let fixture: ComponentFixture<FeatureExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureExpansionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
