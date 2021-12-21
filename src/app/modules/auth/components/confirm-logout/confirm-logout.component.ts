import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-confirm-logout',
  templateUrl: './confirm-logout.component.html',
  styleUrls: ['./confirm-logout.component.scss']
})
export class ConfirmLogoutComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmLogoutComponent>,
    private readonly authService: AuthService,
    private readonly router: Router) { }


  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }
}
