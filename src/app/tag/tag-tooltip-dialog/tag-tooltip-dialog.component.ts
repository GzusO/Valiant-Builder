import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tag } from 'data/tags';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-tag-tooltip-dialog',
  templateUrl: './tag-tooltip-dialog.component.html',
})
export class TagTooltipDialogComponent implements OnInit{
  tag?: Tag;
  constructor(@Inject(MAT_DIALOG_DATA) public tagName: string, private dataService: DataService) { }

  ngOnInit(){
    this.tag = this.getTagByName(this.tagName);
  }
  
  getTagByName(tag: string): Tag | undefined {
    let trimmedTag = tag.match(/[a-zA-Z ]+/g);
    if (trimmedTag === null)
      return undefined;
    return this.dataService.getTagByName(trimmedTag[0].trim());
  }
}
