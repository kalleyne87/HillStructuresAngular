import { Job } from './../entities/entities';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class JobService {

    private BASE_URL: string = 'https://localhost:44349/api/job/';

    constructor(
        private http: HttpClient
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
}