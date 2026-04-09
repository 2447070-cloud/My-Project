import { Injectable } from '@angular/core';
import { API_BASE_URL } from './api.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ICategory {
  categoryid?: number;
  categoryname: string;
  imageURL: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  private apiurl=`${API_BASE_URL}/category`
  constructor(private http: HttpClient) { }

  getAllCategories():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.apiurl);
  }

  save(category:ICategory):Observable<ICategory>{
    return this.http.post<ICategory>(this.apiurl,category);
  }

  update(id:number,category:ICategory):Observable<ICategory>{
    return this.http.put<ICategory>(`${this.apiurl}/${id}`,category);
  }

  delete(id:number):Observable<String>{
    return this.http.delete<String>(`${this.apiurl}/${id}`);
  }
}
