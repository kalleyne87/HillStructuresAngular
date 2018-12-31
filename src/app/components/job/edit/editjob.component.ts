import { Injectable } from '@angular/core';
import { TimeSheetDetail } from '../../../entities/entities';
import { TimeSheetDetailService } from '../../../services/timeSheetDetail.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './editjob.component.html'
})

export class EditJobComponent implements OnInit {

    timeSheetDetailForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private timeSheetDetailService: TimeSheetDetailService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
      var timesheetdetailid = this.activatedRoute.snapshot.params.timeSheetDetailID;
      this.timeSheetDetailService.get(timesheetdetailid).subscribe(
        res => {
          this.timeSheetDetailForm = this.formBuilder.group({
            workDate: res.workDate,
            dayOfWeek: res.dayOfWeek,
            hours: res.hours,
            timeSheetDetailID: res.timeSheetDetailID,
            timeSheetID: res.timeSheetID
          });
        },
        error => {
          console.log(error);
        });
    }

    save() {
      this.timeSheetDetailService.update(this.timeSheetDetailForm.value).subscribe(
        res => {
          this.router.navigate(['index']);
        },
        error => {
          console.log(error);
        }
      );
    }
}
