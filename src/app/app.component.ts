import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = 'Raulete';

  arreglo =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre : 'Logan',
    clave : 'Wolverine',
    edad : 500,
    direccion : {
      calle : 'Primera',
      casa : '19'
    }
  };

  // tslint:disable-next-line:no-shadowed-variable
  valorDePromesa = new Promise( (resolve) => {
    setTimeout( () => resolve('Llegó la data!') , 3500 );
  });

  fecha = new Date();

  nombre2 = 'raúl garCía lóPez';

  video = 'IcrbM1l_BoI';

  activar = true;

}
