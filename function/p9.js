// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

function Sum_arr(arr){
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum
}
let arr=[8,8,8,8,8,8,8];
console.log(Sum_arr(arr)/arr.length);