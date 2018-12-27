import { Injectable } from '@angular/core';
import { TimeSheetDetail } from '../../../entities/entities';
import { TimeSheetDetailService } from '../../../services/timeSheetDetail.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './add.component.html'
})

export class AddTimeSheetDetailComponent implements OnInit {

    timeSheetDetailForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private timeSheetDetailService: TimeSheetDetailService,
        private router: Router) {}

    ngOnInit() {
      this.timeSheetDetailForm = this.formBuilder.group({
        workDate: '',
        dayOfWeek: 0,
        hours: 0,
        timeSheetID: 42
      });
    }

    save() {
      this.timeSheetDetailService.create(this.timeSheetDetailForm.value).subscribe(
        res => {
          this.router.navigate(['index']);
        },
        error => {
          console.log(error);
        }
      );
    }
}
