var plist = [
{	name:'a',priority:['d0','d1','d2','d3']},
	{ name:'b',priority:['d3','d2','d1','d0']},
	{name:'c',priority:['d2','d0','d1','d3']},
	{name:'d',priority:['d1','d3','d0','d2']}
]
var drivers = [
	{name:'d0',priority:['a','c','d','b']},
	{name:'d1',priority:['b','a','c','d']},
	{name:'d2',priority:['a','c','b','d']},
	{name:'d3',priority:['d','a','b','c']}
]
var arr = [];
for (let i = 0; i<plist.length;i++)

{
	
	obj.pName = plist[i].name;

	

	for (let j =0;j<drivers.length;j++){
	
		let dName = drivers[j].name;
		
		let avg = (drivers[j].priority.indexOf(plist[i].name) + plist[i].priority.indexOf(drivers[j].name))/2;
		let object = new obj(plist[i].name,drivers[j].name, avg);
		arr.push(object);

	}
}
function obj(pname, dname, priorityAvg) {
     this.pname = pname;
     this.dname = dname;
     this.priorityAvg = priorityAvg;
 }
 // console.log(arr.length);
let arr1 =[];
function compare(a,b) {
  if (a.priorityAvg < b.priorityAvg)
    return -1;
  if (a.priorityAvg > b.priorityAvg)
    return 1;
  return 0;
}
arr.sort(compare);
arr1 = [];
var pname = [];

var dname = [];
var object = new obj(arr[0].pname,arr[0].dname,arr[0].priorityAvg);
pname.push(object.pname);
dname.push(object.dname);
arr1.push(object);
for (let i=1;i<arr.length;i++){
	let temp = arr[i].pname;
	let tempd = arr[i].dname;
	let val = arr[i].priorityAvg;
	var object = new obj(temp,tempd,val);


	if (pname.includes(object.pname)){

	}
	else if (dname.includes(object.dname)){

	}
	else{
		pname.push(object.pname);
		dname.push(object.dname);
		arr1.push(object);
	}

	// for(i = 0;i<arr1.length;i++){
	// 	if (object.pname == arr1[i].pname){
	// 		break;
	// 	}
	// 	else if (object.dname == arr1[i].dname){
	// 		break;
	// 	}
	// 	else{
	// 		arr1.push(object);
	// 	}
	// }
}
console.log(arr1);
// for(let i =0;i<arr.length;i++){
// 	let temp = arr[i].pname;
// 	let temp1 = arr[i].dname;
// 	let min = arr[i].priorityAvg
// 	console.log(arr[i]);
// 	let arr2 = arr;
// 	for (let j =i+1 ; j<arr2.length;j++){
// 		// console.log(j);
// 		// console.log(arr[j]);
// 		if ((arr2[j].pname == temp || arr2[j].dname == temp1) && min>arr2[j].priorityAvg){
// 				min = arr2[j];
// 				temp = arr2[j].pname;
// 				temp1 = arr2[j].dname;
// 				console.log('entered ah ?');

// 		}
// 		}
// 		var object = new obj(temp,temp1,min);
// 		for(i=0;i<arr1.length;i++){
// 			console.log('came here?')
// 		if(arr1[i] != object){
// 		arr1.push(object);
// 	}
// 	}
		

// }
// console.log(arr1);