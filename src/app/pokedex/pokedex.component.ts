import {
  Component,
  OnInit,
  ɵclearResolutionOfComponentResourcesQueue,
} from '@angular/core';

import { PokedexService } from '../pokedex-service.service';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  pokemons: any[] = [];
  pokemon: any[]=[];
  page=1;

  totalPokemons!:number;



  constructor(private http: PokedexService) {}

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore() {
    this.http.getPokemon(10, this.page+0).subscribe(
      (response: any) => {
        this.totalPokemons=response.count;
      // console.log(response)
      response.results.forEach(
        (result:any) => {
        this.http.getPokemonData(result.name)
          .subscribe( (uniqueResponse: any) => {
            this.pokemons.push(uniqueResponse);
            // console.log(this.pokemons);

        });
      });
    });
  }


  showData(name: string){
      // console.log('the names is:', name);
        this.http.getPokemonData(name)
        .subscribe( (response:any) => {
          this.pokemon=response;
          console.log(this.pokemon);

        })

  }




}
