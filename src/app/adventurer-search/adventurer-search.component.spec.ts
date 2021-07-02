import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventurerSearchComponent } from './adventurer-search.component';

describe('AdventurerSearchComponent', () => {
  let component: AdventurerSearchComponent;
  let fixture: ComponentFixture<AdventurerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventurerSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventurerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
