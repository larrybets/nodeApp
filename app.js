//  requireds
// const fs = require('fs');
// const fs = require('express'); -> paquete no nativo de Node.js
// const fs = require('./fs'); -> de donde viene el archivo que nosotros mismos escribimos


const argv = require('./config/yargs').argv;
const colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        console.log('Listar');
        break;

    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:` + " " + colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');


}



// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]
// console.log('limite', argv.limite);


// let data = '';

// for (let i = 1; i < 10; i++) {

//     let resultado = base * i;
//     // console.log(`${base} * ${i} es igual a ${resultado}`);

//     data += `${base} * ${i} es igual a ${base * i}\n`;
//     // \n para hacer saltar de linea

// }

// fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo de la base ${ base } `);
// });


// console.log(process.argv);clear