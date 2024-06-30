export const validarForm = (animal, edad, comentarios) => {

    const validAnimals = ["Leon", "Lobo", "Oso", "Aguila", "Serpiente"];
    const validAges = ["0 - 1 años", "1 - 3 años", "3 - 5 años", "5 - 8 años", "8 - 10 años", "Más de 10 años"];

    if (!validAnimals.includes(animal)) {
        alert("Seleccione un animal valido")
        return false
    }

    if (!validAges.includes(edad)) {
        alert("Falta la edad")
        return false
    }

    if (comentarios.trim() === "") {
        alert("Faltan los comentarios")
        return false
    }

    return true
}