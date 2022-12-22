import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AddJobService } from 'src/app/Services/add-job/add-job.service';
import { SignInService } from 'src/app/Services/sign-in/sign-in.service';
import { SpinnerService } from 'src/app/Services/spinner/spinner.service';
import { GetServicesService } from '../../Services/get-services/get-services.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient,HttpParams} from '@angular/common/http';
import { Router ,ActivatedRoute } from '@angular/router';
import { ViewChild,ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-job-gigs',
  templateUrl: './job-gigs.component.html',
  styleUrls: ['./job-gigs.component.css']
})
export class JobGigsComponent implements OnInit {
  @ViewChild('fileUploader') fileUploader:ElementRef;
  @ViewChild("amountNumberField") amountNumberField;
  @ViewChild("durationNumberField") durationNumberField;

  constructor( private GetServicesService:GetServicesService , private AddJobService:AddJobService , private SignInService:SignInService , private SpinnerService: SpinnerService , private http: HttpClient  , private route: ActivatedRoute , private datePipe:DatePipe,  @Inject(DOCUMENT) document: Document ,private router:Router) { }
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
  amountText:any;
  categoryText:any;
// -----------------------------schema variables-------------------------
  title:string;
  jobPostDate:string;
  description:string;
  estAmount:number;
  gigPics:any;
  status:string;
  jobAddress:string;
  estCompletionTime:Date;
  category:any
  jobAssignedTo:any;
  jobAssignedBy:any;
  numinText:any
  numinText2:any
  numinText3:any
  successmsg="Job was added successfully"
  failmsg = "Failed to add job"
  success:any
  checkText(){
    let pattern = /[0]{1}[3]{1}[0-9]{9}/g
    let pattern2 = /[0]{1}[3]{1}[0-9]{2}[ ]{1}[0-9]{7}/g
    let pattern3 = /[0]{1}[3]{1}[0-9]{2}[-]{1}[0-9]{7}/g
    this.numinText = pattern.test(this.description)
    this.numinText2 = pattern2.test(this.description)
    this.numinText3 = pattern3.test(this.description)
  }
  // ----------------------------posting job-----------------------
  async addingJob(job:any){
    if(await lastValueFrom( this.AddJobService.postJobApi(job) )){
      // return "Job is added successfully!!!!..........";
      this.success=true
    }
    else{
      // return "Service is down currently. You may try later..";
      this.success=false
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
// -----------------------------------form submission--------------------------
async handleSubmit(){
  if(this.numinText != true){
      const now = Date.now();
      const myFormattedDate = this.datePipe.transform(now, 'short');
      this.jobData = {
        title:this.title,
        jobPostDate:myFormattedDate,
        description:this.description,
        estAmount:this.estAmount,
        status:"punched",
        jobAddress:this.jobAddress,
        estCompletionTime:(this.estCompletionTime),
        category:this.category,
        jobAssignedBy:this.jobAssignedBy,
        gigPics: this.gigPics,
        jobAssignedTo: this.jobAssignedTo
      }
      this.gigPics =await lastValueFrom(this.onMultipleSubmittingImages());
      this.SpinnerService.requestStarted();
      this.isJobAdded =await this.addingJob(this.jobData);
      this.SpinnerService.requestEnded();

  // -------------------------------------resetting the form--------------------------------
      // --------------------refreshinh the component---------------------
      let currenturl = this.router.url
      setTimeout(() => {
        if (this.success == true) {
          this.success = null;
        }
        this.success = null;
      }, 5000);
      setTimeout(() => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([currenturl]);
        });
      }, 4000);
      
    }
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
    // ------------removing validation from amount dropdown-----------
    this.amountText = "a";
  }
// -----------------------------uploading  images----------------------------
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
  // ----------------getting current date--------------------
    gettingCurrentDate(){
      var dtToday = new Date();
      var month = dtToday.getMonth() + 1;
      var day = dtToday.getDate();
      var year = dtToday.getFullYear();
      if(month < 10){
        month = Number('0' + month.toString());
      }
      if(day < 10){
        day = Number('0' + day.toString());
      }
      var currentDate= year + '-' + month + '-' + day;
      (<HTMLInputElement>document.getElementById('date')).min = currentDate;
    }
    // -------------------removing validation from select amount dropdown----------
    removingValidationAmountDropdown(){
      document.getElementById("amountDropdownDivId")?.classList.add("hide");
      this.amountText = "a";
    }
    // -------------------removing validation from select category dropdown----------
    removingValidationCategoryDropdown(){
      document.getElementById("categoryDropdownDivId")?.classList.add("hide");
      this.categoryText = "a";
    }
    
  ngOnInit(): void {
    this.gettingCurrentDate()
    this.gettingServices();
    this.jobAssignedBy = this.SignInService.getId()
// ------------------------showing category of specific service provider-----------------------------
    this.currentServiceProviderCategory = this.route.snapshot.paramMap.get('category');
    this.jobAssignedTo = this.route.snapshot.paramMap.get('id');
    if(typeof(this.currentServiceProviderCategory) == "string"){
      this.currentCategory = this.currentServiceProviderCategory;
      this.currentService(this.currentServiceProviderCategory)
      this.btnState = true;
      // ------------removing validation from category dropdown-----------
      this.categoryText = "a";
    }
  }
}
  