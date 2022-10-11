//Print the sum of all the multiples of 3 from 0 to the given limit
let i=0;
let m=30;
sum=0;
while (i<=m) {
  if(i%3==0) {
    sum+=i;
  }
  i++;
}
console.log(sum);