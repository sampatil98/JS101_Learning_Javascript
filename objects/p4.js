// Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total
// Sample Output
// V-Prateek-90
// VI-Albert-90
// VII-Sandhya-90


let arr=[
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]
for(let i=0;i<arr.length;i++){
  for(let k=0;k<students.length;k++){
    let bag=0;
    for(let j=0;j<marks.length;j++){
      bag+=marks[j];
    }
    students.marks=bag;
  }
}
console.log(arr);
  