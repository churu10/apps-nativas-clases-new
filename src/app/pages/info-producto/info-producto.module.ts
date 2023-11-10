import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoProductoPageRoutingModule } from './info-producto-routing.module';

import { InfoProductoPage } from './info-producto.page';
import { ContadorCantidadComponent } from "../../core/components/contador-cantidad/contador-cantidad.component";

@NgModule({
    declarations: [InfoProductoPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InfoProductoPageRoutingModule,
        ContadorCantidadComponent
    ]
})
export class InfoProductoPageModule {}
