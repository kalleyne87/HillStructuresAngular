import { Injectable, Inject } from '@angular/core';
import { Employee } from '../../../entities/entities';
import { EmployeeService } from '../../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  templateUrl: './employeedetaildialog.component.html',
  styleUrls: ['./employeedetaildialog.component.css'] 
})

export class EmployeeDetailDialogComponent implements OnInit {

    userID: number;
    employee: Employee;
    constructor(
        public dialogRef: MatDialogRef<EmployeeDetailDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public employeeService: EmployeeService) {

        }

  ngOnInit() {
      this.employeeService.get(this.data.userID).subscribe(
        res => {
          this.employee = res;
          //this.job.employees = this.jobService.getEmployees(this.job.jobID);
        },
        error => {
          alert(error);
        }
      )
  }

  /*loadEmployeeDetail(job: Job) {
    let employees = [];
    for(let e of job.employees) {
      let empDetail = new EmployeeDetail();
      empDetail.name = e.firstName + ' ' + e.lastName;
      empDetail.details = e.userID;
      empDetail.total = 
    }
  }*/
}
export class EmployeeDetail {
  name: string;
  details: number;
  total: number;
}
