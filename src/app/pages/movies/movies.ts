import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies';
import { Movie } from '../../models/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class MoviesComponent implements OnInit {

  private service = inject(MoviesService);

  movies: Movie[] = [];
  loading = true;
  error: string | null = null;

  ngOnInit() {
    this.service.getMovies().subscribe({
      next: (data) => {
        console.log(data);
        this.movies = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Erro ao carregar filmes.';
        this.loading = false;
      },
    });
  }
}

