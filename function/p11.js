// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block

function convert(str){
  let bag="";
  let upper="QWERTYUIOPASDFGHJKLZXCVBNM";
  let lower="qwertyuiopasdfghjklzxcvbnm";
  for(let i=0;i<str.length;i++){
    for(let j=0;j<lower.length;j++){
      if(str[i]==lower[j]){
        bag+=upper[j];
        break;
      }else if(str[i]==upper[j]){
          bag+=lower[j];
          break;
      }
    }
  }
  return bag
}
console.log(convert("Test"));