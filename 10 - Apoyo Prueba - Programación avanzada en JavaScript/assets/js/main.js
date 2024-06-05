import { cargarPreview } from "./views/cargarPreview.js";
import { getAnimalJson } from "./helpers/apiFetch.js";
import { animalData } from "./utils/animalData.js";
import { getInstanceOfAnimal } from "./utils/getInstanceOfAnimal.js";
import {renderAnimal} from "./views/renderAnimal.js";
import { validarForm } from "./utils/validarForm.js";

const inputAnimal = document.getElementById('animal');
const inputEdad = document.getElementById('edad');
const inputComentarios = document.getElementById('comentarios');

const btnRegistrar = document.getElementById('btnRegistrar');
const contenedorPreview = document.getElementById('preview');
const contenedorAnimales = document.getElementById('Animales');

let animalesJson = '';

(async() => {
    try{
        animalesJson = await getAnimalJson();
        return getAnimalJson
    } catch(error) {
        throw new Error('Error al intentar obtener el Json de los animales', error);
    }
})();

inputAnimal.addEventListener('change', async() => {
    let animalSelected = inputAnimal.value;
    const animal = await animalData(animalesJson, animalSelected);
    cargarPreview(animal, contenedorPreview);
})

const listAnimal = [];

btnRegistrar.addEventListener('click', async() => {
    let animalSelected = inputAnimal.value;
    let edadSelected = inputEdad.value;
    let comentarioSelected = inputComentarios.value;

    const animal = await animalData(animalesJson, animalSelected)

    const { imagen, sonido } = animal;
    
    if (!validarForm(animalSelected, edadSelected, comentarioSelected)){
        return false
    }
    
    getInstanceOfAnimal(animalSelected, edadSelected, imagen, comentarioSelected, sonido, listAnimal)

    renderAnimal(contenedorAnimales, listAnimal)

    console.log("intentando renderizar animal")

})