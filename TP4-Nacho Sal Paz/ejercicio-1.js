class Auto {
    constructor(color, marca, modelo) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false;
    }
    encender() { 
        if(this.encendido) {
            this.encendido = true;
            console.log("El auto esta encendido");
        }
        else {
            console.log("El auto se encuentra apagado");
        }
}
apagar() {
    if(this.encendido) {
        this.encendido = false;
        console.log("El auto esta apagado");
    }
    else {
        console.log("El auto se encuentra encendido");
    }
}
}
let miAuto = new Auto("Blanco", "Fiat", "147SoundCar");
console.log("Marca:", miAuto.marca);
console.log("Modelo:", miAuto.modelo);
console.log("Color:", miAuto.color);

miAuto.encender();
miAuto.apagar();