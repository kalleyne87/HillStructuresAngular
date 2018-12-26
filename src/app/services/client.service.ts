import { Client } from './../entities/entities';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class ClientService {

    private BASE_URL: string = 'https://localhost:44349/api/client/';

    constructor(
        private http: HttpClient
    ) {}

    getAll(): Observable<Client[]> {
        return this.http.get(this.BASE_URL + 'get')
                            .pipe(map(res => res as Client[]));
        }

    get(UserId: number): Observable<Client> {
        return this.http.get(this.BASE_URL + 'get/' + UserId)
                            .pipe(map(res => res as Client));
    }

    delete(userId: number) {
        return this.http.delete(this.BASE_URL + 'delete/' + userId)
                            .pipe(map(res => res as Client));
        }
}