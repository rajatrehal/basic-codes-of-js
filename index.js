//basic 
console.log("hello world");
//add string and number
let a="rajat";
let b=9;
console.log(a+b);
// creating object
const myfav = {
  name:"rajat",
  friend:"no one",
  car: "contess",
    watche:"rolex",
    placetowork:"silicon velly",
  placetovisit:"kedharnath",
      
}
//printing object
//type 1
console.log(myfav.placetovisit);
//type2
console.log(myfav["placetowork"]);
//changing values of key in object
myfav['car']="contessa";
console.log(myfav.car);
//adding new key in object
myfav['workout'] = "yess"
console.log(myfav.workout);
console.log(myfav);
