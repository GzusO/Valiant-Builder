import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineageListComponent } from './lineage-list.component';

describe('LineageListComponent', () => {
  let component: LineageListComponent;
  let fixture: ComponentFixture<LineageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
