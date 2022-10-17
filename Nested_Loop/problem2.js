//Print Prime Numbers from 1 to given limit
let n=100;
for (let i=1;i<=n;i++)
{
  let count_prime=0;
  for(let j=1;j<=i;j++)
  {
    if(i%j==0)
    {
      count_prime++
    }
  }
  if(count_prime==2)
  {
    console.log(i);
  }
}