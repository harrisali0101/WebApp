import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { countriesStore } from '../countries-store';
import { ApplicantDetail } from '../shared/applicant-detail.model';
import { DetailsService } from '../shared/details.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  constructor(public service:DetailsService, 
    private toastr:ToastrService, 
    private route : ActivatedRoute, public router : Router,
    public http:HttpClient) { }
   
    data:any;
    resp:number;
    store = countriesStore;
    countries: any[] = [];
    countURL ="https://restcountries.eu/rest/v2/name/";
    i:number=0;
    validCountry:boolean=false;
  ngOnInit(): void {

    if (this.store.countries.length == 0) {
      this.service.getCountries()
        .subscribe(res => {
          this.store.setCountries(res);
        })
    }

      

    
  }


 

  change(){
    this.router.navigate(['/list']);
  }

  onSubmit(form:NgForm){
      
    this.validateCountry();
    if(this.service.formData.id!=0)
    {
      if(this.validCountry)
      {
        this.updateData(form);
      }
      else
      {
        this.toastr.error("Enter Correct country Please");
      }
      

    }
    else
    {
      if(this.validCountry)
      {
        var x =this.addData(form);
      }
      else
      {
        this.toastr.error("Enter Correct country Please");
      }
    }
      

      
    
      
      
    
    
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new ApplicantDetail();
  }

  addData(form:NgForm){
    this.service.postApplicant().subscribe(
      res=>{
            console.log(res);
            this.resetForm(form);
            this.toastr.success('Data Submitted Successfully','Applicant Data');
            this.router.navigate(['/list']);
      },
      err=>{
            this.toastr.error(err,'Error')
        console.log(err)
      }
    )
  }
  updateData(form:NgForm){
    this.service.putApplicant().subscribe(
      res=>{
            this.resetForm(form);
            this.toastr.info('Data Updated Successfully','Applicant Data');
            this.router.navigate(['/list']);
      },
      err=>{
            this.toastr.error(err,'Error')
        console.log(err)
      }
    )
  }
  validateCountry(){
    for( this.i = 0; this.i<this.store.countries.length;this.i++){
        if(this.service.formData.countryOfOrigin==this.store.countries[this.i].name.toLowerCase()
        ||this.service.formData.countryOfOrigin==this.store.countries[this.i].name){
          console.log("valid country working");
          this.validCountry=true;
          break;
        }
      }
  }

}
