import { Injectable } from '@angular/core';
import { Client } from './../../../entities/entities';
import { ClientService } from './../../../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './index.component.html'
})

export class ClientListComponent implements OnInit {

    clients: Client[];
    constructor(private ClientService: ClientService) {}

    ngOnInit() {
      this.ClientService.getAll().subscribe(
        res => {
          this.loadData();
        },
        error => {
          alert(error);
        }
      )
    }

    delete(userId: number) {
      var result = confirm("Are you sure?");
      if(result) {
        this.ClientService.delete(userId).subscribe(
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
      this.ClientService.getAll().subscribe(
        res => {
          this.clients = res;
        },
        error => {
          alert(error);
        }
      )
    }
}
