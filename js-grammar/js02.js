for (let i = 1; i <= 100000; i++) {
  if (i % 3 === 0 && i % 15 !== 0) {
    document.writeln("Fizz" + " ");
  } else if (i % 5 === 0 && i % 15 !== 0) {
    document.writeln("Buzz" + " ");
  } else if (i % 15 === 0) {
    document.writeln("FuzzBuzz" + " " + "<br>");
  } else {
    document.write(i + " ");
  }
}
