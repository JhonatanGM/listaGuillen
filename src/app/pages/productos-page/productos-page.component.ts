import { Component, OnInit } from '@angular/core';
import { ListadoProductos } from 'src/app/models/listadoProductos.model';

@Component({
  selector: 'app-productos-page',
  templateUrl: './productos-page.component.html',
  styleUrls: ['./productos-page.component.css']
})
export class ProductosPageComponent implements OnInit {

  loading: boolean = true;

  productos: ListadoProductos[] = [
    new ListadoProductos(1000,'matequilla laive',10,new Date('2022-11-01'),true),
    new ListadoProductos(1001,'yogurt',45,new Date('2022-11-25'),true),
    new ListadoProductos(1002,'lechuga',23,new Date('2022-11-20'),false),
    new ListadoProductos(1003,'turrones',9,new Date('2022-10-30'),true),
    new ListadoProductos(1004,'coca cola',13,new Date('2022-12-01'),false),
    new ListadoProductos(1005,'inka cola',11,new Date('2022-10-05'),true)
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false
    }, 2500);
  }

}
