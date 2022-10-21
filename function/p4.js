//Write a function to check if the char is a small case or not.

let char="L";
function smallercase(char){ 
  x=false;
  let str="qwertyuiopasdfghjklzxcvbnm";
  for(let i=0;i<str.length;i++){
    if(char==str[i]){
      x=true;
      break;
    }
  }
  return x
}
let y=smallercase(char);
if(y==true){
  console.log(char,"- is smaller case");
}else{
  console.log(char,"- is not smaller case");
}