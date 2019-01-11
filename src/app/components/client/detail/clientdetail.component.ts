import { Injectable, Inject } from '@angular/core';
import { Client } from '../../../entities/entities';
import { ClientService } from '../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './clientdetail.component.html'
})

export class ClientDetailComponent implements OnInit {

    userID: number;
    client: Client;
    constructor(
        public dialogRef: MatDialogRef<ClientDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public clientService: ClientService) {

        }

  ngOnInit() {
      this.clientService.get(this.data.userID).subscribe(
        res => {
          this.client = res;
        },
        error => {
          alert(error);
        }
      )
  }
}

