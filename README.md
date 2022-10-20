# MyFlixAngularClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

For live version, check this link: [myFlix_Angular](https://navi5599.github.io/myFlix-Angular/welcome)

It is a Single-page application (SPA) built using Angular that fetches data from [myFlix API](https://my-flix-app-1910.herokuapp.com/api-doc/)

## Instructions

- Clone the repository running `git clone https://github.com/navi5599/myFlix-Angular.git` in the terminal.
- Head to the project folder and install dependencies with `npm install`.
- You should also install Angular CLI running `npm install -g @angular/cli`
- Run `ng serve` to build and start the application.
- Open up your app on `http://localhost:4200/`

### Screenshot of the app:

 <img src="/img/movie1.png" alt="Alt text" style="display: inline-block; margin: 0 auto; max-width: 800px">

 <img src="/img/movie2.png" alt="Alt text" style="display: inline-block; margin: 0 auto; max-width: 800px">

## Features

#### Welcome page

- Welcome page displays button for Login or Sign up

#### Registration page

- On this page, user can register providing necessary info, such as Name, Username, Password and Email.

#### Login page

- User can Log in using existing credentials

#### Movie-card component

- Returns a list of all movies to the user
- Allows users to add a movie to their list of favorites
- Allows to click on specific buttons for more details (i.e., genre, director)

#### Genre dialog

- Returns data about a genre (name and description)

#### Director dialog

- Returns data about a director (name and bio)

#### Description dialog

- Returns the Description of the movie

#### Profile component

- Allows users to update their user info
- Allows existing users to delete their account
- Displays favorite movies
- Allows users to remove a movie from their list of favorites.
