import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemons-sprits',
  templateUrl: './pokemons-sprits.component.html',
  styleUrls: ['./pokemons-sprits.component.scss']
})
export class PokemonsSpritsComponent implements OnInit {

  @Input() sprites: string[] =[]

  constructor() { }

  ngOnInit() {
  }

}
