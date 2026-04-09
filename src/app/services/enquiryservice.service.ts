import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api.config';

export interface Enquiry{
  name:string;
  email:string;
  contact:number;
  subject:string;
  message:string;
}
@Injectable({
  providedIn: 'root'
})
export class EnquiryserviceService {

  private apiUrl = `${API_BASE_URL}/enquiry`;
  constructor(private http:HttpClient) { 

  }
  submitEnquiry(enquiry:Enquiry):Observable<Enquiry>{

    return this.http.post<Enquiry>(this.apiUrl,enquiry)

  }
}
