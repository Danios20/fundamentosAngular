import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Atributos de clase
  name :string | number | boolean= 'David';
  bandera : boolean = !true;
  widthImg : number=10;
  newName !: string;
  total: number = 25000;
  today: Date = new Date();
  otherDate: Date = new Date(2022, 1, 25)

  person = {
    name : 'Liliana',
    age : 25,
    avatar: 'https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_788543494.jpg'
  }

  box = {
    width: 100,
    height: 100,
    background: 'red'
  };


  // Array
  names: string[] = ['Valentina', 'Mike', 'Llilina', 'Andres'];

 //Array de Objs
 products: Product[] = [
  {
    name: 'EL mejor juguete',
    price: 565,
    image: './assets/images/toy.jpg',
    category: 'all',

  },
  {
    name: 'Bicicleta casi nueva',
    price: 356,
    image: './assets/images/bike.jpg'
  },
  {
    name: 'Colleción de albumnes',
    price: 34,
    image: './assets/images/album.jpg'
  },
  {
    name: 'Mis libros',
    price: 23,
    image: './assets/images/books.jpg'
  },
  {
    name: 'Casa para perro',
    price: 34,
    image: './assets/images/house.jpg'
  },
  {
    name: 'Gafas',
    price: 3434,
    image: './assets/images/glasses.jpg'
  }
]

  constructor(){
    // this.name=12;
  }

  // Metodos
  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event : Event) {
    const evento = event.target as HTMLElement;
    console.log('Posición de Scrol: :>> ', evento.scrollTop);
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index,1);
  }


}
