import { PaymentSheetDetail } from '../entities/entities';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PaymentSheetDetailService {

    private BASE_URL: string = 'https://localhost:44349/api/paymentsheetdetail/';

    constructor(
        private http: HttpClient
    ) {}

    getAll(): Observable<PaymentSheetDetail[]> {
        return this.http.get(this.BASE_URL + 'get')
                            .pipe(map(res => res as PaymentSheetDetail[]));
    }

    get(paymentSheetDetailID: number): Observable<PaymentSheetDetail> {
        return this.http.get(this.BASE_URL + 'get/' + paymentSheetDetailID)
                            .pipe(map(res => res as PaymentSheetDetail));
    }    

    create(paymentSheetDetail: PaymentSheetDetail) {
        return this.http.post(this.BASE_URL + 'create/', paymentSheetDetail)
                            .pipe(map(res => res as PaymentSheetDetail));
    }

    update(paymentSheetDetail: PaymentSheetDetail) {
        return this.http.put(this.BASE_URL + 'update/', paymentSheetDetail)
                            .pipe(map(res => res as PaymentSheetDetail));
    }

    delete(paymentSheetDetailID: number) {
        return this.http.delete(this.BASE_URL + 'delete/' + paymentSheetDetailID)
                    .pipe(map(res => res as PaymentSheetDetail));
    }
}