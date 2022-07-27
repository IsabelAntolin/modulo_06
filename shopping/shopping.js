const fs = require('fs')

function escribir() {
    const productos = 'Arroz \nAzúcar \nSal \nLeche'
    fs.writeFile('compras.txt', productos, 'utf8', function () {
        console.log('Archivo escrito correctamente');
        const myTimeout = setTimeout(leer, 2000);      
        //leer()
    })
}

function leer() {
    fs.readFile('./compras.txt', 'utf8', function (err, datos) {
        console.log(datos);
        const myTimeout = setTimeout(renombrar, 2000);
        //renombrar();
    })
}

function renombrar() {
    fs.rename('compras.txt', 'compraSemanales.txt', function () {
        console.log('Archivo Renombrado');
        const myTimeout = setTimeout(eliminar, 2000);
        //eliminar();
    })
}

function eliminar() {
    fs.unlink('compraSemanales.txt', function () {
        console.log('Archivo Eliminado');
        
    })
}

escribir();
//leer();
//renombrar();
//eliminar();