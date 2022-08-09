import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { PokedexService } from '../pokedex-service.service';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css'],
})
export class PokeDetailsComponent implements OnInit {
   pokemon: any;


  constructor(
    private http: PokedexService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.get();
  }



  get(){
    this.activatedRoute.params
      .pipe(switchMap(
        ( {id}  ) => this.http.getPokemonData(id)
        ))
      .subscribe((pokemon) => {
        this.pokemon = pokemon;
        console.log(this.pokemon)
      });
  }



}
