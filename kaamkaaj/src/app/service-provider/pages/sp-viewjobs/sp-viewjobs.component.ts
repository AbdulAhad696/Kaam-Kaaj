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
  categ:Object
  cat:string
  searchText:string
  constructor(private viewjob:ViewjobService) { }

  async ngOnInit() {
    this.cat = await this.getcategory()
    this.getjobs(this.cat)  
  }

  async getcategory(){
    this.categ= await (this.viewjob.getcategory())
    return this.categ[0]?.serviceDetails[0]?.tittle
  }

  async getjobs(category:any){
    this.response = await (this.viewjob.getjobs(category)) 
    console.log(this.response)
  }

  

}
