import { TimeSheet } from '../entities/entities';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TimeSheetService {

    private BASE_URL: string = 'https://localhost:44349/api/timesheet/';

    constructor(
        private http: HttpClient
    ) {}

    getAll(): Observable<TimeSheet[]> {
        return this.http.get(this.BASE_URL + 'get')
                            .pipe(map(res => res as TimeSheet[]));
    }

    get(timeSheetID: number): Observable<TimeSheet> {
        return this.http.get(this.BASE_URL + 'get/' + timeSheetID)
                            .pipe(map(res => res as TimeSheet));
    }    

    create(timeSheet: TimeSheet) {
        return this.http.post(this.BASE_URL + 'create/', timeSheet)
                            .pipe(map(res => res as TimeSheet));
    }

    update(timeSheet: TimeSheet) {
        return this.http.put(this.BASE_URL + 'update/', timeSheet)
                            .pipe(map(res => res as TimeSheet));
    }

    delete(timeSheetID: number) {
        return this.http.delete(this.BASE_URL + 'delete/' + timeSheetID)
                    .pipe(map(res => res as TimeSheet));
    }
}