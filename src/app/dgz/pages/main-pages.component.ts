import { Component, OnInit } from '@angular/core';
import { Character } from '../intefaces/character.interface';
import { DgzService } from '../services/dgz.service';

@Component({
  selector: 'app-dgz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPageComponent {

  constructor(private dgzService : DgzService){

  }
  get characters(): Character[]{
    return [...this.dgzService.characters];
  }

  onDeleteCharacter (id: string):void{
    this.dgzService.deleteCharacterById(id)
  }

  onNewCharacter (character: Character): void{
    this.dgzService.addCharacter(character)
  }

}
