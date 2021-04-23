import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-mercha',
  templateUrl: './producto-mercha.component.html',
  styleUrls: ['./producto-mercha.component.css']
})
export class ProductoMerchaComponent implements OnInit {
  //atributos, propiedades
  private codigo_producto = "cp0001";
  private nombre_producto = "Camiseta Freddy";
  private precio_producto = 17;
  private descripcion_producto = "Camiseta de algodon, Tallas: S, M , L, XL, XXL";
  private imagen_producto = "mostrar imagen";

  //metodos getter & setter
  get_nombre(){
    return this.nombre_producto;
  }

  get_precio(){
    return this.precio_producto;
  }

  get_descripcion(){
    return this.descripcion_producto;
  }

  get_imagen(){
    return this.imagen_producto;
  }

  //constructor
  constructor() { }

  ngOnInit(): void {
  }

}
