import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiantDetailComponent } from './valiant-detail.component';

describe('ValiantDetailComponent', () => {
  let component: ValiantDetailComponent;
  let fixture: ComponentFixture<ValiantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiantDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
