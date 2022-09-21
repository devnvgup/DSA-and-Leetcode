let arr = [1, 6, 4, 5, 7, 8, 9];

function mergeSort(arr, leftNode, rightNode) {
  if (leftNode > rightNode) return;
  if (leftNode === rightNode) return [arr[leftNode]];
  let midNode = Math.floor((leftNode + rightNode) / 2);
  let arr1 = mergeSort(arr, leftNode, midNode);
  let arr2 = mergeSort(arr, midNode + 1, rightNode);
  let res = merge(arr1, arr2);
  debugger
  return res;
}
function merge(arr1, arr2) {
  let totalLenght = arr1.length + arr2.length;
  let index = 0;
  let arr1Index = 0;
  let arr2Index = 0;
  let res = [];
  while (index < totalLenght) {
    if (arr1Index < arr1.length && arr2Index < arr2.length) {
      if (arr1[arr1Index] > arr2[arr2Index]) {
        res[index] = arr2[arr2Index];
        index++;
        arr2Index++;
      } else {
        res[index] = arr1[arr1Index];
        index++;
        arr1Index++;
      }
    } else {
      if (arr1Index < arr1.length) {
        res[index] = arr1[arr1Index];
        index++;
        arr1Index++;
      } else {
        res[index] = arr2[arr2Index];
        index++;
        arr2Index++;
      }
    }
  }
  return res;
}


console.log(mergeSort(arr,0,arr.length-1))
