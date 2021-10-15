import { Component, OnInit } from '@angular/core';
import { Ability } from 'src/app/Ability';
import { Class } from 'src/app/class/Class';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {
  classes: Class[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getClasses();
  }
  getClasses(): void {
    this.dataService.getClasses().subscribe(classes => this.classes = classes);
  }

  primary(data: Ability[]): Ability[] {
    return data.filter(x=>x.source.includes('Combat'))
  }
  secondary(data: Ability[]): Ability[] {
    return data.filter(x=>x.source.includes('Utility'))
  }
}
