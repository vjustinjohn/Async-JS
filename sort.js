var A = [3,1,8,2,4,7,6,11,9];
var B = A.slice(0);
var C = A.slice(0);

A.forEach(function(value){
    B.forEach(function(subValue){
        if(value < subValue) {
            let value1 = C[C.indexOf(value)];
            C[C.indexOf(value)] = C[C.indexOf(subValue)];
            C[C.indexOf(subValue)] = value1;
        }
    })
});

var length = A.length

for(i=0;i<length;i++) {
    for(j=0;j<length-i;j++){
        console.log(A[j]);
        console.log(A[j+1]);
        if(A[j] > A[j+1]) {
            let temp = A[j];
            A[j] = A[j+1];
            A[j+1] = temp;
        }
    }
}

console.log(A);
//A = 5
//B = 2
//A = A + B 7
//B = A - B 7 - 2 = 5
//A = A - B 7 - 5 = 2