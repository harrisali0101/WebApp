import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicantDetail } from './applicant-detail.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http:HttpClient) { }

  
  formData:ApplicantDetail = new ApplicantDetail();
  readonly baseURL = 'http://localhost:5000/api/ApplicantDetails'
  readonly countryURL = 'https://restcountries.eu/rest/v2/all?fields=name'
  list : ApplicantDetail[];
  
  
  getCountries(){
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
  
  
  postApplicant(){
    console.log("data going in db")
     return this.http.post(this.baseURL,this.formData);
     
  }

  putApplicant(){
    console.log("data updating in db")
     return this.http.put(`${this.baseURL}/${this.formData.id}`,this.formData);
  }

  refreshList(){
    
    this.http.get(this.baseURL)
    .toPromise()
    .then(res=> this.list = res as ApplicantDetail[]);
  }

  deleteApplicantDetail(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
