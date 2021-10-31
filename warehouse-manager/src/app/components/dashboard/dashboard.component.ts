import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/app/interfaces/employee';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private employee$: Observable<IEmployee[]>;
  private loggedEmployee!: IEmployee;

  constructor(private store: Store) {
    this.employee$ = this.store.select(state => state.employee.employee);
  }

  ngOnInit(): void {
    this.employee$.subscribe(res => {
      this.loggedEmployee = res[0];
    })

    console.log(this.loggedEmployee);
  }

}
