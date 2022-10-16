import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 3;
  isMouseover = true;

  countStar(star: number) {
    this.isMouseover = false;
    this.selectedValue = star;
  }

  addClass(star: number) {
    if (this.isMouseover) {
      this.selectedValue = star;
    }
  }

  removeClass() {
    if (this.isMouseover) {
        this.selectedValue = 0;
    }
  }
  setSelectedValue(rate:any){
    this.selectedValue=rate
  }

  ngOnInit(): void {
  }

}
