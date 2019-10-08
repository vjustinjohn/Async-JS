var A = [3,1,2,4,1];
var B = [1,4];

var C= [];
A.forEach(function (value){
    B.forEach(function (secondValue){
        if(value === secondValue) {
            if(!C.includes(value))
            C.push(value);
        }
    })
})
console.log(C);

var clone = C.slice(0);

console.log(clone);

var D= [];
A.forEach(function (value){
    if(!B.includes(value) && !D.includes(value))
        D.push(value);
    
})
console.log(D);
