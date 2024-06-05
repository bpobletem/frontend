export const animalData = (animalesJson, inputAnimal) => {
    try{
        const animalData = animalesJson.filter(animal => animal.name === inputAnimal);
        return animalData[0];
    } catch(error) {
        throw new Error('No pudimos obtener la data del animal buscado',error);
    }
}