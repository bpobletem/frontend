class Multimedia {
    constructor(url) {
        this.url = url;
    }

    getUrl(){
        return this.url;
    }

    setInicio() {
        return ;
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    playMultimedia() {
        const insertarVideo = (url, id) => {
            const iframe = document.getElementById(id);
            iframe.setAttribute("src", url);
        };

        insertarVideo(this.url, this.id);
    }

    setInicio(tiempo) {
        const inicioUrl = `${this.url};start=${tiempo}`;
        const iframe = document.getElementById(this.id);
        iframe.setAttribute("src", inicioUrl);
    }
}

const reproductorMusica = new Reproductor("https://www.youtube.com/embed/ft70sAYrFyY?si=xUXZblKtPCgLNAiF&amp", "musica");
const reproductorPelicula = new Reproductor("https://www.youtube.com/embed/38hFpBq-VUQ?si=xIoM0Y2cekYqZf6Z&amp", "peliculas");
const reproductorSerie = new Reproductor("https://www.youtube.com/embed/38hFpBq-VUQ?si=xIoM0Y2cekYqZf6Z&amp", "series");


reproductorMusica.playMultimedia();
reproductorPelicula.playMultimedia();
reproductorMusica.setInicio(30);
reproductorSerie.playMultimedia();