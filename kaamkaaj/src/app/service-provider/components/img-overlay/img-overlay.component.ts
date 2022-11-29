import { Component, OnInit,Input,OnChanges, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-img-overlay',
  templateUrl: './img-overlay.component.html',
  styleUrls: ['./img-overlay.component.css']
})
export class ImgOverlayComponent implements OnInit {
  @Input() reOpenModal: () => void;
  @Input() images: string[]
  base : string = environment.baseUrl;
  constructor() { }

  ngOnInit(): void {
    
  }
  goBacktoBid(){
    this.reOpenModal()
    console.log(this.images)
  }

}
