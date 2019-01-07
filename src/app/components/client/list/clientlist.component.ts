import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../../entities/entities';
import { ClientService } from '../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']  
})

export class ClientListComponent implements OnInit {

    clients: Client[];
    dataSource = new ClientDataSource(this.clientService);
    displayedColumns = ['firstName', 'lastName', 'address', 'phoneNumber', 
    'emailAddress', 'edit', 'addJob'];
    constructor(
      private clientService: ClientService,
      private Router: Router
              ) {}

    ngOnInit() {
      this.clientService.getAll().subscribe(
        res => {
          this.loadData();
        },
        error => {
          alert(error);
        }
      )
    }

    edit(userID: number) {
      this.Router.navigate(['/editclient/' + userID]);
    } 

    delete(userID: number) {
      var result = confirm("Are you sure?");
      if(result) {
        this.clientService.delete(userID).subscribe(
          res => {
            this.loadData();
          },
          error => {
            alert(error);
          }
        )
      }
    }

    loadData() {
      this.clientService.getAll().subscribe(
        res => {
          this.clients = res;
        },
        error => {
          alert(error);
        }
      )
    } 
}

export class ClientDataSource extends DataSource<any> {
  constructor(private clientService: ClientService) {
    super();
  }

  connect(): Observable<Client[]> {
    return this.clientService.getAll();
  }

  disconnect() {} 
}