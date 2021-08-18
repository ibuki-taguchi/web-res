const age = 20;
const member = false;

console.log(1 + age);

if (age <= 15) {
  document.write("チケットの値段は800円");
} else if (member) {
  document.write("チケットの値段は1000円");
} else {
  let changeColor = document.getElementsByClassName("test");
  console.log(changeColor[1]);
  changeColor[0].style.color = "green";
  changeColor[1].style.color = "green";
  document.write("チケットの値段は1800円");
}
