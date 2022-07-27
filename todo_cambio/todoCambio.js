//node todoCambio.js nombreArchivotxt txt indicadorEconomico(dolar) cantidadPesosACambiar
const axios = require('axios')
const fs = require('fs')

const nombreArchivotxt = process.argv[2]
const exten = process.argv[3]
const indicadorEconomico = process.argv[4]
const montoCambiar = process.argv[5]


if (nombreArchivotxt == undefined || exten == undefined || indicadorEconomico == undefined || montoCambiar == undefined) {
  console.log('Debe ingresar Todos los argumentos solicitados')
  process.exit(1)
}

async function obtenerValor(nombreArchivotxt, exten, indicadorEconomico, monto) {
  //API
  let resultado;
  const fecha = new Date()

  const resp = await axios.get('https://mindicador.cl/api')
  const datos = resp.data

  const indicador = datos[indicadorEconomico]
  // console.log(datos.dolar)
  // console.log(indicador)

  const codigo = indicador.codigo
  const valor = indicador.valor

  if (indicador.codigo == 'bitcoin') {
    resultado = Math.floor((monto / indicador.valor) / (datos.dolar.valor))
  } else {
    resultado = Math.floor(monto / valor)
  }

  const mensaje = `  A la fecha: ${fecha},
  Fue realizada cotización con los siguientes datos:
  Cantidad de pesos a convertir: ${monto} pesos
  Convertido a "${codigo}" 
  da un total de: $${resultado}.-`

  fs.writeFile(`${nombreArchivotxt}.${exten}`, mensaje, 'utf8', function () {
    fs.readFile(`${nombreArchivotxt}.${exten}`, 'utf8', function (err, contenido) {
      console.log(contenido)
    })

    //console.log(nombreArchivotxt, exten, valor, resultado, fecha, mensaje)


  })
}


obtenerValor(nombreArchivotxt, exten, indicadorEconomico, montoCambiar)
//console.log(nombreArchivotxt,exten,indicadorEconomico,montoCambiar)