
let userNum = prompt("Enter your number: ");
let newArr = [];

for(let i= 1 ;i<=userNum;i++){
//  newArr.push(i);
newArr[i-1] = i;
}

let sumArr = newArr.reduce((prev,curr)=>{
    return prev + curr;
})

let multArr = newArr.reduce((prev,curr)=>{
    return prev * curr;
})

console.log(newArr);
console.log(sumArr);
console.log(multArr);
