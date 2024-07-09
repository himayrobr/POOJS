class persona{
    #edad;
    #nombre;
    #genero;
    constructor(edad, nombre, genero){
        this.#edad =edad;
        this.#nombre =nombre;
        this.#genero =genero;
    }
    set edad(edad){
        this.#edad = edad;
    }
    get edad(){
        return this.#edad;
    }
    set nombre(nombre){
        this.#nombre = nombre;
    }
    get nombre(){
        return this.#nombre;
    }
    set genero(genero){
        this.#genero = genero;
    }
    get genero(){
        return this.#genero;
    }
    saludar(){
        return `hola, mi nombre es ${this.#nombre} tengo ${this.#edad} de edad y me soy de genero ${this.#genero}`;
    }
}

let persona1= new persona (28, "sergio", "masculino");

console.log(persona1.saludar());


document.querySelector("#persona").innerHTML =/*html*/`
    <h1>Edad: <span>${persona1.edad}</span></h1>
    <h2>Nombre: <span>${persona1.nombre}</span></h2>
    <h2>Genero: <span>${persona1.genero}</span></h2>`;