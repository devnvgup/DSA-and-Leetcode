let arr = [1, 6, 4, 5, 7, 8, 9];

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let pointValue=arr[i]
        let j=i-1
        while(j>=0&&pointValue<arr[j]){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=pointValue
    }
    return arr
}

console.log(insertionSort(arr))