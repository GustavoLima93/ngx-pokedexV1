import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { LazyLoadImageModule } from 'ng-lazyload-image';


import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonsPowerComponent } from './components/pokemons/pokemons-power/pokemons-power.component';
import { PokemonsSpritsComponent } from './components/pokemons/pokemons-sprits/pokemons-sprits.component';



@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonsPowerComponent,
    PokemonsSpritsComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    NgxChartsModule,
    FilterPipeModule,
    FormsModule,
    LazyLoadImageModule
  ]
})
export class PokemonsModule { }
