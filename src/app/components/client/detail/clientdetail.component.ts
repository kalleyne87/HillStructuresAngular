import { Injectable, Inject } from '@angular/core';
import { Client } from '../../../entities/entities';
import { Observable } from 'rxjs';
import { ClientService } from '../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/table';

@Component({
  templateUrl: './clientdetail.component.html'
})

export class ClientDetailComponent implements OnInit {

    userID: number;
    client: Client;
    dataSource = new ClientDetailDataSource(this.clientService, this.activatedRoute);
    constructor(
        public clientService: ClientService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {

        }

  ngOnInit() {
      var userID = this.activatedRoute.snapshot.params.userID;
      this.clientService.get(userID).subscribe(
        res => {
          this.client = res;
        },
        error => {
          alert(error);
        }
      )
  }
}

export class ClientDetailDataSource extends DataSource<any> {
  constructor(private clientService: ClientService,
              private activatedRoute: ActivatedRoute) {
    super();
  }

  connect() {
    return this.clientService.get(this.activatedRoute.snapshot.params.userID)
                  .pipe();
  }
  
  disconnect() {}
}


