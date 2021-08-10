let game = {
  startTime: null,
  displayAArea: document.getElementById("displayArea"),
  start: function start() {
    game.startTime = new Date();
    document.body.onkeydown = game.stop;
    console.log("スタートしました");
    console.log(game.startTime);
  },
  stop: function stop() {
    let currentTime = new Date();
    let seconds = (currentTime - game.startTime) / 1000;
    if (9.5 <= seconds && seconds <= 10.5) {
      game.displayAArea.innerText = seconds + "秒でした。すごい。";
    } else {
      game.displayAArea.innerText = seconds + "秒でした。残念。";
    }
  },
};

if (confirm("OKを押して10秒だと思ったら何かキーを押してください")) {
  game.start();
}
