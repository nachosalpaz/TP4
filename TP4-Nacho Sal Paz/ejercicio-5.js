class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, AnioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.AnioNacimiento = AnioNacimiento;
    
    }

    mostrarGeneracion() {
        let generacion = "";
        if (this.AnioNacimiento >= 1930 && this.AnioNacimiento <= 1948){
            generacion = "Silent Generation";
        }
        else if (this.AnioNacimiento >= 1949 && this.AnioNacimiento <= 1968){
            generacion = "Baby Room";
        }
        else if (this.AnioNacimiento >= 1969 && this.AnioNacimiento <= 1980){
            generacion = "Generation X";
        }
        else if (this.AnioNacimiento >= 1981 && this.AnioNacimiento <= 1993){
            generacion = "Generation Y";
        }
        else if (this.AnioNacimiento >= 1994 && this.AnioNacimiento <= 2010){
            generacion = "Generation Z";
        }return generacion
        // console.log(`La persona pertenece a la ${generacion}.`);
    }

    esMayorDeEdad() {
        return this.edad >=18;
    }

    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`DNI: ${this.dni}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Peso: ${this.peso}`);
        console.log(`Altura: ${this.altura}`);
        console.log(`Es de la generacion: ${this.mostrarGeneracion()}`);
        console.log(`Es mayor de edad: ${this.esMayorDeEdad()}`);
    }

    generaDni() {
        return math.floor(math.random() * 100000000);
    }
}

let persona = new Persona("Nacho", 20, 45062641, "H", 75 , 1.75, 2003);

console.log("Datos de la persona:");
persona.mostrarDatos();
persona.mostrarGeneracion();

if (persona.esMayorDeEdad()) {
    console.log("Es mayor de edad");
} else {
    console.log("No es mayor de edad");
}
