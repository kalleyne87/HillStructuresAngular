import { EmployeeDataSource } from '../list/employeelist.component';
import { Injectable, Inject } from '@angular/core';
import { Employee } from '../../../entities/entities';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeService } from '../../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/table';






@Component({
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})

export class EmployeeDetailComponent implements OnInit {

    employeeID: number;
    employee: Employee;
    displayedColumns: string [] = ['jobName', 'address', 'startDate', 'endDate', 
                                  'costEstimate', 'jobDetails'];
  
    //dataSource: JobSource;
    constructor(
        public employeeService: EmployeeService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {

        }

  ngOnInit() {
      var userID = this.activatedRoute.snapshot.params.userID;
      this.employeeService.get(userID).subscribe(
        res => {
          this.employee = res;
          //this.dataSource = new JobSource(this.jobService, this.job.jobID);
        },
        error => {
          alert(error);
        }
      )
  }

  employeedetails(userID: number): void {
    this.router.navigate(['/employeedetail/' + userID]);
  }

}

/*export class JobSource extends DataSource<any> {
  constructor(public clientService: ClientService,
              public userID: number
              ) {
    super();
  }

  connect(): Observable<Job[]> {
    return this.clientService.get(this.userID).pipe(map(res => res.jobs));
  }
  disconnect() {}

}*/




