import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(public router: Router, public icons: MatIconModule) {}

  ngOnInit(): void {}

  /**
   * Function that navigates to movies page
   */
  goToMovies(): void {
    this.router.navigate(['movies']);
  }
  /**
   * Function that navigates to profile page
   */
  goToProfile(): void {
    this.router.navigate(['profile']);
  }

  /**
   * Function that logs out user
   */
  logOut(): void {
    localStorage.clear();
    this.router.navigate(['welcome']);
  }
}
