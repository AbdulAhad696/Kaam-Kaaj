import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ViewjobService } from 'src/app/Services/viewjob/viewjob.service';

@Component({
  selector: 'app-sp-viewjobs',
  templateUrl: './sp-viewjobs.component.html',
  styleUrls: ['./sp-viewjobs.component.css']
})
export class SpViewjobsComponent implements OnInit {
  response:Object
  cat:string
  constructor(private viewjob:ViewjobService) { }

  async ngOnInit() {
    this.cat = await this.getcategory()
    this.getjobs(this.cat)  
    
  }

  async getcategory(){
    this.response= await (this.viewjob.getcategory())
    return this.response[0]?.serviceDetails[0]?.tittle
  }

  async getjobs(category:any){
    this.response = await (this.viewjob.getjobs(category)) 
  }

}
