import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { MoviesService } from '../../services/movies';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  imports: [],
  standalone: true,
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class MoviesComponent implements OnInit {

  private service = inject(MoviesService);

  movies = signal<Movie[]>([]);
  loading = true;
  error: string | null = null;

  ngOnInit() {
    this.service.getMovies().subscribe({
      next: (data) => {
        console.log(data);
        this.movies.set(data);
        this.loading = false;
      },
      error: () => {
        this.error = 'Erro ao carregar filmes.';
        this.loading = false;
      },
    });
  }
}

