import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wsip } from '../models/wsip';

@Injectable({
  providedIn: 'root'
})
export class WsipService {
  private apiUrl = 'http://localhost:8081/wsip'

  constructor(private http:HttpClient) { }

  getAllWSIPs(): Observable<Wsip[]> {
    return this.http.get<Wsip[]>(`${this.apiUrl}/all`);
  }

  getWSIPById(id: number): Observable<Wsip> {
    return this.http.get<Wsip>(`${this.apiUrl}/${id}`);
  }

  addWSIP(wsip: Wsip): Observable<Wsip> {
    return this.http.post<Wsip>(`${this.apiUrl}/add`, wsip);
  }

  deleteWSIP(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}

