import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getStarWars1(page: any) {
    return this.http.get(`https://swapi.dev/api/people/?page=${page}`);
  }

  getOneCharacter(id: number) {
    return this.http.get(`https://swapi.dev/api/people/${id}/?format=json`);
  }

  getFilm(url: any) {
    return this.http.get(url);
  }
}
