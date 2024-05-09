class Producto{
constructor( nombre, precio) {
    this.codigo = window.self.crypto.randomUUID();
    this.nombre = nombre;
    this.precio = precio;
}

imprimeDatos() {
    console.log(`Codigo: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
}
}

let productos = [
    new Producto("Microfono", 1000),
    new Producto("Celular", 2000),
    new Producto("Mouse", 3000),
    new Producto("Teclado", 4000),
    new Producto("Auriculares", 5000),
];

console.log("Datos de los Productos:");
productos.forEach(Producto => {
    Producto.imprimeDatos();
}
);