import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesComponent } from "./pages/movies/movies";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MoviesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movies-client');
}
