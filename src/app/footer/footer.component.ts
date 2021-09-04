import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() valianceVersion: string ="0.20.1";
  constructor() { }

  ngOnInit(): void {
  }

}
