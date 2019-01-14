import { JobDataSource } from './../../job/list/joblist.component';
import { Injectable, Inject } from '@angular/core';
import { Client } from '../../../entities/entities';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClientService } from '../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { Job } from '../../../entities/entities';





@Component({
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.css']
})

export class ClientDetailComponent implements OnInit {

    userID: number;
    client: Client;
    displayedColumns: string [] = ['jobName', 'address', 'startDate', 'endDate', 
                                  'costEstimate', 'jobDetails'];
  
    dataSource: JobSource;
    constructor(
        public clientService: ClientService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {

        }

  ngOnInit() {
      var userID = this.activatedRoute.snapshot.params.userID;
      this.clientService.get(userID).subscribe(
        res => {
          this.client = res;
          this.dataSource = new JobSource(this.clientService, this.client.userID);
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

export class JobSource extends DataSource<any> {
  constructor(public clientService: ClientService,
              public userID: number
              ) {
    super();
  }

  connect(): Observable<Job[]> {
    return this.clientService.get(this.userID).pipe(map(res => res.jobs));
  }
  disconnect() {}

}




