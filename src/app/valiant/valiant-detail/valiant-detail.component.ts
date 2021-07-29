import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Valiant } from 'data/valiant';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-valiant-detail',
  templateUrl: './valiant-detail.component.html',
  styleUrls: ['./valiant-detail.component.scss']
})
export class ValiantDetailComponent implements OnInit {
  valiant?: Valiant;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.valiant = history.state
  }

  save():void {
    this.dataService.updateValiant(this.valiant!);
  }
}
