//Given an array of string count the overall total number of characters
let arr = ["hello","friends","how","are","you"];
let char=0;
for(let i=0;i<arr.length;i++){
  char=char+arr[i].length;
}
console.log("total number of characters = ",char);
