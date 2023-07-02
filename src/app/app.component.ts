import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from './login-modal/login-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projekt-BottleMixers';

  constructor(private dialog: MatDialog) { }

  openLoginModal(): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle any actions after the modal is closed, if needed
    });
  }
}
