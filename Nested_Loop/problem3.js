//Print a box patterns using *

let n=10;
for (let i=1;i<=n;i++){
  let str="";
  for(let j=1;j<=n;j++){
    if (i==1 || i==n){
      str+="*";
    }else if(j==1 || j==n){
      str+="*";
    }else{
      str+=" ";
    }
  }
  console.log(str);
}