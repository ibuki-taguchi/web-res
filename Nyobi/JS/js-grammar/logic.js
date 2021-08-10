let age = 15;
let isMember = true;
let result = null;

if (age <= 15) {
  result = "値段は800円";
} else if (isMember) {
  result = "値段は1000円";
} else {
  result = "値段は1800円";
}

document.write(result);
