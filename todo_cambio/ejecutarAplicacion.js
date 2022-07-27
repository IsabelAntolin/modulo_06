const child_process = require('child_process')
const fs = require('fs')

// obtener paramrtros
const nombreArchivotxt = process.argv[2]
const exten = process.argv[3]
const indicadorEconomico = process.argv[4]
const montoCambiar = process.argv[5]


// primero chequeo que el usuario mandó info requerida
if(nombreArchivotxt == undefined ||  exten == undefined ||  indicadorEconomico == undefined ||  montoCambiar == undefined){    
    console.log('ingresar consulta completa')
    process.exit(1)
}

child_process.exec(`node todoCambio.js ${nombreArchivotxt} ${exten} ${indicadorEconomico} ${montoCambiar}`,function(err,datos){
    console.log(datos)
} )





