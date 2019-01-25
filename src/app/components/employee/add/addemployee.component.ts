import { Injectable } from '@angular/core';
import { Job, Employee } from '../../../entities/entities';
import { EmployeeService } from '../../../services/employee.service';
import { JobService } from '../../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})

export class AddEmployeeComponent implements OnInit {

    employeeForm: FormGroup;
    employees: Employee[];
    constructor(
        private formBuilder: FormBuilder,
        private jobService: JobService,
        private employeeService: EmployeeService,
        private router: Router) {}

    ngOnInit() {
      this.employeeForm = this.formBuilder.group({
        clientID: 0,
        jobName: '',
        address: '',
        startDate: '',
        endDate: '',
        costEstimate: 0,
      });
      this.employeeService.getAll().subscribe(
        res => {
          this.employees = res;
        },
        error => {
          alert(error);
        }
      );
    }

    save() {
      this.employeeService.create(this.employeeForm.value).subscribe(
        res => {
          this.router.navigate(['/employeelist/']);
        },
        error => {
          console.log(error);
        }
      );
    }
}
