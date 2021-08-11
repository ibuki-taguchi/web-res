let classes = ["A組", "B組", "C組", "D組"];

for (let grade = 1; grade < 4; grade++) {
  for (let i = 0; i < classes.length; i++) {
    document.write(grade + "年" + classes[i] + "<br>");
  }
}
let a = ["あ", "い", "う", "え", "お"];
let ka = ["か", "き", "く", "け", "こ"];

for (let anum = 0; anum < a.length; anum++) {
  for (let kanum = 0; kanum < ka.length; kanum++) {
    document.write(a[anum] + ka[kanum] + "<br>");
    document.write(ka[kanum] + a[anum] + "<br>");
  }
}

/*
comment
*/

// comment
