window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  const rooms = ["moon", "sun", "star", "cloud", "satellite"];
  const chWidth = 24;
  const chHeight = 24;

  function initialize() {
    const room = rooms[getRandomInt(0,rooms.length)];
    console.log({room});

    for (let i = 0; i < window.innerWidth; i+=chWidth) {
      for (let j = 0; j < window.innerHeight; j+=chHeight) {
        container.innerHTML += `&nbsp;${room}&nbsp;`;
      }
    }
  }

  initialize();
});