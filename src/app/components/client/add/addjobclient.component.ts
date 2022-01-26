import { Injectable } from '@angular/core';
import { Client } from '../../../entities/entities';
import { ClientService } from './../../../services/client.service';
import { JobService } from './../../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './addjobclient.component.html',
  styleUrls: ['./addjobclient.component.css'] 
})

export class AddJobClientComponent implements OnInit {

  jobForm: FormGroup;
  client: Client;
  userID: number
  constructor(
      private formBuilder: FormBuilder,
      private jobService: JobService,
      private clientService: ClientService,
      private router: Router,
      private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.userID = this.activatedRoute.snapshot.params.userID;
    this.clientService.get(this.userID).subscribe(
      res => {
        this.client = res;
        this.jobForm = this.formBuilder.group({
          clientName: [{ value: this.client.firstName + ' ' + this.client.lastName, disabled: true }],
          clientID: this.client.userID,
          jobName: '',
          address: '',
          startDate: '',
          endDate: '',
          costEstimate: 0
        });
      },
      error => {
        console.log(error);
      })

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
