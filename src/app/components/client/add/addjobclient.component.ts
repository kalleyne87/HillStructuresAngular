import { Injectable } from '@angular/core';
import { Client } from '../../../entities/entities';
import { ClientService } from './../../../services/client.service';
import { JobService } from './../../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './addjobclient.component.html'
})

export class AddJobClientComponent implements OnInit {

  jobForm: FormGroup;
  clients: Client[] = [];
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
        this.clients.push(res);
        this.jobForm = this.formBuilder.group({
          clientID: this.userID,
          jobName: '',
          address: '',
          startDate: '',
          endDate: '',
          costEstimate: 0,
          client: res
        });
        const toSelect = this.clients.find(c => c.userID == this.userID);
        this.jobForm.get('client').setValue(toSelect);
      },
      error => {
        console.log(error);
      }
    )


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
