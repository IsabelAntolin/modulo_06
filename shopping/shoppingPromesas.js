const fs = require('fs').promises

//crear promesas
function createTo(){
    return new Promise((res,rej)=>{
        setTimeout(res,2000)
    })
}

async function escribir(){
    let productos = ['Arroz', 'Azúcar', 'Sal', 'Leche'];
    // Transformar en string
    productos= productos.join('\n')

    await fs.writeFile('compras.txt', productos, 'utf8')
    createTo()


    const contenido = await fs.readFile( 'compras.txt', 'utf8')

    await fs.rename('compras.txt', 'compraSemanales.txt')
    await fs.unlink('compraSemanales.txt')

    console.log('teminado');
}


escribir();
//leer();
//renombrar();
//eliminar();