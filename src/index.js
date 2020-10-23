module.exports = function reverse (n) {
    let numb = Math.abs(n).toString().split('').reverse().join('');
    return  Number(numb);
}
