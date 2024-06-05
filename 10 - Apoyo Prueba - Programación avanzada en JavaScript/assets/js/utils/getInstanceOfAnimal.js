import {Leon,Lobo,Aguila,Serpiente,Oso} from '../model/index.js'

const addListAnimal = (listAnimal, animalObject) => {
    listAnimal.push(animalObject);
    return listAnimal;
}

export const getInstanceOfAnimal = (animal,age,img,comment,sonido,listAnimal) => {
    switch (animal) {
        case "Leon":
            const leon = new Leon(animal,age,img,comment,sonido);
            addListAnimal(listAnimal,leon)
            break
        case "Lobo":
            const lobo = new Lobo(animal,age,img,comment,sonido);
            addListAnimal(listAnimal,lobo)
            break
        case "Oso":
            const oso = new Oso(animal,age,img,comment,sonido);
            addListAnimal(listAnimal,oso)
            break
        case "Serpiente":
            const serpiente = new Serpiente(animal,age,img,comment,sonido);
            addListAnimal(listAnimal,serpiente)
            break

        case "Aguila":
            const aguila = new Aguila(animal,age,img,comment,sonido);
            addListAnimal(listAnimal,aguila)
            break
    }
}