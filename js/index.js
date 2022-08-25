class wanted{
    constructor (nombre , apellido , telefono , articulo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.articulo = articulo;
    }
}


let lista_mas_buscado = [];

for (let i = 0 ; i < 5 ; i++){

    let articulo = prompt("Indique el articulo que esta buscando");
    let nombre = prompt("Indique su nombre");
    let apellido =prompt("indique su apellido ");
    let telefono = prompt("Indique su telefono");


    let nueva_busqueda = new wanted(nombre , apellido , telefono , articulo);
    lista_mas_buscado.push (nueva_busqueda);
    }
    
console.log (lista_mas_buscado);

for(let wanted of lista_mas_buscado){
    console.log ("<------------------>");
    console.log ("Nombre ", wanted.nombre);
    console.log ("Apellido " , wanted.apellido);
    console.log ("Telefono " , wanted.telefono);
    console.log ("Articulo" , wanted.articulo);
}