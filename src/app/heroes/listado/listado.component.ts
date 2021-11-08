import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

heroes: string[] = ['Spiderman','Ironman','Hulk','Thor']
heroeBorrado:string = '';

borrarHeroe(){
  this.heroeBorrado = this.heroes.shift()||'';
  
  //.shift(); borrar el primer elemento del arreglo y los retorna
}

}
