import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Job } from '../../../entities/entities';
import { JobService } from "../../../services/job.service";
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatDialog } from '@angular/material';
import { JobDetailDialogComponent } from './../detail/jobdetaildialog.component';

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
      private Router: Router,
      private dialog: MatDialog) {}

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

    showDetails(jobID: number): void {
      let dialogRef = this.dialog.open(JobDetailDialogComponent, {
        width: '900px',
        data: { jobID: jobID }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

    createJob(): void {
      this.Router.navigate(['/addjob/']);
    }

    edit(jobID: number) {
      this.Router.navigate(['/editjob/' + jobID]);
    } 

    delete(job: Job) {
      if(job.employeeJobs.length > 0 && job.subContractorJobs.length > 0 && job.supplierJobs.length > 0 ) {
          alert(job.jobName + ' ' + "has employees, sub-contractors, and suppliers please remove first");
        } else if (job.employeeJobs.length > 0 && job.subContractorJobs.length > 0) {
          alert(job.jobName + ' ' + "has employees and sub-contractors, please remove first");
        } else if (job.employeeJobs.length > 0 && job.supplierJobs.length > 0) {
          alert(job.jobName + ' ' + "has employees and suppliers, please remove first");
        } else if (job.subContractorJobs.length > 0 && job.supplierJobs.length > 0) {
          alert(job.jobName + ' ' + "has sub-contractors and suppliers, please remove first");
        } else if (job.employeeJobs.length > 0 ) {
          alert(job.jobName + ' ' + "has employees, please remove the employees first");
        } else if (job.subContractorJobs.length > 0) {
          alert(job.jobName + ' ' + "has sub-contractors, please remove the sub-contractors first");
        } else if (job.supplierJobs.length > 0) {
          alert(job.jobName + ' ' + "has suppliers, please remove the suppliers first");
      } else {
        var result = confirm("Are you sure?");
        if(result) {
          this.jobService.delete(job.jobID).subscribe(
            res => {
              this.loadData();
            },
            error => {
              alert(error);
            }
          )
        }
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