import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { tap } from "rxjs/operators";
import { IEmployee } from '../../interfaces/employee';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { SetEmployee } from 'src/app/store/actions/employee.actions';
import { Observable, of } from 'rxjs';
import { EmployeeState } from '../../store/state/employee.state';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public signInForm: FormGroup;
  public passwordVisibility: boolean;
  public passwordType: string;
  public loginError: boolean;

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private router: Router,
    private store: Store
  ) {
    this.signInForm = new FormGroup({});
    this.passwordVisibility = false;
    this.passwordType = 'password';
    this.loginError = false;
  }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      login: new FormControl(),
      password: new FormControl()
    });
  }

  changePasswordVisibility(): void {
    this.passwordVisibility = !this.passwordVisibility;
  }

  getPasswordType(): string {
    return this.passwordVisibility ? 'text' : 'password';
  }

  getVisibleIcon(): string {
    return this.passwordVisibility ? 'visibility' : 'visibility_off';
  }

  checkLoginStatus(result: IEmployee): void {
    if (result === null) {
      this.loginError = true;
    }
    else {
      this.store.dispatch(new SetEmployee(result));
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(): void {
    this.service.loginEmployee(this.signInForm.value)
      .pipe(
        tap((res: IEmployee) => {
          this.checkLoginStatus(res);
        })
      )
      .subscribe();
  }

}