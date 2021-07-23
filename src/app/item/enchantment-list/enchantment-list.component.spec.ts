import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchantmentListComponent } from './enchantment-list.component';

describe('EnchantmentListComponent', () => {
  let component: EnchantmentListComponent;
  let fixture: ComponentFixture<EnchantmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnchantmentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnchantmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
