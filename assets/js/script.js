let iifeGlobal = (() => {

	let inyectarTodo = (url, id) => {
		
		id.setAttribute('src', url);
		id.style.display = 'block';
	};

	return {
		mostrarTodo: (url, id) => inyectarTodo(url, id)
	};

})();

class Multimedia {

	constructor(url) {
		
		let _url = url;
		this.getUrl = () => _url;
	};

	get url() {

		return this.getUrl();
	};

	setInicio() {

		return 'Este metodo es para realizar un cambio en la URL del video.';
	}
}

class Reproductor extends Multimedia { 
	
	constructor(url, id) {
	
		super(url);
		let _id = id;
		this.getId = () => _id;
	}

	playMultimedia() {

		iifeGlobal.mostrarTodo(this.url, this.getId());
	};

	

	setInicio(tiempo) {
		
		this.getId().setAttribute('src', `${this.url}?amp&start=${tiempo}`);
	}

}

let playMusica = new Reproductor('https://www.youtube.com/embed/cN5sPgxlJe0', musica);
let playPelicula = new Reproductor('https://www.youtube.com/embed/qSqVVswa420', peliculas);
let playSerie = new Reproductor('https://www.youtube.com/embed/Vh-URNoi5LM', series);


playMusica.playMultimedia();
playPelicula.playMultimedia();
playSerie.playMultimedia();

playMusica.setInicio(60);

