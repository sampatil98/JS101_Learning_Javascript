//Use the above function to print the Primes from 2 to a given limit
function primeno(num){
  let count=0;
  for(let i=1;i<=num;i++){
    if(num%i==0){
      count++;
    }
  }
  if(count==2){
      return true
    }else{
      return false
    }
}
num=20;
for(let i=2;i<=num;i++){
  let x=primeno(i);
  if(x==true){
    console.log(i,"is prime number");
  }
}
