const dnaPieces = ["A", "C", "G", "T"];
let myDna = [];
for(let i = 0; i < 24; i++){
    let dnaString = "";
    for(let j = 0; j < 3; j++){
        dnaString += dnaPieces[Math.floor(Math.random() * 4)];
    }
    myDna.push(dnaString);
}    
console.log(myDna);