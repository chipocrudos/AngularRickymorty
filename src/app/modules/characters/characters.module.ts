import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterComponent } from './components/character/character.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';



@NgModule({
  declarations: [
    CharactersListComponent,
    CharacterDetailComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    InfiniteScrollModule
  ]
})
export class CharactersModule { }
