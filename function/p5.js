//Write a function to replace spaces in a given string with - .
function convert(str){ 
  let bag="";
  for(let i=0;i<str.length;i++){
    if(str[i]==" "){
      bag+="-";
    }else{
      bag+=str[i];
    }
  }
  console.log(bag);
}
convert("hello i am sam patil 1998");