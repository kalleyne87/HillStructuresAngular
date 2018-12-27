import { Injectable } from '@angular/core';
import { TimeSheetDetail } from './../../../entities/entities';
import { TimeSheetDetailService } from './../../../services/timeSheetDetail.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './index.component.html'
})

export class TimeSheetDetailListComponent implements OnInit {

    timesheetdetails: TimeSheetDetail[];
    constructor(
        private TimeSheetDetailService: TimeSheetDetailService,
        private Router: Router) {}

    ngOnInit() {
      this.TimeSheetDetailService.getAll().subscribe(
        res => {
          this.loadData();
        },
        error => {
          alert(error);
        }
      )
    }

    edit(timeSheetDetail: number) {
      this.Router.navigate(['/edit/' + timeSheetDetail]);
    } 

    delete(timeSheetDetailID: number) {
      var result = confirm("Are you sure?");
      if(result) {
        this.TimeSheetDetailService.delete(timeSheetDetailID).subscribe(
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
      this.TimeSheetDetailService.getAll().subscribe(
        res => {
          this.timesheetdetails = res;
        },
        error => {
          alert(error);
        }
      )
    }
}
