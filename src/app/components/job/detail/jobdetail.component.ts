import { JobDataSource } from '../list/joblist.component';
import { Injectable, Inject } from '@angular/core';
import { Client } from '../../../entities/entities';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JobService } from '../../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { Job } from '../../../entities/entities';





@Component({
  templateUrl: './jobdetail.component.html',
  styleUrls: ['./jobdetail.component.css']
})

export class JobDetailComponent implements OnInit {

    userID: number;
    job: Job;
    displayedColumns: string [] = ['jobName', 'address', 'startDate', 'endDate', 
                                  'costEstimate', 'jobDetails'];
  
    //dataSource: JobSource;
    constructor(
        public jobService: JobService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {

        }

  ngOnInit() {
      var jobID = this.activatedRoute.snapshot.params.jobID;
      this.jobService.get(jobID).subscribe(
        res => {
          this.job = res;
          //this.dataSource = new JobSource(this.jobService, this.job.jobID);
        },
        error => {
          alert(error);
        }
      )
  }

  // jobdetails(jobID: number): void {
  //   this.router.navigate(['/jobdetail/' + jobID]);
  // }

}

export class EmployeeSource {
   constructor(public jobService: JobService,
               public jobID: number
               ) {
   }

  //   connect(): Observable<Job[]> {
  //    return this.jobService.get(this.jobID).pipe(map(res => res.employeeJobs.get()(map(res => )));
  //  }
   disconnect() {}

}




