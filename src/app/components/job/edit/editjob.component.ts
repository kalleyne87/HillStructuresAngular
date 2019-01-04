import { Injectable } from '@angular/core';
import { Job, Client } from '../../../entities/entities';
import { JobService } from '../../../services/job.service';
import { ClientService } from '../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './editjob.component.html',
  styleUrls: ['./editjob.component.css']
})

export class EditJobComponent implements OnInit {

    jobForm: FormGroup;
    job: Job;
    clients: Client[];
    constructor(
        private formBuilder: FormBuilder,
        private jobService: JobService,
        private clientService: ClientService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
      var jobID = this.activatedRoute.snapshot.params.jobID;
      this.jobService.get(jobID).subscribe(
        res => {
          this.job = res;
          this.jobForm = this.formBuilder.group({
            clientID: res.clientID,
            jobID: res.jobID,
            jobName: res.jobName,
            address: res.address,
            startDate: res.startDate,
            endDate: res.endDate,
            costEstimate: res.costEstimate,
          });
        },
        error => {
          console.log(error);
        }
      );
    }

    save() {
      this.jobService.update(this.jobForm.value).subscribe(
        res => {
          this.router.navigate(['/joblist/']);
        },
        error => {
          console.log(error);
        }
      );
    }
}
