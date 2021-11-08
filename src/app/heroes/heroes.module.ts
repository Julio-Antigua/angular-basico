import { CommonModule } from "@angular/common";// se usa para el funcionamiento de los NgIf y Ngelse
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent 
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule{}