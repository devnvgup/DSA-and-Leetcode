var reverseStr = function (s, k) {
    const arrayString = s.split('');

    if (!Math.floor(s.length / k)) return arrayString.reverse().join('');

    const unit = Math.floor(s.length / (2 * k));

    for (let i = 0; i <= unit; i++) {
        const unitString = arrayString.slice(i * 2 * k, i * 2 * k + k);
        arrayString.splice(i * 2 * k, k, ...unitString.reverse());
    }

    return arrayString.join('');
};
let s = "abcdefg", k = 2
console.log(reverseStr(s, k))

