import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../Feature';

@Component({
  selector: 'app-feature-expansion',
  templateUrl: './feature-expansion.component.html',
  styleUrls: ['./feature-expansion.component.scss']
})
export class FeatureExpansionComponent implements OnInit {

  @Input() feature?: Feature;
  @Input() expanded: boolean= false;
  constructor() { }

  ngOnInit(): void {
  }

}
