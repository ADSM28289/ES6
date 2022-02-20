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
// console.log(numbers1.sort(function (x, y) {
//     return x - y;
// }))

function min(num) {
    return Math.min(num);
};
// const a = 1;
// const { x, y } = { x: 2, y2: 4 };
// // console.log('is', y);
// const nums = [1, 2, 3, 4, 5];
// let output = nums.filter(n => n % 2);
// const friends2 = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];
// // friends2.filter(friend => friends2.length == 5);
// const find = friends2.find(friend => friend.length == 5);
// const person = [{ singer: 'Atif aslam', address: '23 something street' }]
// const player = { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38 };
// new class Teacher {tname: 'yoyou';}
// const players = [
//     { name: { firstName: "Shakib", lastName: "Hasan" }, age: 34 },
//     { name: { firstName: "Tamim", lastName: "Iqbal" }, age: 32 },
//     { name: { firstName: "Mahmudullah", lastName: "Riyad" }, age: 36 },
//     { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38 },
// ];

// const u = players.map((name) => player.name.firstName);
// console.log(u);
// console.log(person[0].address);