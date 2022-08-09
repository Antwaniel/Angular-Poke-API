import { Component, Input, OnInit, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PokedexService } from '../pokedex-service.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent {
  @Output() pokemon: any;

    pokeName:string='';

  constructor(private htttp:PokedexService) { }


  getPokemon(id:string){
    const input =document.querySelector('input');
if (input?.value==='') {
  return;
}


      this.htttp.getPokemonData(id)
      .subscribe(
        (response) => {
          this.pokemon=response;
          // console.log(this.pokemon);
        }
      )


   input!.value='';
    // this.pokeName=id;
    // console.log(this.pokeName);

  }



}
