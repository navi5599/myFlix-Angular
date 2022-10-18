import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { GenreComponent } from '../genre/genre.component';
import { DescriptionComponent } from '../description/description.component';
import { DirectorComponent } from '../director/director.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  favMoviesIDs: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public tooltip: MatTooltipModule,
    public icons: MatIconModule
  ) {}

  ngOnInit(): void {
    this.getMovies();
    this.getFavMoviesIDs();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  openGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      data: {
        Name: name,
        Description: description,
      },
      width: '500px',
    });
  }

  openDescriptionDialog(title: string, description: string): void {
    this.dialog.open(DescriptionComponent, {
      data: {
        Title: title,
        Description: description,
      },
      width: '500px',
    });
  }

  openDirectorDialog(
    name: string,
    bio: string,
    birthname: string,
    born: string
  ): void {
    this.dialog.open(DirectorComponent, {
      data: {
        Name: name,
        Bio: bio,
        BirthName: birthname,
        Born: born,
      },
      width: '500px',
    });
  }

  //

  getFavMoviesIDs(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
      this.favMoviesIDs = resp.FavoriteMovies;
      return this.favMoviesIDs;
    });
  }

  isFav(_id: string): boolean {
    return this.favMoviesIDs.includes(_id);
  }

  addFavorites(movieID: string): void {
    this.fetchApiData.addFavoriteMovie(movieID).subscribe((resp: any) => {
      console.log(resp);
      this.ngOnInit();
      this.snackBar.open('Movie added!', 'OK', {
        duration: 2000,
      });
    });
  }

  removeFavorites(movieID: string): void {
    this.fetchApiData.removeFavoriteMovie(movieID).subscribe((resp: any) => {
      console.log(resp);
      this.ngOnInit();
      this.snackBar.open('Movie removed!', 'OK', {
        duration: 2000,
      });
    });
  }
}
