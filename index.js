// 1.
let a = parseInt(process.argv[2]);
for (i = 1; i<=a; i++) {
  console.log(i);
}

// 2.
for (i = 1; i <= a; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 3.
let reverse = 0;
let num = 48453;
let d;
while (num != 0) {
  reverse = reverse * 10 + d;
  num = Math.floor(num / 10);
}
console.log(reverse);
