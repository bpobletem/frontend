export const cargarPreview = async(dataAnimal, contenedorPreview) => {
    const pathAnimalImg = `assets/imgs/${dataAnimal.imagen}`;

    contenedorPreview.style.backgroundImage = `url(${pathAnimalImg})`;
    contenedorPreview.style.backgroundPosition = 'center';
}