let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let value = 2;

function binarySearch(arr, value, start = 0, end = arr.length - 1) {
  let mid = Math.floor((end + start) / 2);
  switch (true) {
    case arr[mid] === value:
      return mid;
    case start === end:
      return false;
    case arr[mid] > value:
      return binarySearch(arr, value, start, mid - 1);
    case arr[mid] < value:
      return binarySearch(arr, value, mid + 1, end);
  }
}

console.log(binarySearch(arr, value));
