import { ClientDetailDialogComponent } from './../detail/clientdetaildialog.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../../entities/entities';
import { ClientService } from '../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { MatDialog } from '@angular/material';

export interface ClientData {
  userID: number;
}

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
      private Router: Router,
      private dialog: MatDialog
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

    showDetails(userID: number): void {
      let dialogRef = this.dialog.open(ClientDetailDialogComponent, {
        width: '900px',
        data: { userID: userID }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

    createClient():void {
      this.Router.navigate(['/addclient/']);
    }

    addJob(userID: number): void {
      this.Router.navigate(['/addjobclient/' + userID]);
    }
    
    details(userID: number): void {
      this.Router.navigate(['/clientdetail/' + userID]);
    }

    edit(userID: number): void {
      this.Router.navigate(['/editclient/' + userID]);
    } 

    delete(client) {
      if(client.jobs.length > 0) {
        alert(client.firstName + ' ' + client.lastName + ' ' 
        + "has jobs, please remove the jobs first");
      } else {
        var result = confirm("Are you sure?");
        if(result) {
          this.clientService.delete(client.userID).subscribe(
            res => {
              this.loadData();
            },
            error => {
              alert(error);
            }
          )
        }
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