// 1.
// let a = parseInt(process.argv[2]);
// for (i = 1; i<=a; i++) {
//   console.log(i);
// }

// 2.
// for (i = 1; i <= a; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// 3.
// let reverse = 0;
// let num = 48453;
// let d;
// while (num != 0) {
//   reverse = reverse * 10 + d;
//   num = Math.floor(num / 10);
// }
// console.log(reverse);

// 1.
// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// 2.
// let i = 1;
// while(i<=100) {
// if(i % 2 == 0) {
// console.log(i);
// }
// i++;
// }

//Factorial of a number
// for(let i = 1; i <= 5; i++) {
//     fac *= i;
// }
// console.log(fac);

for(let i = 1; i <=100; i++){
    if(i%3==0){
        console.log("Hello");
    }
    else if(i%5==0){
        console.log("World");
    }
    else if(i%15==0){
        console.log("HelloWorld");
    }
    else{
        console.log(i);
    }
}  
