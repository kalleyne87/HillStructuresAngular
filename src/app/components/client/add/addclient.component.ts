import { Injectable } from '@angular/core';
import { Client } from '../../../entities/entities';
import { ClientService } from '../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './addclient.component.html'
})

export class AddClientComponent implements OnInit {

    clientForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private clientService: ClientService,
        private router: Router) {}

    ngOnInit() {
      this.clientForm = this.formBuilder.group({
        workDate: '',
        dayOfWeek: 0,
        hours: 0,
        timeSheetID: 42
      });
    }

    save() {
      this.clientService.create(this.clientForm.value).subscribe(
        res => {
          this.router.navigate(['index']);
        },
        error => {
          console.log(error);
        }
      );
    }
}
