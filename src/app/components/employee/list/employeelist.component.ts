import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Employee } from '../../../entities/entities';
import { EmployeeService } from "../../../services/employee.service";
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatDialog } from '@angular/material';
import { EmployeeDetailDialogComponent } from '../detail/employeedetaildialog.component';

export interface EmployeeData {
  jobID: number;
}

@Component({
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']  
})

export class EmployeeListComponent implements OnInit {

    employees: Employee[];
    dataSource = new EmployeeDataSource(this.employeeService);
    displayedColumns = ['jobName', 'address', 'startDate', 'endDate',
     'edit', 'add'];
    constructor(
      private employeeService: EmployeeService,
      private Router: Router,
      private dialog: MatDialog) {}

    ngOnInit() {
      this.employeeService.getAll().subscribe(
        res => {
          //this.loadData();
        },
        error => {
          alert(error);
        }
      )
    }

    showDetails(userID: number): void {
      let dialogRef = this.dialog.open(EmployeeDetailDialogComponent, {
        width: '900px',
        data: { userID: userID }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

    createJob(): void {
      this.Router.navigate(['/addjob/']);
    }

    edit(jobID: number) {
      this.Router.navigate(['/editjob/' + jobID]);
    } 

    /*delete(job: Employee) {
      
        var result = confirm("Are you sure?");
        if(result) {
          this.employeeService.delete(job.jobID).subscribe(
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
      this.employeeService.getAll().subscribe(
        res => {
          this.employees = res;
        },
        error => {
          alert(error);
        }
      )
    }*/
}

export class EmployeeDataSource extends DataSource<any> {
  constructor(private employeeService: EmployeeService) {
    super();
  }

  connect(): Observable<Employee[]> {
    return this.employeeService.getAll();
  }

  disconnect() {} 
}