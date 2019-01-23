import { Injectable, Inject } from '@angular/core';
import { Job } from '../../../entities/entities';
import { JobService } from '../../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './jobdetaildialog.component.html',
  styleUrls: ['./jobdetaildialog.component.css'] 
})

export class JobDetailDialogComponent implements OnInit {

    userID: number;
    job: Job;
    constructor(
        public dialogRef: MatDialogRef<JobDetailDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public jobService: JobService) {

        }

  ngOnInit() {
      this.jobService.get(this.data.jobID).subscribe(
        res => {
          this.job = res;
          this.job.employees = this.jobService.getEmployees(this.job.jobID);
        },
        error => {
          alert(error);
        }
      )
  }
}

