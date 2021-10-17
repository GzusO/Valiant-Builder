import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityListItemComponent } from './ability-list-item.component';

describe('AbilityListItemComponent', () => {
  let component: AbilityListItemComponent;
  let fixture: ComponentFixture<AbilityListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
