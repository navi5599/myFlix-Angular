import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  user: any = {};
  favMoviesID: any[] = [];
  favMovies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public router: Router,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.getFavMoviesID();
    this.getFavMovies();
  }

  getUser(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
      this.user = resp;
      return this.user;
    });
  }

  getFavMoviesID(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
      this.favMoviesID = resp.FavoriteMovies;
      return this.favMoviesID;
    });
  }

  getFavMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.favMovies = resp.filter((m: any) =>
        this.favMoviesID.includes(m._id)
      );
      return this.favMovies;
    });
  }

  openEditProfileDialog(): void {
    this.dialog.open(EditProfileComponent, {
      width: '300px',
    });
  }

  deleteProfile(): void {
    if (
      confirm(
        'Are you sure you want to delete your account? This cant be undone.'
      )
    ) {
      this.router.navigate(['welcome']).then(() => {
        this.snackBar.open(
          'You have successfully deleted your account!',
          'OK',
          {
            duration: 2000,
          }
        );
      });
      this.fetchApiData.deleteUser().subscribe((result) => {
        console.log(result);
        localStorage.clear();
      });
    }
  }

  removeFavorites(movieID: string): void {
    this.fetchApiData.removeFavoriteMovie(movieID).subscribe((resp: any) => {
      console.log(resp);
      this.ngOnInit();
    });
  }
}
