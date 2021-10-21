import { Directive,ElementRef, HostListener} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TagTooltipDialogComponent } from './tag/tag-tooltip-dialog/tag-tooltip-dialog.component';

@Directive({
  selector: '[tag]'
})
export class TagDirective {

  @HostListener('click') onClick(){
    const dialogRef = this.dialog.open(TagTooltipDialogComponent, {data:this.el.nativeElement.innerHTML});
  }
  constructor(private el: ElementRef,public dialog: MatDialog) { }

  private clicked(){
    this.el.nativeElement.content
  }
}
