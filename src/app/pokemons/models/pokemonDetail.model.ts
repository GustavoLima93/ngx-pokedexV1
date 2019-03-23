import { Statu } from './statu.model';

export class PokemonDetail {
    constructor(
        public nome: string = '',
        public status: Statu[] =[],
        public tipo: string[] = [],
        public sprites: string[] = []
    ){}
}