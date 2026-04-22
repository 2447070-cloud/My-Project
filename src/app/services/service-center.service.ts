import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCenterService {

  private baseUrl = 'http://localhost:8080/api/service-centers';

  constructor(private http: HttpClient) {}

  
  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  
  getById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}