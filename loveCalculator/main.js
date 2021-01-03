let value;
value = Math.round(3.4) // Round 
value = Math.ceil(3.4) // ceil
value = Math.floor(4.5);
value = Math.sqrt(225);
value = Math.pow(5,2);
value = Math.abs(-8)
let random = Math.random() * 100;
value = Math.floor(random) + 1;                       
console.log(value);

// Love Calculator 

let boyName = prompt("Enter Boy Name");
let girlsName = prompt("Enter Gir Name");
let generateLove = Math.random() * 100;
generateLove = Math.floor(generateLove) + 1;
alert(boyName +"+"+ " "+girlsName+" Love " + generateLove + "%");