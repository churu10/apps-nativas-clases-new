import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constanst/categorias';
import { Producto } from 'src/app/core/interfaces/productos';
import { CarritoService } from 'src/app/core/services/carrito.service';

@Component({
  selector: 'app-info-producto',
  templateUrl: './info-producto.page.html',
  styleUrls: ['./info-producto.page.scss'],
})
export class InfoProductoPage implements OnInit {

  router = inject(Router)

  constructor(private activatedRouted:ActivatedRoute,
    private carritoService:CarritoService
    ) {
    activatedRouted.params.subscribe(params => {
      console.log(params)
      CATEGORIAS.forEach(categoria =>{
        const productoEncontrado = categoria.productos.find(producto => producto.id == params["id"]);
        if(productoEncontrado){
          this.producto = productoEncontrado
        }
        
      })
    })
   }

  ngOnInit() {
  }

  producto: Producto = {
    nombre: "",
    precio: 0,
    ingredientes: [],
    imagen: "",
    id: 0,

  }

  cantidad = 1;

  OnAgregarAlCarritoClicked(){
    
    this.carritoService.agregarProducto(this.producto, this.cantidad);
    console.log(this.producto);
    this.router.navigate(['tabs/tab1']);
  }

}
