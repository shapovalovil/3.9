let d = "d", e = "e";

console.log(`привет, вывожу ${d} - это работает ${e}`);
function massArray(){
var items = [];

for (var i = 1;  i < 10; i++ ) {
  ( function (i) {
    var temp = function (){
        console.log(i);
    };
    items.push(temp);
    console.log(temp);
})(i);
    
}
    return items;    
};
var out =  massArray();
for (let iterator of out) {
    console.log(out);  
    
}
out[1]();
out[2]();
out[3]();
