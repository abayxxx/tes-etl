const arr = [
  1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11, 13, 12, 14, 15, 16, 17, 18, 19, 20,
];

const firstArr = arr.slice(0, 10);
const secondArr = arr.slice(10, 20);

firstArr.forEach((element, index) => {
  if (index < 5) {
    console.log(
      `${element} -> ${arr[firstArr.length - index - 1]} -> ${element}`
    );
  }
});

secondArr.forEach((element, index) => {
  if (index < 5) {
    console.log(
      `${element} -> ${arr[arr.length - index - 1]} -> ${
        firstArr[firstArr.length - index - 1]
      }`
    );
  }
});
