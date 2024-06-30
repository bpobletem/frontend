export class Animal {
    constructor(nombre,edad,img,comentario,sonido){
        this.nombre = nombre;
        this.edad = edad;
        this.img = img;
        this.comentario = comentario;
        this.sonido = sonido;

    }
    getNombre(){
        return this.nombre;
    }
    getEdad(){
        return this.edad;
    }
    getImg(){
        return this.img;
    }
    getComentario(){
        return this.comentario;
    }
    getSonido(){
        return this.sonido;
    }
}