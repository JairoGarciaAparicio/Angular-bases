import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman'.toUpperCase();
  }

  changeAge(): void {
    this.age = 38
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;

    //SI queremos cambiar el valor de los h1 por el "hola desde angular"
    // document.querySelectorAll('h1')!.forEach(element => {element.innerHTML = '<h1>Hola desde Angular</h1>';})
  }
}
