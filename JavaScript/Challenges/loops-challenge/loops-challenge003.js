let limit = 5;
let total = 0;

for(let i = 1; i <= limit; i++){
  if(i % 2 === 1){
    let cubo = i ** 3;
    console.log(`${i}³ = ${cubo}`);
    total += cubo;
  } 
}
console.log(`total final: ${total}`)