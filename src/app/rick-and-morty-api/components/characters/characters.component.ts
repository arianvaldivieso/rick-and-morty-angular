import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/rick-and-morty.interface';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit{

  characters: Character[] = [];

  constructor(
    private _rickAndMortyService: RickAndMortyService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  async getCharacters() {
    const response:Character[] = await this._rickAndMortyService.getCharacters();
    this.characters = response;
  }

}
