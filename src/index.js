let arr = [];
let a = [];
module.exports = function toReadable(number) {
    arr = [];
    a = String(number).split("");
    if (number == 0) {
        return "zero"
    }
    if (number < 100) {
        tousand(number)
    }
    if (number >= 100 && number <= 999) {
        arr.push(upToThousand[a[0]]);
        let b = a[1] + a[2]
        b = Number(b);
        a = [a[1], a[2]]
        tousand(b)
    }
    const newArr = function clear(arr) {
        console.log(arr)
        return arr.join(" ");
    }
    return newArr(arr);
}
function tousand(number) {
    if (number >= 1 && number <= 19) {
        arr.push(upToNineteen[number]);
    }
    if (number >= 20 && number <= 99) {
        if (a[1] == 0) {
            arr.push(upToHundred[a[0]]);
        } else {
            arr.push(upToHundred[a[0]]);
            arr.push(upToNineteen[a[1]]);
        }
    }
}
const upToNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const upToHundred = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const upToThousand = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];



