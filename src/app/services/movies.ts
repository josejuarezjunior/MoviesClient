import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly url = environment.apiUrl + '/movies';

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<Movie[]>(this.url);
  }
}
