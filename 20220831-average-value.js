//* Q1. 1~20 범위의 임의의 숫자 세개의 평균값이 10 이상이면 'over', 미만이면 'under' 을 출력
function averageCheck (x, y, z) {
  if(typeof(x === "number") && typeof(y === "number") && typeof(z === "number")) {
    if(x > 0 && x <= 20 && y > 0 && y <= 20 && z > 0 && z <= 20) {
      if( (x + y + z) / 3 >= 10) {
        console.log("over");
      } else if ((x + y + z) / 3 < 10) {
        console.log("under");
      } else {
        console.log("error");
      }
    } else (console.log("범위 안의 숫자를 입력하세요."))
  } else (console.log("타입을 확인하세요."))
}
averageCheck(15,8,20);

//* Q2. 1~20 범위 중 임의의 3개의 중복되지 않는 난수를 배열 inputData에 담기도록 처리
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(rand(1, 20));  // test
// console.log(rand(1, 20));  // test
// console.log(rand(1, 20));  // test

const inputData = [];
function randomNum(min, max, count) {
  for(i = 0; i < count; i++) {
    inputData.push(rand(min, max));
  }
}
randomNum(1, 20 , 3);
console.log(inputData);

//* Q3. 객체 objectData key(fist, second, third)에 inputData에서 얻은 값을 삽입
function Numbers(one, two, three) {
  if(typeof(one) === "number" 
    && typeof(two) === "number" 
    && typeof(three) === "number") {
    this.first = one;
    this.second = two;
    this.third = three;
  }
}

const objectData = new Numbers(inputData[0],inputData[1],inputData[2]);
console.log(objectData);

// function saveValue(array) {
//   const objectData = new Object();
//   for(let i = 0; i < array.length; i++) {
//     this.first = array[i];
//     this.second = array[i+1];
//     this.third = array[i+2];
//   }
//   console.log(objectData);
// }
// saveValue(inputData);

//* Q4. objecData에 담긴 세개의 난수 중 중앙값에 해당하는 값 출력
function median(array) {
  array = array.sort((a, b) => a - b);
  if (array.length %2 != 0) {
    if (array.length > 1) {
      array.pop();
      array.shift();
    }
    return array[0];
  } else {
    if(array.length > 2) {
      array.pop();
      array.shift();
    }
    return (array[0] + array[1]) /2;
  }
}
median(inputData);
console.log(median(inputData));