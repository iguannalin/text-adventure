window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  const portal = document.getElementById("portal");
  const rooms = ["moon", "sun", "star", "cloud", "satellite"];
  const room = rooms[getRandomInt(0,rooms.length)];
  const chWidth = room.length * 9;
  const chHeight = 19.5;

  function initialize() {
    for (let i = 0; i < window.innerWidth; i+=chWidth) {
      for (let j = 0; j < window.innerHeight; j+=chHeight) {
        container.innerHTML += `&nbsp;${room}&nbsp;`;
      }
    }
    portal.innerText = rooms[getRandomInt(0,rooms.length)];
  }
  initialize();
});