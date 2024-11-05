"use strict";

function isEnoughCapacity(products, containerSize) {
    let totalProductsSpace = 0;
    for (const productSpace of Object.values(products)) {
        if (typeof productSpace != "number") {
            continue; // or f.e. throw new Error("Invalid product space argument ... (log)");
        }
        totalProductsSpace += productSpace;
    }
    return totalProductsSpace <= containerSize;
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false
