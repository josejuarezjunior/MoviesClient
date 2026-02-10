import { Component, inject } from '@angular/core';
import { MoviesService } from '../../services/movies';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class MoviesComponent {

  private service = inject(MoviesService);

  movies: Movie[] = [];
  //loading = true;
  error: string | null = null;

  ngOnInit() {
    this.service.getMovies().subscribe({
      next: (data) => {
        this.movies = data;
        //this.loading = false;
      },
      error: () => {
        this.error = 'Erro ao carregar filmes.';
        //this.loading = false;
      },
    });
  }
}

