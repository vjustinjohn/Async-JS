for(i=0;i<5;i++) {
    let k =i;
  setTimeout(function(){
    console.log(k);
  },0);
}

for(i=0;i<5;i++) {
    (function(i) {
        setTimeout(function(){
            console.log(i);
        },0);
    })(i)
}


for(i=0;i<5;i++) {
    setTimeout(function(){
        console.log(i);
    },0);
}