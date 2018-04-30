/**
 * 
 * 
 */

const fs = require('fs');
const colors = require('colors');




crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i < limite; i++) {

            data += `${base} * ${i} es igual a ${base * i}\n`;


            // console.log(`${base}*${i} = ${ base * i}`);

            // let resultado = base * i;
            // console.log(`${base} * ${i} es igual a ${resultado}`);

            // \n salto de linea

        }

        fs.writeFile(`tablas/tabla-${ base }-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${limite}.txt`)

        });
    });
}


let listarTabla = (base, limite = 10) => {

    console.log('========='.green);
    console.log(`=====Tabla de ${base} ====`.green);
    console.log('========='.green);
    for (let i = 1; i < limite; i++) {



        console.log(`${base}*${i} = ${ base * i}`);
        // \n salto de linea

    }

}


module.exports = {
    crearArchivo,
    listarTabla
}