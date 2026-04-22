import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//  Backend match होईल असा interface
export interface ServiceCenter {
  id?: number;
  serviceCenterName: string;
  password: string;
  location: string;
  serviceTime: string;
  serviceType: string;
  contactNumber: string;
  email: string;
  address: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceCenterService {
  getById(serviceId: number) {
    throw new Error('Method not implemented.');
  }

  // ✅ Correct backend URL
  private apiUrl = 'http://localhost:8080/api/service-centers';

  constructor(private http: HttpClient) {}

  // ✅ LOGIN API
  login(loginRequest: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginRequest);
  }

  // ✅ REGISTER API
  register(service: ServiceCenter): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, service);
  }

  getAll():Observable<ServiceCenter[]>{
   return this.http.get<ServiceCenter[]>(`${this.apiUrl}`);
  }
}