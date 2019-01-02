import { PaymentSheet } from '../entities/entities';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PaymentSheetService {

    private BASE_URL: string = 'https://localhost:44349/api/paymentsheet/';

    constructor(
        private http: HttpClient
    ) {}

    getAll(): Observable<PaymentSheet[]> {
        return this.http.get(this.BASE_URL + 'get')
                            .pipe(map(res => res as PaymentSheet[]));
    }

    get(paymentSheetID: number): Observable<PaymentSheet> {
        return this.http.get(this.BASE_URL + 'get/' + paymentSheetID)
                            .pipe(map(res => res as PaymentSheet));
    }    

    create(paymentSheet: PaymentSheet) {
        return this.http.post(this.BASE_URL + 'create/', paymentSheet)
                            .pipe(map(res => res as PaymentSheet));
    }

    update(paymentSheet: PaymentSheet) {
        return this.http.put(this.BASE_URL + 'update/', paymentSheet)
                            .pipe(map(res => res as PaymentSheet));
    }

    delete(paymentSheetID: number) {
        return this.http.delete(this.BASE_URL + 'delete/' + paymentSheetID)
                    .pipe(map(res => res as PaymentSheet));
    }
}