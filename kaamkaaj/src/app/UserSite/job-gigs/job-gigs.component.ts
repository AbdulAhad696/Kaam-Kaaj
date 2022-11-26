import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AddJobService } from 'src/app/Services/add-job/add-job.service';
import { SignInService } from 'src/app/Services/sign-in/sign-in.service';
import { SpinnerService } from 'src/app/Services/spinner/spinner.service';
import { GetServicesService } from '../../Services/get-services/get-services.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient,HttpParams} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ViewChild,ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-job-gigs',
  templateUrl: './job-gigs.component.html',
  styleUrls: ['./job-gigs.component.css']
})
export class JobGigsComponent implements OnInit {
  @ViewChild('fileUploader') fileUploader:ElementRef;
  @ViewChild("amountNumberField") amountNumberField;
  @ViewChild("durationNumberField") durationNumberField;

  constructor( private GetServicesService:GetServicesService , private AddJobService:AddJobService , private SignInService:SignInService , private SpinnerService: SpinnerService , private http: HttpClient  , private route: ActivatedRoute , private datePipe:DatePipe ) { }
// -----------------------variable required--------------------------
  allServices: any;
  jobData:any;
  isJobAdded:any;
  selectedServiceObject:any;
  currentCategory="Choose Category";
  currentAmount = "Choose Amount";
  currentDuration = "Choose Duration";
  currentServiceProviderCategory:any;
  btnState:boolean = false;

// -----------------------------schema variables-------------------------
  title:string;
  jobPostDate:string;
  description:string;
  estAmount:number;
  // clientRating:number;
  // bids:any;
  gigPics:any;
  // spRating:number;
  status:string;
  jobAddress:string;
  estCompletionTime:number;
  category:any
  // jobAssignedTo:any;
  jobAssignedBy:any;
  // jobDescription:"";
  // clientAddress:"";

  // ----------------------------posting job-----------------------
  async addingJob(job:any){
    if(await lastValueFrom( this.AddJobService.postJobApi(job) )){
      return "Job is added successfully!!!!..........";
    }
    else{
      return "Service is down currently. You may try later..";
    }
  }

  // ------------------------geting selected service -----------------
  async currentService(currentService:string){
    this.selectedServiceObject =await lastValueFrom(this.AddJobService.getSpecificJob(currentService))
    this.category = this.selectedServiceObject[0]._id;
    this.currentCategory = currentService;
  }

  // ----------------------------getting selected amount--------------------
  gettingAmount(amount:number){
    this.estAmount = amount;
    this.currentAmount = String(amount);
  }

  // ------------------------------getting selected time----------------------
  gettingTime(duration:string){
    this.estCompletionTime = Number(duration);
    this.currentDuration = String(duration);
  }

// -----------------------------------form submission--------------------------
async handleSubmit(){
    const now = Date.now();
    const myFormattedDate = this.datePipe.transform(now, 'short');
    this.jobData = {
      title:this.title,
      jobPostDate:myFormattedDate,
      description:this.description,
      estAmount:this.estAmount,
      status:"punched",
      jobAddress:this.jobAddress,
      estCompletionTime:this.estCompletionTime,
      category:this.category,
      jobAssignedBy:this.jobAssignedBy,
      gigPics: this.gigPics
    }
    this.gigPics =await lastValueFrom(this.onMultipleSubmittingImages());
    this.SpinnerService.requestStarted();
    this.isJobAdded =await this.addingJob(this.jobData);
    this.SpinnerService.requestEnded();

// -------------------------------------resetting the form--------------------------------
    // this.title="";
    // this.jobPostDate= ;
    // this.description="";
    // this.estAmount=0;
    // this.status="";
    // this.jobAddress="";
    // this.estCompletionTime=0;
    // this.category="";
    // this.jobAssignedBy="";
    // if(this.btnState == false){
    //   this.currentCategory="Choose Category";
    // }
    // else{
    //   this.currentCategory = this.currentServiceProviderCategory;
    //   this.btnState = true;
    // }
    // this.currentAmount = "Choose Amount";
    // this.currentDuration = "Choose Duration";
    // this.fileUploader.nativeElement.value = null;
    
    setTimeout(()=>{
      alert(this.isJobAdded);
    },10)

    window.location.reload();
  }

  // --------------------------getting all services-----------------------------
  async gettingServices(){
    this.allServices = await lastValueFrom(this.GetServicesService.fetchingServices());
  }

  // ----------------------------converting amount dropdown to input field------------------
  amountToogle(){
    document.getElementById("amountdropdown")?.classList.add("hide");
    document.getElementById("amountFields")?.classList.remove("hide");
    this.amountNumberField.nativeElement.focus();
  }

// ----------------------------converting duration dropdown to input field-----------------------
  timeToogle(){
    document.getElementById("Durationdropdown")?.classList.add("hide");
    document.getElementById("DurationFields")?.classList.remove("hide");
    this.durationNumberField.nativeElement.focus();
  }

// -----------------------------uploading images----------------------------
  selectMultipleImages(event){
    if(event.target.files.length > 0){
      this.gigPics = event.target.files;
    }
  }
  onMultipleSubmittingImages(){
    const formData = new FormData();
    if(this.gigPics != null){
      for(let img of this.gigPics){
        formData.append('files',img)
      }
    }
    return this.http.post<any>(`${environment.baseUrl}/addJobs/multipleImages` , formData)  }

  ngOnInit(): void {
    this.gettingServices();
    this.jobAssignedBy = this.SignInService.getId()
// ------------------------showing category ofspecific service provider-----------------------------
    this.currentServiceProviderCategory = this.route.snapshot.paramMap.get('category');
    if(typeof(this.currentServiceProviderCategory) == "string"){
      this.currentCategory = this.currentServiceProviderCategory;
      this.currentService(this.currentServiceProviderCategory)
      this.btnState = true;
    }
  }
}
  