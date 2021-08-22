import { Component, Inject } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'data/items';
import { COMMA, ENTER } from '@angular/cdk/keycodes'

@Component({
  selector: 'app-item-edit-dialog',
  templateUrl: './item-edit-dialog.component.html',
  styleUrls: ['./item-edit-dialog.component.scss']
})
export class ItemEditDialogComponent {
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  constructor(@Inject(MAT_DIALOG_DATA) public item: Item){}

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.item.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: string): void {
    const index = this.item.tags.indexOf(tag);

    if (index >= 0) {
      this.item.tags.splice(index, 1);
    }
  }
}
