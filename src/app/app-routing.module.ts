import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonsRoutes } from './pokemons/pokemons-routing.module';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'pokemons', 
    pathMatch: 'full'
  },
  ...PokemonsRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
