import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { RickAndMortyService } from './services/rick-and-morty.service';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';


const routes: Routes = [
  {
    path: '',
    component: CharactersComponent
  }
];

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    RickAndMortyService
  ]
})
export class RickAndMortyApiModule { }
