import { Supplier } from '../entities/entities';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SupplierService {

    private BASE_URL: string = 'https://localhost:44349/api/supplier/';

    constructor(
        private http: HttpClient
    ) {}

    getAll(): Observable<Supplier[]> {
        return this.http.get(this.BASE_URL + 'get')
                            .pipe(map(res => res as Supplier[]));
    }

    get(companyID: number): Observable<Supplier> {
        return this.http.get(this.BASE_URL + 'get/' + companyID)
                            .pipe(map(res => res as Supplier));
    }    

    create(supplier: Supplier) {
        return this.http.post(this.BASE_URL + 'create/', supplier)
                            .pipe(map(res => res as Supplier));
    }

    update(supplier: Supplier) {
        return this.http.put(this.BASE_URL + 'update/', supplier)
                            .pipe(map(res => res as Supplier));
    }

    delete(companyID: number) {
        return this.http.delete(this.BASE_URL + 'delete/' + companyID)
                            .pipe(map(res => res as Supplier));
    }
}