import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Feature } from "src/app/feature/Feature";


@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {

  @Input() feature?: Feature;
  @Input() enableMenu: Boolean = false;
  @Output() deleteClicked: EventEmitter<Feature> = new EventEmitter<Feature>();
  constructor() { }

  ngOnInit(): void {
  }

  clickDelete(): void {
    this.deleteClicked.emit(this.feature);
  }
}
