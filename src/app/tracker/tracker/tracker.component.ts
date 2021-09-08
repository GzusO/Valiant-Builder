import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {

  constructor() { }

  amount: boolean[] = [];

  @Input() limit: number = 1;
  @Input() marked: number =0;
  ngOnInit(): void {
    this.amount = new Array<boolean>(this.limit);
    for(var i  = 0;i<this.amount.length;i++){
      this.amount[i] = false;
    }
    for(var i = 0;i<this.marked;i++){
      this.amount[i]=true;
    }
  }

  trackerChanged($event :any, index:number):void {
    if($event.checked){
      this.marked = index + 1;
    }
    else{
      this.marked = index;
    }
  }
  buttonClicked(direction: string):void{
    
      
    if(direction === "-"){
      this.marked--;
    }
    else{
      this.marked++;
    }
    if(this.marked > this.limit)
      this.marked= this.limit;
    if(this.marked < 0){
      this.marked = 0;
    }

  }
}
