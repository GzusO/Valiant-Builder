import { Component, OnInit } from '@angular/core';
import { Class } from '../adventurer';
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
}
