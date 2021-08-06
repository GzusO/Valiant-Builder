import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagTooltipDialogComponent } from './tag-tooltip-dialog.component';

describe('TagTooltipDialogComponent', () => {
  let component: TagTooltipDialogComponent;
  let fixture: ComponentFixture<TagTooltipDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagTooltipDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagTooltipDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
