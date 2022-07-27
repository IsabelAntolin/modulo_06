const express = require('express')
const app = express()

const axios = require('axios')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

app.use(express.static('public'))


app.get('/crear', (req, res) => {
  //obtener contenido del index.html 
  const nombreArchivo = req.query.nombre//obtener nombre del archivo   
  const contenido = req.query.contenido  //obtener nombre del archivo 

  fs.writeFile(`archivos/${nombreArchivo}.txt`, contenido, 'utf8', function () {
    res.send('Archivo creado correctamente')
  })
});

app.get('/leer', (req, res) => {
  nombreArchivo = req.query.nombreLeer//obtener nombre del archivo  
  

  fs.readFile(`archivos/${nombreArchivo}.txt`, 'utf8', function (err, contenido) {
    res.send(contenido)
  })

});
app.get('/renombrar', (req, res) => {
  nombreArchivo = req.query.nombreActual
  const nuevoNombre = req.query.nuevoNombre
  fs.rename(`archivos/${nombreArchivo}.txt`, `archivos/${nuevoNombre}.txt`, function () {
    res.send('Archivo Renombrado');
  })
});

app.get('/eliminar', (req, res) => {
  nombreArchivo = req.query.archivoEliminar
  fs.unlink(`archivos/${nombreArchivo}.txt`, function () {
    res.send('Archivo Eliminado');
  })
});

app.get('*', (req, res) => {
  res.send('Página aún no implementada')
});




app.listen(3000, function () {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`)
  // console.log('servidor ejecutando correctamente');
})