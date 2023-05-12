// let a = 0;

// function divider(n) {
//   for (let m = 0; m < n; m++) {
//     if (parseInt(n / m) == n % m) {
//       sum = sum + 1;
//     }
//   }
//   console.log(a);
// }

// divider(5);



// const Arr1 = [6, 4, 15, 19, 21, 25, 29, 0, 12];
// const Arr2 = [2, 12, 6, 8, 4, 0];
// const Arr3 = [];

// for (let i = 0; i < Arr1.length; i++) {
//   let find = false;

//   for (let j = 0; j < Arr2.length; j++) {
//     if (Arr1[i] == Arr2[j]) {
//       find = true;
//       break;
//     }
//   }

//   if (find == false) {
//     Arr3.push(Arr1[i]);
//   }
// }

// console.log(Arr3);



// function strength(eded, quvvet) {
//   let netice = 1;
//   for (let i = 0; i < quvvet; i++) {
//     netice = eded * netice;
//   }
//   console.log(netice);
// }

// strength(7, 3);



// let cut = 0;
// let tek = 0;

// function difference(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//       cut = cut + 0;
//     } else if (arr[i] % 2 == 0) {
//       cut = cut + 1;
//     } else {
//       tek = tek + 1;
//     }
//   }
//   console.log(cut - tek);
// }

// difference([1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 14, 18, 0]);


// let digits = 0;
// let other = 0;

// function difference(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] / 100 >= 1 && arr[i]/100 < 10 ) {
//       ucReqemli = ucReqemli + arr[i];
//     } else {
//       diger = diger + arr[i];
//     }
//   }
//   console.log(digits - other);
// }

// difference([ 200, 300, 5340]);


// let reversedArray = [];

// function reverseArr(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArray.push(arr[i]);
//   }
//   console.log(reversedArray);
// }

// reverseArr([10, 45, 32, 48, 72]);


// function findSame(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] == arr2[j]) {
//         console.log(arr1[i]);
//       }
//     }
//   }
// }

// findSame([6, 4, 15, 19, 21, 25, 29, 0, 12], [2, 12, 6, 8, 4, 0] )