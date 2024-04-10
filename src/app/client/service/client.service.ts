import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'http://localhost:9001/api/clients';

  constructor(private http: HttpClient) { }

  getClient(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getId/${id}`);
  }


  createClient(client: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, client);
  }

  updateClient(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteClient(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getClientsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
