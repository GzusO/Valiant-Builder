import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Ability } from 'src/app/Ability';
import { Archetype, Class } from 'src/app/class/Class';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.scss']
})
export class ClassDetailComponent implements OnInit {

  @Input() class?: Class;
  archetypes: Archetype[] =[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getArchetypes();
  }
  getArchetypes(): void {
    if(this.class)
      this.dataService.getArchetypesByClassName(this.class.name).subscribe(archetypes => this.archetypes = archetypes);
  }
  primary(data: Ability[]): Ability[] {
    return data.filter(x=>!x.source.includes('Utility'));
  }
  utility(data: Ability[]): Ability[] {
    return data.filter(x=>x.source.includes('Utility'));
  }
}
