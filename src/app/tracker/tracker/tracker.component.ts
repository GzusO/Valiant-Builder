import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICON_REGISTRY_PROVIDER_FACTORY } from '@angular/material/icon';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {

  constructor() { }

  amount: boolean[]= [];
  @Input() limit: number = 1;
  @Input() marked: number =0;
  @Output() markedChange = new EventEmitter<number>();
  @Output() limitChange = new EventEmitter<number>();
  @Input() icon: string = "person";
  @Input() label: string = "";

  Arr = Array; //Array type captured in a variable

  ngOnInit(): void {
    this.amount = new Array<boolean>(this.limit);
    
  }

  dec() {this.resize(-1);}
  inc() {this.resize(+1);}

  resize(delta: number){
    this.marked =Math.max(0,Math.min(this.limit,+this.marked+delta))
    this.markedChange.emit(this.marked);
  }

  trackerChanged(amount:number):void {
    this.marked = amount+1;
    this.markedChange.emit(this.marked);
  }

  getIcon(index: number): string {
    if(this.icon =="favorite"){
      if(index >= this.marked)
        return "favorite_border"
      return "favorite"
    }
    return this.icon;
  }

  limitChanged($event: any){
    this.limitChange.emit(this.limit);
  }
  markedChanged($event: any){
    this.markedChange.emit(this.marked);
  }
}
