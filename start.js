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

let fun = () => {
    console.log('sdsa');
};
fun();
out[1]();
out[2]();
out[3]();

let btn = document.getElementById('btn');

let Ia = {
    num: 10,
func: function() {
    let at = ()=>{
        console.log(this);
    };
 at();
}
};
//Ia.func();
let olddiv = document.getElementById("olddiv"); console.log(olddiv);
//let new_div = document.createElement("div");
//old_div.appendChild(new_div);



