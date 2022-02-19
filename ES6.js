// ecma script 6
function getSum(num1, num2 = 0) {
    return num1 + num2;
}
// console.log(getSum(23));
const role = 23;
const friends = `
    ms mahi ${role} khan
    mr dhoni 
    fateh ali khan ${role}
`;
// console.log(friends)
const fName = 'khanna';
const fullName = name => name + ' ' + 'foqira';
// console.log(fullName(fName));
const bigarrow = (num, num2, num3) => {
    const multiple = num * 3;
    const pluse = num2 + num3;
    const total = multiple - pluse;
    return total;
}
// console.log(bigarrow(24, 23, 32));

const numbers = [32, 3, 32, 23, 23, 23, 32];
const numbers1 = [...numbers];
console.log(numbers1.sort(function (x, y) {
    return x - y;
}))