const planVacation = (destinationOne, destinationTwo, ...moreDestinations) => {
  return [destinationOne, destinationTwo, ...moreDestinations];
};

const myTrip = planVacation(
  "Ilha do Mel 🏝️",
  "Bonito 🌿",
  "Chapada dos Veadeiros ⛰️",
  "Pantanal 🐊"
);

console.log(myTrip);
