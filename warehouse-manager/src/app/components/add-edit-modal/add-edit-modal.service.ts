import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IEmployee } from "src/app/interfaces/employee";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) { }

  loginEmployee(data: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(`${environment.apiURL}/login/auth`, data);
  }

}