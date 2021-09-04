import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/class/Class';
import { Feature } from 'src/app/feature/Feature';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.scss']
})
export class ClassDetailComponent implements OnInit {

  @Input() class?: Class;
  constructor() { }

  ngOnInit(): void {
  }

  primary(data: Feature[]): Feature[] {
    return data.filter(x=>x.types.includes('Combat'));
  }
  secondary(data: Feature[]): Feature[] {
    return data.filter(x=>x.types.includes('Utility'));
  }
  global(data: Feature[]): Feature[] {
    return data.filter(x=>x.types.includes('Global'));
  }
  hasGlobal(data: Feature[]): boolean {
    return data.some(x=> x.types.includes("Global"));
  }
  uniqueType(): string {
    return this.class?.abilities.length === 0 ? "Trait Pool" : "Ability Pool";
  }
}
