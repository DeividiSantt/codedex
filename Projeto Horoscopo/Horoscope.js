const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Where are you born? ", function(answer){
let born = answer.toLowerCase();

if (born === "january") {
    console.log("Your horoscope is Capricorn♑");
} else if (born === "february") {
    console.log("Your horoscope is Aquarius♒");
} else if (born === "march") {
    console.log("Your horoscope is Pisces♓");
} else if (born === "april") {
    console.log("Your horoscope is Aries♈");
} else if (born === "may") {
    console.log("Your horoscope is Taurus♉");
} else if (born === "june") {
    console.log("Your horoscope is Gemini♊");
} else if (born === "july") {
    console.log("Your horoscope is Cancer♋");
} else if (born === "august") {
    console.log("Your horoscope is Leo♌");
} else if (born === "september") {
    console.log("Your horoscope is Virgo♍");
} else if (born === "october") {
    console.log("Your horoscope is Libra♎");
} else if (born === "november") {
    console.log("Your horoscope is Scorpio♏");
} else if (born === "december") {
    console.log("Your horoscope is Sagittarius♐");
} else {
    console.log("Write a valid month");
}});

