import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private apiUrl = "https://jsonplaceholder.typicode.com/todos";

constructor(private http: HttpClient) { }
  getEmployees(): Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
