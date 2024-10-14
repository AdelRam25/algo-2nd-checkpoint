const numbers = [ 2, 5, 10, 42, 13, 22, 8]

let sort = (arr) => {
    for (let  i = 1; i < arr.length; i++) {
      let current = arr[i]
      let j
      for (j = i - 1; j >= 0 && arr[j] > current; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = current
    }
    return arr
  }
  console.log(sort(numbers))

    // for (let number of numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if( numbers[i] > numbers[i+1]) {
//          let swap = numbers[i]
//           numbers[i] = numbers[i+1] 
//          numbers[i+1] = swap
//         }
//      }
// }
// console.log(numbers)



// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] == '13') {
//         console.log(i)
//     }
// }