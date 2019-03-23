import {  Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { PokemonsService } from './../../services/pokemons.service';

import { Pokemon } from './../../models/pokemon.model';
import { PokemonDetail } from '../../models/pokemonDetail.model';
import { Search } from '../../models/search.model';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
  
})
export class PokemonsComponent implements OnInit {

  public pokemons: Pokemon[] ;
  public pokemon: PokemonDetail; 
  public modalRef: BsModalRef;
  public spin: boolean = false;
  public offset: number = 100

  public searchPokemon: Search = {
    nome: ''
  }

  public configModal = {
    ignoreBackdropClick: false,
    class: 'modal-lg'
  }; 

  constructor(
    private pokemonsService: PokemonsService,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
   this.getPkms()
  }  



  getPkms() {
    this.pokemonsService.pokemons().subscribe((data:Pokemon[])=>{
      this.pokemons = data; 
    })
  }

  openModal(template: TemplateRef<any>, pokeId:number) {
    this.spin = true;
    this.modalRef = this.modalService.show(template, this.configModal);
    this.pokemonsService.getPokemonById(pokeId).subscribe((data:PokemonDetail) =>{
      this.pokemon = data;    
    },(err)=>{
      console.log(err)
    },
    ()=>{
      this.spin = false;
    })    
  }

}
