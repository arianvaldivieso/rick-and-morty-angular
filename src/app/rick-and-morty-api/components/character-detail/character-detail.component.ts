import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/rick-and-morty.interface';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {

  @Input() character: Character = {} as Character;

}
