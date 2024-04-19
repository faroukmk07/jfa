import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wsroles } from '../models/wsroles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WsrolesService {
  private apiUrl = 'http://localhost:8081/wsroles'

  constructor(private http:HttpClient) { }

  getAllWSRoles(): Observable<Wsroles[]> {
    return this.http.get<Wsroles[]>(`${this.apiUrl}/all`);
  }

  getWSRoleById(id: number): Observable<Wsroles> {
    return this.http.get<Wsroles>(`${this.apiUrl}/${id}`);
  }

  addWSRole(wsRoles: Wsroles): Observable<Wsroles> {
    return this.http.post<Wsroles>(`${this.apiUrl}/add`, Wsroles);
  }

  deleteWSRole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
