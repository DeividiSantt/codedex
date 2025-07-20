const musicPlaylist = [
  "Tom Sawyer",
  "Sabotage",
  "I Wanna Dance With Somebody",
  "Don't Speak",
  "Bulls On Parade",
  "Thriller",
  "The Breaks",
  "Brick",
  "Aeroplane Over the Sea",
  "Tubthumping"
];

const shiftedSong = musicPlaylist.shift();
const poppedSong = musicPlaylist.pop();

const newSong1 = musicPlaylist.unshift("Bohemian Rhapsody", "Imagine");
const newSong2 = musicPlaylist.push("Hotel California");

console.log(musicPlaylist);