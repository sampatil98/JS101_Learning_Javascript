//Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
// NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value
function difference(a,b){
  x=a-b;
  return x
}
function absoluteValue(num){
  if(num<0){
    z=num*(-1);
    return z
  }else{
    return num
  }
}
let a=12;
let b=4;
let num=difference(a,b);
console.log(absoluteValue(num));