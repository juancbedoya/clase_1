const myArray = [3, 9, 12, 23, 99, 1];

let b=myArray.reduce((total, num)=>{
return total + num;
});
console.log(b);