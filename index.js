window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  const portal = document.getElementById("portal");
  const portalID = portal.dataset.portalid;
  const rooms = ["moon", "sun", "star", "cloud", "satellite"];
  const room = portalID ? portalID : rooms[getRandomInt(0,rooms.length)];
  const chWidth = room.length * 7;
  const chHeight = 15;

  function initialize() {
    for (let i = 0; i < window.innerWidth; i+=chWidth) {
      for (let j = 0; j < window.innerHeight; j+=chHeight) {
        container.innerHTML += `&nbsp;${room}&nbsp;`;
      }
    }
    rooms.pop(room);
    portal.innerText = rooms[getRandomInt(0,rooms.length)];
    portal.onclick = (e) => {
      e.preventDefault();
      console.log("clicked", portal.innerText)
      const text = `<!doctypehtml><title>text adventure</title><meta charset=utf-8><meta content="width=device-width,initial-scale=1"name=viewport><link href=https://iguannalin.github.io/text-adventure/index.css rel=stylesheet><script src=https://iguannalin.github.io/text-adventure/index.js></script><div id=container></div><div id=overlay><a data-portalid=${portal.innerText} id=portal></a></div>`;
      const blob = new Blob([text], {type: "text/html"});
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, '_self');
      window.URL.revokeObjectURL(blobUrl);
    }
  }
  initialize();
});