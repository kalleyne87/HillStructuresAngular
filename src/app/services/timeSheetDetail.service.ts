import { TimeSheetDetail } from './../entities/entities';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TimeSheetDetailService {

    private BASE_URL: string = 'https://localhost:44349/api/timesheetdetail/';

    constructor(
        private http: HttpClient
    ) {}

    getAll(): Observable<TimeSheetDetail[]> {
        return this.http.get(this.BASE_URL + 'get')
                            .pipe(map(res => res as TimeSheetDetail[]));
    }

    get(timeSheetDetailID: number): Observable<TimeSheetDetail> {
        return this.http.get(this.BASE_URL + 'get/' + timeSheetDetailID)
                            .pipe(map(res => res as TimeSheetDetail));
    }    

    create(timesheetDetail: TimeSheetDetail) {
        return this.http.post(this.BASE_URL + 'create/', timesheetDetail)
                            .pipe(map(res => res as TimeSheetDetail));
    }

    update(timesheetDetail: TimeSheetDetail) {
        return this.http.put(this.BASE_URL + 'update/', timesheetDetail)
                            .pipe(map(res => res as TimeSheetDetail));
    }

    delete(timesheetDetailID: number) {
        return this.http.delete(this.BASE_URL + 'delete/' + timesheetDetailID)
                    .pipe(map(res => res as TimeSheetDetail));
    }
}