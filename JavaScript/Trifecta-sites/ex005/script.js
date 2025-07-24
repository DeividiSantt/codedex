// Write code below 💖

const memeArray = [
  "https://i.imgur.com/bSi4xLb.png",
  "https://i.imgur.com/6y0G7N0.png",
  "https://i.imgur.com/LXnRao1.png",
  "https://i.imgur.com/Qqoxh1N.png"
];

const captionsArray = [
  "When code finally works 😎",
  "Just one more bug... maybe 🐛",
  "Commit, push, and pray 🙏",
  "Coffee: the real MVP ☕"
];

// Elementos principais com os nomes que você pediu 👇
let randomMeme = document.getElementById("random-meme");
let randomCaption = document.getElementById("random-caption");

let generatorButton = document.getElementById("generator-button");

generatorButton.addEventListener("click", function () {
  const memeIndex = Math.floor(Math.random() * memeArray.length);
  const captionIndex = Math.floor(Math.random() * captionsArray.length);

  randomMeme.src = memeArray[memeIndex];
  randomCaption.innerText = captionsArray[captionIndex];
});
