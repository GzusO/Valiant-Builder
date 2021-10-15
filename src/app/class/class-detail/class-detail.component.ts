import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Ability } from 'src/app/Ability';
import { Class } from 'src/app/class/Class';


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

  primary(data: Ability[]): Ability[] {
    return data.filter(x=>x.source.includes('Combat'));
  }
  secondary(data: Ability[]): Ability[] {
    return data.filter(x=>x.source.includes('Utility'));
  }
  global(data: Ability[]): Ability[] {
    return data.filter(x=>x.source.includes('Global'));
  }
  hasGlobal(data: Ability[]): boolean {
    return data.some(x=> x.source.includes("Global"));
  }
}
