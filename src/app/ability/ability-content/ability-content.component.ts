import { Component, Input, OnInit } from '@angular/core';
import { Ability } from 'src/app/Ability';
import { DataService } from 'src/app/data.service';
import { Tag } from 'data/tags';

@Component({
  selector: 'app-ability-content',
  templateUrl: './ability-content.component.html',
  styleUrls: ['./ability-content.component.scss']
})
export class AbilityContentComponent implements OnInit {

  @Input() ability?: Ability
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
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
