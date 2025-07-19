luckyNumber = 7
randomNumber = Math.floor(Math.random() * 10) + 1

while(randomNumber != luckyNumber){
  console.log(`Nope, it isn't ${randomNumber}`)
  randomNumber = Math.floor(Math.random() * 10) + 1
}

console.log("Yeahh, my lucky number is 7!!")