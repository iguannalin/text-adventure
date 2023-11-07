window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  const overlay = document.getElementById("overlay");
  const rooms = ["moon", "sun", "star", "cloud", "satellite"];
  const room = "sun"//rooms[getRandomInt(0,rooms.length)];
  console.log({room});
  const chWidth = room.length * 9;
  const chHeight = 19.5;
  const diameter = 25;
  const increment = 5;

  function initialize() {
    const centerW = Math.floor(window.innerWidth/2);
    const centerH = Math.floor(window.innerHeight/2);

    for (let i = 0; i < window.innerWidth; i+=chWidth) {
      for (let j = 0; j < window.innerHeight; j+=chHeight) {
        if (i >= (centerW-diameter) && i <= (centerW+diameter) 
          && j > (centerH-diameter) && j <= (centerH+diameter)) {
        console.log({i, j})
            // container.innerHTML += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
            container.innerHTML += `&nbsp;***&nbsp;`;
        }
        else {
          container.innerHTML += `&nbsp;${room}&nbsp;`;
        }
      }
    }
  }
  // container.innerHTML += `&nbsp;${room}&nbsp;`;
  initialize();
});