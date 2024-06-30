import {Animal} from "./animal.js";

export class Leon extends Animal {
    constructor(nombre,edad,img,comentario,sonido){
        super(nombre,edad,img,comentario,sonido);
    }
    rugir(){
        return this.sonido;
    }
}