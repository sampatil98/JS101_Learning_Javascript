//Given a string count the number of words in that string
let str = "hello friends how are you"
let words=0;
for(let i=0;i<=str.length;i++){
  if(str[i]==" "){
    words++;
  }
}
console.log(words+1);