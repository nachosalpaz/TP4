class Cuenta {
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
    }

    ingresar(cantidad) {
        this.saldo += cantidad;
    }

    extraer(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
        } else {
            console.log("No hay suficiente saldo en la cuenta.");
        }
    }

    informar() {
        return `Titular: ${this.titular}, Saldo: ${this.saldo}`;
    }
}

let cuenta = new Cuenta("Alex");

console.log("Informe inicial de la cuenta:");
console.log(cuenta.informar());

cuenta.ingresar(300);

console.log("Informe después de ingresar dinero:");
console.log(cuenta.informar());

cuenta.extraer(100);

console.log("Informe después de extraer dinero:");
console.log(cuenta.informar());
