import { Job, Employee } from './../entities/entities';
import { EmployeeService } from './employee.service';

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class JobService {

    private BASE_URL: string = 'https://localhost:44349/api/job/';

    constructor(
        private http: HttpClient,
        private employeeService: EmployeeService
    ) {}

    getAll(): Observable<Job[]> {
        return this.http.get(this.BASE_URL + 'get')
                            .pipe(map(res => res as Job[]));
    }

    get(jobID: number): Observable<Job> {
        return this.http.get(this.BASE_URL + 'get/' + jobID)
                            .pipe(map(res => res as Job));
    }    

    create(job: Job) {
        return this.http.post(this.BASE_URL + 'create/', job)
                            .pipe(map(res => res as Job));
    }

    update(job: Job) {
        return this.http.put(this.BASE_URL + 'update/', job)
                            .pipe(map(res => res as Job));
    }

    delete(jobID: number) {
        return this.http.delete(this.BASE_URL + 'delete/' + jobID)
                    .pipe(map(res => res as Job));
    }

    getEmployees(jobID: number) {
        let Job: Job;
        let employees: Employee[];
        let jobemployees: Employee[] = [];
        this.get(jobID).subscribe(
            res => {
                Job = res;
                this.employeeService.getAll().subscribe(
                    result => {
                        employees = result;
                        for (let ej of Job.employeeJobs) {
                            for(let e of employees) {
                                if(ej.userID == e.userID) {
                                    jobemployees.push(e);
                                }                            
                            }
                        }
                    }
                )
            },
            error => {
                alert(error);
            }
        )
        return jobemployees;
    }
}