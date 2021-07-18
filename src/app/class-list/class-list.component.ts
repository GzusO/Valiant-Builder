import { Component, OnInit } from '@angular/core';
import { Class } from "../Class";
import { Feature } from "../feature/Feature";
import { DataService } from '../data.service';

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
    return data.filter(x=>x.types.includes('Primary'))
  }
  secondary(data: Feature[]): Feature[] {
    return data.filter(x=>x.types.includes('Secondary'))
  }
}
