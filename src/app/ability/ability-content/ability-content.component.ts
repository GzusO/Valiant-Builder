import { Component, Input, OnInit } from '@angular/core';
import { Ability } from 'src/app/Ability';
import { DataService } from 'src/app/data.service';
import { Tag } from 'data/tags';
import { MatDialog } from '@angular/material/dialog';
import { TagTooltipDialogComponent } from 'src/app/tag/tag-tooltip-dialog/tag-tooltip-dialog.component';

@Component({
  selector: 'app-ability-content',
  templateUrl: './ability-content.component.html',
  styleUrls: ['./ability-content.component.scss']
})
export class AbilityContentComponent implements OnInit {

  @Input() ability?: Ability
  @Input() includeTitle: boolean =true;
  @Input() big: boolean = false;
  constructor(private dataService: DataService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openTagDialog(name: string){
    const dialogRef = this.dialog.open(TagTooltipDialogComponent, {data:name});
  }
  getTagDescription(tag: string): string {
    let description: string = 'Unknown';
    let result = this.getTagByName(tag);
    description = result===undefined ? "Unknown": result.description;
    return description;
  }
  
  getTagByName(tag: string): Tag | undefined {
    let trimmedTag = tag.match(/[a-zA-Z ]+/g);
    if (trimmedTag === null)
      return undefined;
    return this.dataService.getTagByName(trimmedTag[0].trim());
  }

}
