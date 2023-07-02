import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  email: string = '';
  password: string = '';

  constructor(public dialogRef: MatDialogRef<LoginModalComponent>) { }

  login(): void {

    this.dialogRef.close();
  }

  cancel(): void {
    // Close the dialog without performing any action
    this.dialogRef.close();
  }
}
