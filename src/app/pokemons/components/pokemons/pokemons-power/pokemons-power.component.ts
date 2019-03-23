import { Component, OnInit, Input } from '@angular/core';

import { Statu } from 'src/app/pokemons/models/statu.model';


@Component({
  selector: 'app-pokemons-power',
  templateUrl: './pokemons-power.component.html',
  styleUrls: ['./pokemons-power.component.scss']
  
})
export class PokemonsPowerComponent implements OnInit {

  @Input() public single: Statu[] = [];

  /** options grafico */

  public showYAxis = true; 
  public showYAxisLabel = true;
  public colorScheme = {
    domain: ['#FF1493', '#00FA9A', '#00BFFF', '#FFD700', '#FFA500', '#FF0000']
  };
  public view: Number[] = [300, 200]; 

  /** fim options grafico */

  constructor() { }

  ngOnInit() {
  }

}
