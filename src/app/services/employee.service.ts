import { Employee } from '../entities/entities';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class EmployeeService {

    private BASE_URL: string = 'https://localhost:44349/api/employee/';

    constructor(
        private http: HttpClient
    ) {}

    getAll(): Observable<Employee[]> {
        return this.http.get(this.BASE_URL + 'get')
                            .pipe(map(res => res as Employee[]));
        }

    get(userID: number): Observable<Employee> {
        return this.http.get(this.BASE_URL + 'get/' + userID)
                            .pipe(map(res => res as Employee));
    }

    create(employee: Employee) {
        return this.http.post(this.BASE_URL + 'create/', employee)
                            .pipe(map(res => res as Employee));
    }

    update(employee: Employee) {
        return this.http.put(this.BASE_URL + 'update/', employee)
                            .pipe(map(res => res as Employee));
    }

    delete(userID: number) {
        return this.http.delete(this.BASE_URL + 'delete/' + userID)
                            .pipe(map(res => res as Employee));
        }
}