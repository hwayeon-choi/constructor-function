function numbers(one, two, three) {
  if(typeof(one) === "number" 
    && typeof(two) === "number" 
    && typeof(three) === "number") {
    this.first = one;
    this.second = two;
    this.third = three;
  }
}

const objectData = new numbers(10, 12, 13);
console.log(objectData);