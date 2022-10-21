// check the given number is prime or not using function.
function primeno(a){
  let count=0;
  for(let i=1;i<=a;i++){
    if(a%i==0){
      count++;
    }
  }
  if(count==2){
    console.log(a," is prime number");
  }else{
    console.log(a," is not a prime number");
  }
  
}
num=93;
primeno(num);

