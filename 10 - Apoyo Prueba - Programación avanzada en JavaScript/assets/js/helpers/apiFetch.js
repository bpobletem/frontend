const BASE_URL = `http://127.0.0.1:3000`;

export const getAnimalJson = async () => {
    try{
        const res = await fetch(`${BASE_URL}/animales.json`)
        const data = await res.json();
        return data.animales
    }
    catch (error) {
        throw new Error('No pudimos encontrar los animales.');
    }
}