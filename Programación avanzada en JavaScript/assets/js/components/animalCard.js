export const createTableCardOfAnimal = (listAnimal) => {
    const animalCards = listAnimal.map((animal) => {
        return `
        <div class="card bg-dark text-white m-2 w-25">
            <img src="assets/imgs/${animal.img}" alt="foto de ${animal.nombre} class="card-img-top open-model animal-img">
            <div class="img-audio w-100 bg-dark">
                <img src="assets/imgs/audio.svg" alt="sonido animal" class="play-audio">
                <audio controls class="w-100">
                    <source class="" src="assets/sounds/${animal.sonido}" type="audio/ogg">
                </audio>
            </div>
        </div>
        `
    })

    return animalCards.join('')
    
}