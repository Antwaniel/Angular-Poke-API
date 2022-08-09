import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Añadimos el cliente
import { Observable } from 'rxjs';
// import { PokemonDetail } from './interfaces/PokemonDetail.interface';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';
 private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


  constructor(private http: HttpClient) { }



 getPokemon(limit:number, offset:number) {
    return this.http.get(`${this.baseUrl}?limit=${limit}&&offset=${offset}`);
  }


  getPokemonData(name: string|number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }







}
