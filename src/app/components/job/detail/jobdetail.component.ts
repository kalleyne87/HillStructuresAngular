import { JobDataSource } from '../list/joblist.component';
import { Injectable, Inject } from '@angular/core';
import { Job } from '../../../entities/entities';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JobService } from '../../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/table';






@Component({
  templateUrl: './jobdetail.component.html',
  styleUrls: ['./jobdetail.component.css']
})

export class JobDetailComponent implements OnInit {

    jobID: number;
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
      var userID = this.activatedRoute.snapshot.params.userID;
      this.jobService.get(userID).subscribe(
        res => {
          this.job = res;
          //this.dataSource = new JobSource(this.jobService, this.job.jobID);
        },
        error => {
          alert(error);
        }
      )
  }

  jobdetails(jobID: number): void {
    this.router.navigate(['/jobdetail/' + jobID]);
  }

}

/*export class JobSource extends DataSource<any> {
  constructor(public clientService: ClientService,
              public userID: number
              ) {
    super();
  }

  connect(): Observable<Job[]> {
    return this.clientService.get(this.userID).pipe(map(res => res.jobs));
  }
  disconnect() {}

}*/




