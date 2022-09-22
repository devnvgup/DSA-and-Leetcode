var merge = function (nums1, m, nums2, n) {
//   let i = m - 1;
//   let j = n - 1;
//   for (let k = m + n - 1; k >= 0; k--) {
//     if (j < 0) {
//       break;
//     }
//     if (nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i];
//       i -= 1;
//     } else {
//       nums1[k] = nums2[j];
//       j -= 1;
//     }
//   }
//   return nums1;
let i=m+n-1
let i1=m-1
let i2=n-1
while(i>=0){
    if(i1>=0&&i2>=0){
        if(nums1[i1]>nums2[i2]){
            nums1[i]=nums1[i1]
            i--
            i1--
        }else{
           nums1[i]=nums2[i2]
            i--
            i2--
        }
    }else{
        if(i1>=0){
            nums1[i]=nums1[i1]
            i--
            i1--
        }else{
            nums1[i]=nums2[i2]
            i--
            i2--
        }
    }
}
 return nums1
};
let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
console.log(merge(nums1, m, nums2, n));
