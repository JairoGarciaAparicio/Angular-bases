import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../intefaces/character.interface';

@Component({
  selector: 'dgz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  //onDelete = Indez value: number
  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(id?: string):void{
    if (!id) return
    //TODO: emitir el ID del personaje
    this.onDelete.emit(id);
    console.log({id});
  }
}
