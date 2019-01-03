import { Injectable } from '@angular/core';
import { Job, Client } from '../../../entities/entities';
import { ClientService } from '../../../services/client.service';
import { JobService } from '../../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})

export class AddJobComponent implements OnInit {

    jobForm: FormGroup;
    clients: Client[];
    constructor(
        private formBuilder: FormBuilder,
        private jobService: JobService,
        private clientService: ClientService,
        private router: Router) {}

    ngOnInit() {
      this.jobForm = this.formBuilder.group({
        clientID: 0,
        jobName: '',
        address: '',
        startDate: '',
        endDate: '',
        costEstimate: 0,
      });
      this.clientService.getAll().subscribe(
        res => {
          this.clients = res;
        },
        error => {
          alert(error);
        }
      );
    }

    save() {
      this.jobService.create(this.jobForm.value).subscribe(
        res => {
          this.router.navigate(['/joblist/']);
        },
        error => {
          console.log(error);
        }
      );
    }
}
