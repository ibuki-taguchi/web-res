let myBirthTime = new Date(1998, 12 - 1, 9);
function updateParagraph() {
  let now = new Date();
  let seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
  document.getElementById("birth-time").innerText =
    "生まれてから" + seconds + "秒経過。";
}

setInterval(updateParagraph, 50);

function areaOfCircle(hankei) {
  let menseki = hankei * hankei * 3.14;
  return menseki;
}

document.write(areaOfCircle(5));
