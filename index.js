// Create one function with zero parameter having a console statement;

function fun1(){
    console.log("This is a function with zero parameter");
}
fun1();


// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function sum(x,y){
    console.log(`${x} + ${y} = ${x+y}`);
}
sum(3,4);


// Create one arrow function
var val = () => {
    let x = 10;
    console.log(x);
}
val();//10


// "Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();//undefined



// "Print output: 

boy ();
var y = 21;
console.log(y)//21
function boy() {
    console.log(y);//undefined
    var y = 20;
};


//Print output

// var z = 21;
// a();
// b();
// console.log(a);
// a = function() {  
    
//     z = 20;
//     console.log(z);//20
// };
// b = function() {
    
//     z = 40;
//     console.log(z);
// };
// a and b is not defined  



// Write a function that accepts parameter n and returns factorial of n
let j=1;
function fact(n) {
    for(let i = 1; i <= n; i++){
        if(n==0){
            return 1;
        }
        else{
            j = j*i;
        }
    }
        return j;
}
console.log("Factorial of n is",fact(5));//120