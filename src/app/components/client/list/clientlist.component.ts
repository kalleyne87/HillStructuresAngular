import { Injectable } from '@angular/core';
import { Client } from '../../../entities/entities';
import { ClientService } from '../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './clientlist.component.html'
})

export class ClientListComponent implements OnInit {

    clients: Client[];
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
