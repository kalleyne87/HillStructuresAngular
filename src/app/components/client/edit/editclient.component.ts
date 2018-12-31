import { Injectable } from '@angular/core';
import { Client } from '../../../entities/entities';
import { ClientService } from '../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './editclient.component.html'
})

export class EditClientComponent implements OnInit {

    clientForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private clientService: ClientService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
      var userID = this.activatedRoute.snapshot.params.userID;
      this.clientService.get(userID).subscribe(
        res => {
          this.clientForm = this.formBuilder.group({
            address: res.address,
            firstName: res.firstName,
            lastName: res.lastName,
            phoneNumber: res.phoneNumber,
            emailAddress: res.emailAddress,
            userID: res.userID
          });
        },
        error => {
          console.log(error);
        });
    }

    save() {
      this.clientService.update(this.clientForm.value).subscribe(
        res => {
          this.router.navigate(['clientlist']);
        },
        error => {
          console.log(error);
        }
      );
    }
}
