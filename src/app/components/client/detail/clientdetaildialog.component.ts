import { Injectable, Inject } from '@angular/core';
import { Client } from '../../../entities/entities';
import { ClientService } from '../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './clientdetaildialog.component.html',
  styleUrls: ['./clientdetaildialog.component.css'] 
})

export class ClientDetailDialogComponent implements OnInit {

    userID: number;
    client: Client;
    constructor(
        public dialogRef: MatDialogRef<ClientDetailDialogComponent>,
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

