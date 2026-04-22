import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from './api.config';

@Injectable({
  providedIn: 'root'
})
export class AddServiceService {

  baseUrl = `${API_BASE_URL}/service`;

  constructor(private http: HttpClient) {}

  addService(payload: any) {
    return this.http.post(this.baseUrl, payload);
  }

  getServices(centerId: any) {
    return this.http.get(`${this.baseUrl}/${centerId}`);
  }

  updateService(id: number, payload: any) {
    return this.http.put(`${this.baseUrl}/${id}`, payload);
  }

  deleteService(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}