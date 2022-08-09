import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeDetailsComponent } from './poke-details/poke-details.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'pokeDetails/:id',
    component: PokeDetailsComponent
  },
   {
    path: 'pokeDetails',
    component: PokeDetailsComponent
  },
  {
    path: 'pokemons',
    component: PokedexComponent
  },

  {
    path: 'search',
    component: PokemonSearchComponent
  },
  {
    path: '**',
    redirectTo: ''
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

