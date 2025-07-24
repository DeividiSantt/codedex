// Write code below 💖

const departTripTicket = {
  name: "Joao",
  from: "brazil",
  to: "italia",
  businnesClass: false,
  upgrade: function () {
    if(this.businnesClass === false){
      this.businnesClass = true;
    }else{
      console.log("Your ticket is already business class!");
    }
  }
};

const returnTripTicket = {
  name: "Maria",
  from: "Italia",
  to: "Brazil",
  businnesClass: false,
  leaveTime: "12:00",
  arriveTime: "16:00",
  flightTime: function() {
    const leaveHour = parseInt(this.leaveTime.split(":")[0]);
    const arriveHour = parseInt(this.arriveTime.split(":")[0]);
    const duration = arriveHour - leaveHour;
    this.duration = `${duration}h`;
  }
};

returnTripTicket.flightTime(); // ✈️ Chama a função antes de exibir

console.log(departTripTicket);
console.log(returnTripTicket); // Agora inclui: duration: "4h"
