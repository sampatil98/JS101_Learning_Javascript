//Print the Calendar date in the below format
//day-month
let day=0;
for(let i=1;i<=12;i++){
  if(i==2){
    day=28;
  }else if(i==4 || i==6 || i==9 || i==11){
    day=30;
  }else{
    day=31;
  }
  for(let j=1;j<=day;j++){
    console.log(j,"-",i);
    
  }
}