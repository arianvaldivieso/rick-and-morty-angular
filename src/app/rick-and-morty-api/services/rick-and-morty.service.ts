import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, map } from 'rxjs';
import {
  Character,
  ResponseApiCharacters,
} from 'src/app/models/rick-and-morty.interface';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  async getCharacters(): Promise<Character[]> {
    const response = await lastValueFrom(
      this.http.get<ResponseApiCharacters>(`${this.apiUrl}/character`) .pipe(
        map(response => response.results)
      )
    )
    return response;
  }

  getCharacter(id: number) {
    return this.http.get(`${this.apiUrl}/character/${id}`);
  }

  getEpisodes() {
    return this.http.get(`${this.apiUrl}/episode`);
  }

  getEpisode(id: number) {
    return this.http.get(`${this.apiUrl}/episode/${id}`);
  }
}
