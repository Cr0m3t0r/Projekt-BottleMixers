import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from '../services/loginService';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  username: string = '';
  password: string = '';

  constructor(public dialogRef: MatDialogRef<LoginModalComponent>, private loginService: LoginService) { }

  login(): void {
    this.loginService.login(this.username, this.password);
    this.dialogRef.close();
  }

  cancel(): void {
    // Close the dialog without performing any action
    this.dialogRef.close();
  }
}
