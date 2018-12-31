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

    get(userID: number): Observable<Client> {
        return this.http.get(this.BASE_URL + 'get/' + userID)
                            .pipe(map(res => res as Client));
    }

    create(client: Client) {
        return this.http.post(this.BASE_URL + 'create/', client)
                            .pipe(map(res => res as Client));
    }

    update(client: Client) {
        return this.http.put(this.BASE_URL + 'update/', client)
                            .pipe(map(res => res as Client));
    }

    delete(userID: number) {
        return this.http.delete(this.BASE_URL + 'delete/' + userID)
                            .pipe(map(res => res as Client));
        }
}