import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserRegistrationService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  @Input() userCredentials = {
    Username: '',
    Password: '',
  };

  constructor(
    public fetchApiData: UserRegistrationService,
    public dialogRef: MatDialogRef<LoginFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  loginUser(): void {
    this.fetchApiData.userLogin(this.userCredentials).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', response.user.Username);
        this.dialogRef.close(); // This will close the modal on success!
        console.log(response);
        this.snackBar.open('Welcome back!', 'OK', {
          duration: 2000,
        });
      },
      (response) => {
        console.log(response);
        this.snackBar.open(response, 'OK', {
          duration: 2000,
        });
      }
    );
  }
}
