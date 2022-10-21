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
for(let k=0;k<arr.length;k++){
    let arr1=[];
    for(let j=0;j<arr[k].students.length;j++){
        let sum=0;
        for (let i=0;i<arr[k].students[j].marks.length;i++){
            sum+=arr[k].students[j].marks[i];
        }
        arr1.push(sum);
    }
        if(arr1[0]>arr1[1]){
            console.log(arr[k].grade+"-"+arr[k].students[0].name+"-"+arr1[0]);
        }else{
            console.log(arr[k].grade+"-"+arr[k].students[1].name+"-"+arr1[1]);
        }
}