import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Job } from '../../../entities/entities';
import { JobService } from "../../../services/job.service";
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';

@Component({
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']  
})

export class JobListComponent implements OnInit {

    jobs: Job[];
    dataSource = new JobDataSource(this.jobService);
    displayedColumns = ['jobName', 'address', 'startDate', 'endDate',
     'edit', 'add'];
    constructor(
      private jobService: JobService,
      private Router: Router) {}

    ngOnInit() {
      this.jobService.getAll().subscribe(
        res => {
          this.loadData();
        },
        error => {
          alert(error);
        }
      )
    }

    edit(jobID: number) {
      this.Router.navigate(['/editjob/' + jobID]);
    } 

    delete(userId: number) {
      var result = confirm("Are you sure?");
      if(result) {
        this.jobService.delete(userId).subscribe(
          res => {
            this.loadData();
          },
          error => {
            alert(error);
          }
        )
      }
    }

    loadData() {
      this.jobService.getAll().subscribe(
        res => {
          this.jobs = res;
        },
        error => {
          alert(error);
        }
      )
    }
}

export class JobDataSource extends DataSource<any> {
  constructor(private jobService: JobService) {
    super();
  }

  connect(): Observable<Job[]> {
    return this.jobService.getAll();
  }

  disconnect() {} 
}