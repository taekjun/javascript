/**
 * userService.js
 */
function filterList(gender = 'Male') {
	document.querySelector('tbody').innerHTML = '';
	
	json
	.filter(function(item) {
		return item.gender == gender || gender == 'All';	
	})
	.forEach(function(item) {
		document.querySelector('tbody').appendChild(makeRow(item));
	})
	// jAry.forEach()
}

function reduceList(gender = 'Female') {
	let tbody = document.querySelector('tbody');
	tbody.innerHTML = '';
	
	json.reduce((acc, item) => {
		if (item.gender == gender || gender == 'All') {
			acc.appendChild(makeRow(item));
		}
		return acc;
	}, tbody);
}

document.addEventListener('DOMContentLoaded', function(e){
	console.clear();
	console.log('userService.js');
	
	// forEach() => 반환값은 없음.
	let fAry = json.filter(function(item, idx, ary) {
		return item.salary > 3000; 
	}); // filter() => 새로운 배열 생성. A -> B
	
	// map() A-> A'
/*	let mAry = fAry.map((item, idx, ary) => {
		// item {id, fn, ln, email, salary} 기존배열fAry
		// item' {id, name, salary} mAry
		let obj = {id: item.id, 
		           name: item.first_name + '-' + item.last_name, 
		           salary: item.salary}
		return obj;
	});*/
	
	let mAry = fAry.map(item => {
	              return {id: item.id, 
	              		  name: item.first_name + '-' + item.last_name, 
	              		  salary: item.salary}
	               }); // 위에 표현과 같은 내용이다. 간략하게 줄인것.
	console.log(mAry);
	
	// reduce() => 새로운 값을 생성.
	// json.reduce();
	
	let result = [1,3,2,4,5].reduce((acc, item, idx, ary) => { // acc: 앞에 쓰인 item값이 다음값으로 쓰여진다
		console.log(acc, item, idx); 
		acc.push(item*2);
		return acc;
	}, []);
	
	result = json.reduce((acc, item, idx) => {
		if (item.gender == 'Male') {
			acc.push(item);
		};
		return acc;
	}, []);
	
	console.log(result);
}) // end of DOMContentLoaded