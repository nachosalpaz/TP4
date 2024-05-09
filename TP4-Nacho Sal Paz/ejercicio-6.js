class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this._ISBN = ISBN;
      this._titulo = titulo;
      this._autor = autor;
      this._numPaginas = numPaginas;
    }
  
    get ISBN() {
      return this._ISBN;
    }
  
    get titulo() {
      return this._titulo;
    }
  
    get autor() {
      return this._autor;
    }
  
    get numPaginas() {
      return this._numPaginas;
    }
  
    set ISBN(ISBN) {
      this._ISBN = ISBN;
    }
  
    set titulo(titulo) {
      this._titulo = titulo;
    }
  
    set autor(autor) {
      this._autor = autor;
    }
  
    set numPaginas(numPaginas) {
      this._numPaginas = numPaginas;
    }
  
    mostrarLibro() {
      console.log(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`);
    }
  }
  
  const libro1 = new Libro("978-1-234567-89-7", "El Laberinto de los Sueños", "María García", 324);
  const libro2 = new Libro("978-3-567890-12-3",  "Caminos de Arena", "Juan Martínez", 412);
  
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  
  if (libro1.numPaginas > libro2.numPaginas) {
    console.log(`El libro ,${libro1.titulo} tiene más páginas que el libro: ${libro2.titulo}.`);
  } else if (libro1.numPaginas < libro2.numPaginas) {
    console.log(`El libro ,${libro2.titulo}, tiene más páginas que el libro: ${libro1.titulo}.`);
  } else {
    console.log(`${libro1.titulo} y ${libro2.titulo} tienen el mismo número de páginas.`);
  }
  