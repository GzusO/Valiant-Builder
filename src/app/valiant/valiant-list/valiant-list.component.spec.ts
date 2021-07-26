import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiantListComponent } from './valiant-list.component';

describe('ValiantListComponent', () => {
  let component: ValiantListComponent;
  let fixture: ComponentFixture<ValiantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiantListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
