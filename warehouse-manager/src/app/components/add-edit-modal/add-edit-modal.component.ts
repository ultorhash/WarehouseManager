import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { LoginService } from './add-edit-modal.service';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.scss']
})
export class AddEditModalComponent implements OnInit {

  public signInForm: FormGroup;
  public passwordVisibility: boolean;
  public passwordType: string;

  constructor(private fb: FormBuilder, private service: LoginService) {
    this.signInForm = new FormGroup({});
    this.passwordVisibility = false;
    this.passwordType = 'password';
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

  onSubmit(): void {
    this.service.loginEmployee(this.signInForm.value).subscribe();
  }

}