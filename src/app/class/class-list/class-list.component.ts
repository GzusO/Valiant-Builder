import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/class/Class';
import { Feature } from 'src/app/feature/Feature';
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

  primary(data: Feature[]): Feature[] {
    return data.filter(x=>x.types.includes('Combat'))
  }
  secondary(data: Feature[]): Feature[] {
    return data.filter(x=>x.types.includes('Utility'))
  }
}
