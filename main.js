/*
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3(instead of 2) numbers of the sequence to generate the next.And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input(AKA signature), we have this sequence:

[1, 1, 1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature ? As starting with [0, 1] instead of[1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array / list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non - negative number; if n == 0, then return an empty array(except in C return NULL) and be ready for anything else which is not clearly specified;)
*/
//duhet me e bo ni array of number that will be initally entered in the function
//duhet me bo ni array of numbers that will be 'pushed' into the array
//the fuction should calculate the last three numbers of the array and put a forth number, then again calvualte the last three numbers

// function tribonacci(n, x, y) {
//   let sum = ''
//   sum = n + x + y
//   return sum
// }
// let sum = ''
// n = Number(bonacci.pop(-1))
// x = Number(bonacci.pop(-1))
// y = Number(bonacci.pop(-1))

// sum = bonacci[0] + bonacci[1] + bonacci[2]
// sum = Number(bonacci.length - 3) + Number(bonacci.length - 1) + Number(bonacci.length - 2)
// (bonacci.length - 1) + (bonacci.length - 2) + (bonacci.length - 3)

let signature = [0, 0, 1];
let i;
function tribonacci(arr) {
  for (i = 3; i < 9; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3]
    if (arr[i] == 0 || arr[i] === 24) {
      ''
    } else {
      arr.push(i)
    }
  }
}
tribonacci(signature)
console.log(signature)

// bonacci.push(tribonacci(bonacci[0], bonacci[1], bonacci[2]))
// bonacci.push(tribonacci(bonacci[1], bonacci[2], bonacci[3]))
// bonacci.push(tribonacci(bonacci[2], bonacci[3], bonacci[4]))
// bonacci.push(tribonacci(bonacci[3], bonacci[4], bonacci[5]))



