import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wsuser } from '../models/wsuser';

@Injectable({
  providedIn: 'root'
})
export class WsuserService {
  private apiUrl = 'http://localhost:8081/wsusers'


  constructor(private http:HttpClient) { }

  getAllWSUsers(): Observable<Wsuser[]> {
    return this.http.get<Wsuser[]>(`${this.apiUrl}/all`);
  }

  getWSUserById(id: number): Observable<Wsuser> {
    return this.http.get<Wsuser>(`${this.apiUrl}/${id}`);
  }

  addWSUser(wsUser: Wsuser): Observable<Wsuser> {
    return this.http.post<Wsuser>(`${this.apiUrl}/add`, wsUser);
  }

  deleteWSUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}

