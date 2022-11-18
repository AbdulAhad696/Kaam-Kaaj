import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ViewjobService } from 'src/app/Services/viewjob/viewjob.service';

@Component({
  selector: 'app-sp-viewjobs',
  templateUrl: './sp-viewjobs.component.html',
  styleUrls: ['./sp-viewjobs.component.css']
})
export class SpViewjobsComponent implements OnInit {
  response:any
  data:{}
  constructor(private viewjob:ViewjobService) { }

  async ngOnInit() {
    this.response = await this.getcategory()
    this.getjobs(this.response)  
    
  }

  async getcategory(){
    this.response= await(this.viewjob.getcategory())
    return this.response[0].serviceDetails[0].tittle
  }

  async getjobs(category:string){
    this.response = await (this.viewjob.getjobs(category)) 
    this.data={
      title:this.response[0].title,
      description:this.response[0].description,
      category:this.response[0].serviceDetails[0].tittle,
      clientrating:this.response[0].clientRating,
      location:this.response[0].jobAddress,
      time:this.response[0].jobPostDate
    }
    
  }

}
