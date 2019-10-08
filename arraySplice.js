function splitArray(arr, limit) {    
    var newArray = [];
    for(i=0;i<arr.length;i++) {
        let splicedArray = arr.splice(arr, limit);
        newArray.push(splicedArray);
    }
    if(arr.length)
    newArray.push(arr);
    return newArray;
}

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var result = splitArray(fruits, 2)
console.log(result);
