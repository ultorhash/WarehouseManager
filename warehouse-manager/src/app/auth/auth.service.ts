import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { Observable, of } from "rxjs";
import { IEmployee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private customer$: Observable<IEmployee[]>
  private isLogged: boolean;

  constructor(private store: Store) {
    this.customer$ = this.store.select(state => state.employee.employee);
    this.isLogged = false;
  }

  isLoggedIn() {
    this.customer$.subscribe((res: IEmployee[]) => {
      if (res.length) {
        this.isLogged = true;
      }
    })
    return of(this.isLogged);
  }
}