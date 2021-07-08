import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicListComponent } from './characteristic-list.component';

describe('CharacteristicListComponent', () => {
  let component: CharacteristicListComponent;
  let fixture: ComponentFixture<CharacteristicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacteristicListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
