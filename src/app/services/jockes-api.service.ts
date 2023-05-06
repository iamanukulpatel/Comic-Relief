import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JokesApiService {
  constructor(private http: HttpClient) {}

  //http get request for filtered jokes.

  getFilterJoke(category: string): Observable<string> {
    return this.http.get<string>(
      'https://api.chucknorris.io/jokes/random?category=' + category
    );
  }

  //http get request for random jokes.

  getRandomJoke(): Observable<string> {
    return this.http.get<string>('https://api.chucknorris.io/jokes/random');
  }
}
