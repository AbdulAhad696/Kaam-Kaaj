import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';


@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  constructor() { }
  baseUrlFrontEnd=environment.baseUrlFronrEnd

  ngOnInit(): void {
  }

}
