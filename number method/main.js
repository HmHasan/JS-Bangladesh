let x = 10;
x+=toString(x);
console.log(typeof(x));
let StringNumber = "10.566";
StringNumber= parseInt(StringNumber);
console.log(typeof(StringNumber));
let a = 20;
console.log(a.toExponential());
let b = 10.5;
console.log(b.toFixed());
let c = 65.512;
console.log(c.toPrecision(4));
let d = 20.5;
console.log(d.valueOf());
let e = "Bangladesh";
console.log(e.valueOf());
let f = "250.56";
console.log(parseInt(f));

// Number Properties

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY)