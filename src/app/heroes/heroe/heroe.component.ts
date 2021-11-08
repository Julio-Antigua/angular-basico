import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad  : number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    optenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;//ese martir(``) lo que dice que se escriba un string ahi adentro
    }

    cambiarNombre(): void{
        this.nombre = 'SpiderMan';
    }
    cambiarEdad(): void{
        this.edad = 20;
    }
}