let Personas = require('./personas');
let vacantes = require('./vacantes');
let varisble1 = vacantes[Math.floor(Math.random()*(6-1)+1)]
let variable2 = Personas.datos[Math.floor(Math.random()*(5-1)+1)]

console.log(Object.assign(varisble1,variable2));

