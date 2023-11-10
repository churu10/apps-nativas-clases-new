import { Injectable } from '@angular/core';
import { Carrito } from '../interfaces/carrito';
import { Producto } from '../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { 
    const memoria = localStorage.getItem("carrito");
    if(memoria) {
      this.carrito = JSON.parse(memoria);
      this.calcularTotal()
    };

    

    
  }

  carrito:Carrito[] = [];
  totalCarrito:number = 0;


  modificarCantidadProducto(idProducto:number , cambiarCantidad:number ){
    const index =this.carrito.findIndex(item => 
      item.producto.id === item.producto.id

    
    );
    if(index> -1) {
      this.carrito[index].cantidad = cambiarCantidad;
    }
    this.actualizarLocalStorage();
    

  }


  agregarProducto(producto:Producto, cantidad:number){
    const index =this.carrito.findIndex(item => 
      item.producto.id === item.producto.id

    
    );
    if(index> -1) {
      this.carrito[index].cantidad++;
    }else {
      this.carrito.push({
        producto:producto,
        cantidad:cantidad
      })
      this.actualizarLocalStorage();
      this.getTotal();
    }

    
    this.carrito.push({
      producto:producto,
      cantidad: cantidad
      
      
    })
    this.actualizarLocalStorage();
    this.calcularTotal();
  }

  eliminarProducto(id:number){

    this.carrito = this.carrito.filter(item=>
      item.producto.id !==id);
      this.actualizarLocalStorage();
      
      this.calcularTotal();

  }

  limpiarCarrito(){
    this.carrito = [];
    
    this.actualizarLocalStorage();
    this.calcularTotal();

  }

  getTotal(){

  }

  actualizarLocalStorage(){
    localStorage.setItem("carrito", JSON.stringify(this.carrito))
    this.calcularTotal();
    
  }

  calcularTotal(){
    this.totalCarrito = 0; 
    this.carrito.forEach(item => {
      this.totalCarrito += item.producto.precio * item.cantidad; 
    })
  }


  generarMensaje(){
    const primeraParte = "https://wa.me/+543491417834?text=";
    let parteProducto = ''
    this.carrito.forEach(itemCarrito => {
      parteProducto += `*${itemCarrito.producto.nombre} - ${itemCarrito.cantidad}`
      
    });
    const ultimaParte = `se realizo el siguiente pedido:
    Productos: 
    ${parteProducto}
    total: $${this.totalCarrito}
    direccion de envio: DIRECCION DE EJEMPLO
    
    `;
    return encodeURI(primeraParte+ultimaParte);
    
  }
  
  
  
  
  
}

