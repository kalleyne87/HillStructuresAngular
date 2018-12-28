import { Injectable } from '@angular/core';
import { Job } from './../../../entities/entities';
import { JobService } from "./../../../services/job.service";
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './index.component.html'
})

export class JobListComponent implements OnInit {

    Jobs: Job[];
    constructor(private jobService: JobService) {}

    ngOnInit() {
      this.jobService.getAll().subscribe(
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
        this.jobService.delete(userId).subscribe(
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
      this.jobService.getAll().subscribe(
        res => {
          this.Jobs = res;
        },
        error => {
          alert(error);
        }
      )
    }
}
