import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApplicantDetail } from '../shared/applicant-detail.model';
import { DetailsService } from '../shared/details.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  constructor(private route : ActivatedRoute,
     public router : Router,
     public service: DetailsService,
     private toastr: ToastrService) { }

  ngOnInit(): void {
    
    this.service.refreshList();
    
    
  }
  change(){
      this.router.navigate(['/form']);
  }

  onDelete(id:number){
    if(confirm('Are you sure you want to delete this data?')){
      

    
    this.service.deleteApplicantDetail(id).subscribe(
      res=>{
        this.toastr.error('Data Deleted Successfully.', 'Applicant Detail Deleted')
        this.service.refreshList();
      },
      err=>{
          console.log(err);
      }
    )
    }
  }

  onEdit(sR:ApplicantDetail){
    console.log(sR);
    this.service.formData = Object.assign({},sR);
    this.router.navigate(['/form/'], {relativeTo:this.route});

  }

}
