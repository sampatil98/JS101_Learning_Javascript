// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

function convert(str){
  let bag="";
  let lower="qwertyuiopasdfghjklzxcvbnm";
  let upper="QWERTYUIOPASDFGHJKLZXCVBNM";
  for(let i=0;i<str.length;i++){
    for(let j=0;j<lower.length;j++){
      if(str[i]==upper[j]){
        bag+=lower[j];
        break;
      }
    }
  }
  return bag
}
let arr=["SAM","OMKAR","ADARSH","PRADIP"];
let new_arr=[];
for(let i=0;i<arr.length;i++){
  let x=convert(arr[i]);
  new_arr.push(x);
}
console.log(new_arr);