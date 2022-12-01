export class ListadoProductos{
id: number;
producto: string;
stock: number;
fechaCompra: Date;
isTop10:boolean;

constructor(id: number, producto: string,stock: number,fechaCompra: Date,isTop10:boolean){
this.id = id;
this.producto = producto;
this.stock = stock;
this.fechaCompra = fechaCompra;
this.isTop10 = isTop10;
}

alternarTop10(){
  this.isTop10 = !this.isTop10;
}

}
