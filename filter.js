const myArray = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];

const resultado = (Number)=>{
    if (Number % 2 === 0 & Number>0) {
        return true;
    }
    return false;
}
console.log(myArray.filter(resultado));