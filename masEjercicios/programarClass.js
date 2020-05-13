class Pelicula{
    constructor({id,titulo,director,estreno,pais,generos,calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;
        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
    }

    validarCadena(propiedad,valor){
        if(!valor) return console.log(`${propiedad} "${valor}" esta vacio`);
        if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado no es una cadena de texto`);
        return true;
    }

    validarLongitudCadena(propiedad,valor,longitud){
        if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos(${longitud})`);
        return true;
    }

    validarIMDB(id){
        if(this.validarCadena ("IMDB id",id))
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))
            return console.error(`Imdb id "${id}" no es valido porque debe de tener 9 caracteres,los dos primeros letras minusculas
            y los siete restantes seran numeros`);
        
    }

    validarTitulo(titulo){
        if(this.validarCadena("Titulo",titulo))
            this.validarLongitudCadena("Titulo",titulo,100);
    }

    validarDirector(director){
        if(this.validarCadena("Director",director))
            this.validarLongitudCadena("Director",director,50);
    }
}

const pelicula = new Pelicula({
    id:"ti1234567",
    titulo:"Snatch : Cerdos y Diamantes",
    director:"Guy Ritchie"
});