
const batteries = [4, 5, 3, 4, 4, 6, 5]; 

const n = batteries.length;

const totalBatteries = batteries.reduce((sum, batch) => sum + batch, 0);

console.log("Number of batches:", n);
console.log("Total batteries:", totalBatteries);


// Code your solution here

const products = [
    { name: "Shampoo", price: 4.99 },
    { name: "Donuts", price: 7.99 },
    { name: "Cookies", price: 6.49 },
    { name: "Bath Gel", price: 13.99 },
  ];
  console.log(products)

  function getTotalAmountForProducts(products) {
    let totalPrice = 0;
  
    for (const product of products) {
      totalPrice += product.price;
    }
  
    return totalPrice;
  }
  
  console.log(getTotalAmountForProducts(products));
  getTotalAmountForProducts(products)


  const couponLocations = [
    { room: "Living room", amount: 5 },
    { room: "Kitchen", amount: 2 },
    { room: "Bathroom", amount: 1 },
    { room: "Master bedroom", amount: 7 },
  ];
  
  function ourReduce(arr, reducer, init) {
    let accum = init;
    for (const element of arr) {
      accum = reducer(accum, element);
    }
    return accum;
  }
  
  function couponCounter(totalAmount, location) {
    return totalAmount + location.amount;
  }
  
  console.log(ourReduce(couponLocations, couponCounter, 0)); 
  ourReduce(couponLocations, couponCounter, 0)

  console.log(ourReduce(couponLocations, couponCounter, 3));
  ourReduce(couponLocations, couponCounter, 3)

  const doubledAndSummed = [1, 2, 3].reduce(function (accumulator, element) {
    return element * 2 + accumulator;
  }, 0);
  console.log(doubledAndSummed)


  const doubledAndSummedFromTen = [1, 2, 3].reduce(function (
    accumulator,
    element
  ) {
    return element * 2 + accumulator;
  },
  10);
  console.log(doubledAndSummedFromTen)

  const letters = ["a", "b", "c", "b", "a", "a"];

const lettersCount = letters.reduce(function (countObj, currentLetter) {
  if (currentLetter in countObj) {
    countObj[currentLetter]++;
  } else {
    countObj[currentLetter] = 1;
  }
  return countObj;
}, {});

console.log(lettersCount);