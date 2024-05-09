class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    modificarAlto(nuevoAlto) {
        this.alto = 8;
    }
    modificarAncho(nuevoAncho) {
        this.ancho = 10;
    }
    mostrarPropiedades(){
        console.log(`Alto: ${this.alto}, Ancho: ${this.ancho}`); 
        }
        calcularElPerimetro() {
            return 2 * (this.alto + this.ancho);
        }
        calcularElArea() {
            return this.ancho * this.alto;
        }
    }
        let miRectangulo = new Rectangulo(4, 6);

        console.log("Propiedades del rectangulo:");

        miRectangulo.mostrarPropiedades();

        miRectangulo.modificarAlto(7);

        miRectangulo.modificarAncho(12);

        console.log("Propiedades actualizadas del rectangulo:");
        miRectangulo.mostrarPropiedades();

        console.log("Perimetro del rectangulo:", miRectangulo.calcularElPerimetro())

        console.log("Area del rectangulo:", miRectangulo.calcularElArea())