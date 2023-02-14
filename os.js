// Muestra  los cpu de la computadora, en un array por que van desde los [] de objetos por que estan dentro de los {}
const os = require('os');
let cpu = os.cpus();
console.log(cpu);

// Indica por que sistema operativo se esta iniciando Node.
let sistema = os.platform();
console.log(sistema);


// Nombre de la maquina
let usuario = os.hostname();
console.log(usuario);

// Muesta la artitectura donde el archivo node fue compilado
let arquitetura = os.arch();
    console.log(arquitetura);


