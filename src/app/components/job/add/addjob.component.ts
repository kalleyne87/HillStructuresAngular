import { Injectable } from '@angular/core';
import { Job } from '../../../entities/entities';
import { JobService } from '../../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './addjob.component.html'
})

export class AddJobComponent implements OnInit {

    jobForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private jobService: JobService,
        private router: Router) {}

    ngOnInit() {
      this.jobForm = this.formBuilder.group({
        jobName: '',
        address: '',
        startDate: '',
        endDate: '',
        costEstimate: 0,
      });
    }

    save() {
      this.jobService.create(this.jobForm.value).subscribe(
        res => {
          this.router.navigate(['index']);
        },
        error => {
          console.log(error);
        }
      );
    }
}
