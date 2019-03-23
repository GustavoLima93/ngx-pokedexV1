import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private URL_POKEMON = `${environment.url}pokemons`

  constructor(
    private http: HttpClient
  ) { }

  pokemons(): Observable<any> {
    return this.http.get<any>(this.URL_POKEMON).pipe(map(response => response.pokemons));
  }

  getPokemonById(id:number): Observable<any> {
    return this.http.get<any>(`${this.URL_POKEMON}/${id}`).pipe(map(response => response.pokemons));
  } 

}
