/**
 * userList.js
 */
console.log('userList.js')

let str = `[{"id":1,"first_name":"Jami","last_name":"Morrice","email":"jmorrice0@wix.com","gender":"Female","salary":2440},
{"id":2,"first_name":"Clyve","last_name":"Weyman","email":"cweyman1@weibo.com","gender":"Male","salary":3457},
{"id":3,"first_name":"Edgard","last_name":"Rogerot","email":"erogerot2@blogger.com","gender":"Male","salary":1909},
{"id":4,"first_name":"Cristen","last_name":"Redihalgh","email":"credihalgh3@accuweather.com","gender":"Female","salary":3630},
{"id":5,"first_name":"Fredrick","last_name":"O' Mullane","email":"fomullane4@csmonitor.com","gender":"Male","salary":1492},
{"id":6,"first_name":"Frazer","last_name":"Pattullo","email":"fpattullo5@ustream.tv","gender":"Male","salary":2295},
{"id":7,"first_name":"Bev","last_name":"Clear","email":"bclear6@wikimedia.org","gender":"Male","salary":1306},
{"id":8,"first_name":"Tulley","last_name":"Dietzler","email":"tdietzler7@ning.com","gender":"Male","salary":2797},
{"id":9,"first_name":"Cece","last_name":"Pozer","email":"cpozer8@xrea.com","gender":"Male","salary":3169},
{"id":10,"first_name":"Loutitia","last_name":"Baseke","email":"lbaseke9@ovh.net","gender":"Female","salary":3107},
{"id":11,"first_name":"Welbie","last_name":"Lewinton","email":"wlewintona@scientificamerican.com","gender":"Male","salary":1714},
{"id":12,"first_name":"Delano","last_name":"Samber","email":"dsamberb@arizona.edu","gender":"Male","salary":2236},
{"id":13,"first_name":"Selestina","last_name":"Spalton","email":"sspaltonc@exblog.jp","gender":"Female","salary":3356},
{"id":14,"first_name":"Lancelot","last_name":"Laurens","email":"llaurensd@weibo.com","gender":"Male","salary":1307},
{"id":15,"first_name":"Con","last_name":"Blencoe","email":"cblencoee@google.pl","gender":"Female","salary":1903}]`

let json = JSON.parse(str); // 문자열 -> object로 변환.
console.log(json);

document.addEventListener('DOMContentLoaded', function(e) {
	document.querySelector('#name').value = '홍길동';
	
	// thead 생성.
	let title = json[0];
	let tr = document.createElement('tr');
	for (let prop in title) {
		console.log(title);
		let th = document.createElement('th');
		th.innerText = prop;
		tr.appendChild(th);
	}
	document.querySelector('#tableList thead').appendChild(tr);

	// tbody 영역.
	json.forEach(function(item, idx) {
		console.log(item, idx); // item => {}
		
		if (idx < 10) { // 최초 10건만 출력
			let tr = makeRow(item);
			document.querySelector('#tableList tbody').appendChild(tr);
		}
		
		/*let tr = document.createElement('tr');
		for (let prop in item) {
			let td = document.createElement('td');
			td.innerText = item[prop];
			tr.appendChild(td);
		}
		document.querySelector('#tableList tbody').appendChild(tr);*/
	});
	
	// change이벤트 처리
	document.querySelector('#genderList').addEventListener('change', aaa);
	function aaa(e) {
		// showList(this.value);
		// filterList(this.value);
		reduceList(this.value); // 기능들은 다 같음
	}

}) // end of DOMContentLoaded.

// 한건 처리
function makeRow(obj ={}) { // obj ={} 는 초기값을 설정하는거임
	let tr = document.createElement('tr');
	for (let prop in obj) {
		let td = document.createElement('td');
		td.innerText = obj[prop];
		tr.appendChild(td);
	}
	return tr;
}

// 성별에 따른 목록출력.
function showList(gender = 'Male') { // 초기값이 Male로 설정된거임
	document.querySelector('tbody').innerHTML = '';	// 목록 초기화
		
	json.forEach(function(item) {
		if (item.gender == gender || gender == 'All') {
			document.querySelector('tbody').appendChild(makeRow(item))
		}
	})
}


