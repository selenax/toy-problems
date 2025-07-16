let arr = [
	'cherry',
	'apple',
	'banana',
	'apple',
	'apple',
	'cherry',
	'cherry',
	'banana',
]; //banana=2, cherry=3, apple=3
let result = ['banana', 'cherry', 'apple'];

// sort occurence by increasing order
// if same occurence, sort by alphabet by decreasing order

// small to big
// then big to small

// ! STUDY !
/*
> 0	sort b before a
< 0	sort a before b

ascending
a < b ? -1 : 1

descending
a < b ? 1 : -1
*/

const sortList = (arr) => {
	const hash = {};
	const result = [];

	for (let key of arr) {
		hash[key] = ++hash[key] || 1;
	}

	for (let [key, value] in hash) {
		console.log(value);
	}

	//create hash to count occurence

	//sort hash by key, small to big
	//if keys are same, sort by alphabet by big to small
};

// function sortList(arr) {
//   let result = [];
//   let hash = {};

//   for(let x of arr) {
//     hash[x] = ++hash[x] || 1;
//   }

//   for(let [key, value] of Object.entries(hash).sort(sortItem)) {
//     result.push(key)
//   }
//   return result;
// }
console.log(sortList(arr));

// function sortItem(a,b) {
//   if(a[1] === b[1]) {
//     // if return > 0, sort b before a
//     return a[0] < b[0] ? 1 : -1;
//     } else {
//       // if return < 0, sort a before b
//       return a[1] < b[1] ? -1 : 1;
//     }
// }

// console.log(JSON.stringify(sortList(arr)) === JSON.stringify(result));
// console.log(Array.isArray(sortList(arr)) == true);
