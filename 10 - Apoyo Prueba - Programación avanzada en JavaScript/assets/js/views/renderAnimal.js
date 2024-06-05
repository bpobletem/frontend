import {createTableCardOfAnimal} from "../components/animalCard.js"

export const renderAnimal = async(contenedor, listAnimal) => {
    const animalCard = await createTableCardOfAnimal(listAnimal)

    contenedor.innerHTML = animalCard;
}