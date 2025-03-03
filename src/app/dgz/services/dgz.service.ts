import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';
import { Character } from '../intefaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DgzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }];


    addCharacter (character: Character): void{

      const newCharacter: Character = { id: uuid(), ...character};
      this.characters.push(character);
    }

    // onDeleteCharacter (index: number){
    //   this.characters.splice(index, 1);
    // }
    deleteCharacterById (id:string){
      this.characters = this.characters.filter(character => character.id !== id);
      this.characters.splice(id.length, 1)
    }

}
