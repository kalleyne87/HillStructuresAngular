import { SubContractor } from '../entities/entities';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SubContractorService {

    private BASE_URL: string = 'https://localhost:44349/api/subcontractor/';

    constructor(
        private http: HttpClient
    ) {}

    getAll(): Observable<SubContractor[]> {
        return this.http.get(this.BASE_URL + 'get')
                            .pipe(map(res => res as SubContractor[]));
    }

    get(companyID: number): Observable<SubContractor> {
        return this.http.get(this.BASE_URL + 'get/' + companyID)
                            .pipe(map(res => res as SubContractor));
    }    

    create(subContractor: SubContractor) {
        return this.http.post(this.BASE_URL + 'create/', subContractor)
                            .pipe(map(res => res as SubContractor));
    }

    update(subContractor: SubContractor) {
        return this.http.put(this.BASE_URL + 'update/', subContractor)
                            .pipe(map(res => res as SubContractor));
    }

    delete(companyID: number) {
        return this.http.delete(this.BASE_URL + 'delete/' + companyID)
                            .pipe(map(res => res as SubContractor));
    }
}