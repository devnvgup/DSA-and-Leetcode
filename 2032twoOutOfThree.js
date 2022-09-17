var twoOutOfThree = function(nums1, nums2, nums3) {
    let merge=[...nums1,...nums2,...nums3]
    let removeDuplicate=[...new Set(merge)]
    let res=[]
    for(let i=0;i<removeDuplicate.length;i++){
        if(nums1.includes(removeDuplicate[i])&&nums2.includes(removeDuplicate[i])
        ||nums1.includes(removeDuplicate[i])&&nums3.includes(removeDuplicate[i])
        ||nums2.includes(removeDuplicate[i])&&nums3.includes(removeDuplicate[i])){
            res.push(removeDuplicate[i])
        }
    }
    return res
};

const nums1 = [1,1,3,2]
const nums2 = [2,3]
const nums3 = [3]

console.log(twoOutOfThree(nums1,nums2,nums3))


//solutuion 2
const twoOutOfThree = function(nums1, nums2, nums3) {
	const nums1Set = new Set(nums1)
	const nums2Set = new Set(nums2)
	const nums3Set = new Set(nums3)

	let res = []

	for (let num of nums1Set) {
		if (nums2Set.has(num) || nums3Set.has(num)) {
			res.push(num)
		}
	}

	for (let num of nums2Set) {
		if (nums1Set.has(num) || nums3Set.has(num)) {
			res.push(num)
		}
	}

	return Array.from(new Set(res))
};

//solution 3 hashmap


function twoOutOfThree(nums1, nums2, nums3) {
    const hashObj = {};
    const combinedArr = [].concat(
        ...new Set(nums1),
        ...new Set(nums2),
        ...new Set(nums3)
    );
    
    for (let i = 0; i < combinedArr.length; i++) {
        if (hashObj[combinedArr[i]]) {
            hashObj[combinedArr[i]] += 1;
        } else {
            hashObj[combinedArr[i]] = 1;
        }
    }
    
    return Object.keys(hashObj)
        .filter((num) => hashObj[num] > 1)
        .map((num) => parseInt(num), 10);
};