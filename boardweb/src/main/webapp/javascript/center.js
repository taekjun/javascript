/**
 * center.js
 */
console.log('center.js');

let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=yReI6VOUDBfrdEXPOu5%2BtNH50AEpXG1MJH%2BcgBxdVOOF0lgMencj0fGnGAk4NVv6BKsM9ZkHutFJAwB381kAIw%3D%3D'
let showFields = ['id', 'centerName', 'phoneNumber', 'sido'];
let tbody = document.querySelector('#list');
let centerList = [];
let searchSido = document.querySelector('#searchSido');

// 데이터 한건으로 tr 생성.
function makeRow(center = {}) {
	let tr = document.createElement('tr');
	tr.addEventListener('click', function(e) {
		//location.href = 'map.jsp?lat=' + center.lat + '&lng=' + center.lng;
		window.open('map.jsp?lat=' + center.lat + '&lng=' + center.lng 
		+ '&name=' + center.centerName); // 새창에서 열기
	})
	// 보여줄 항목 지정.
	showFields.forEach(field => {
		let td = document.createElement('td');
		if (field == 'centerName') {
			td.innerText = center[field].substring('코로나19 '.length);
		} else {
			td.innerText = center[field]
		}
		tr.append(td);
	})
	return tr;
}

// 전체목록 보여주기
fetch(url)
	.then(resolve => resolve.json())
	.then(result => {
		centerList = result.data;	// 조회이벤트 처리할때 사용할 예정.
		console.log(centerList);
		//console.log(JSON.stringify(centerList)); // 객체->json문자열
		let filterAry = []; // 시도정보만 담기위한 배열 선언.
		result.data.forEach(center => {
			tbody.append(makeRow(center));
			// 시도정보만 담고 있는 배열을 활용해서 option 생성하기.
			if (filterAry.indexOf(center.sido) == -1) {
				filterAry.push(center.sido); // 동일한 값이 없으면 추가하기.
			}
		}) // 화면에 전체데이터 출력
		filterAry.forEach(sido => {
			let opt = document.createElement('option');
			opt.innerText = sido;
			searchSido.append(opt);
		})
	})
	.catch(err => console.log(err));

// 조회버튼 클릭 시 입력값(keyword)과 비교해서 동일한 시도정보만 출력한다.
//document.querySelector('#searchBtn').addEventListener('click', function(e) { // 검색어 입력후 조회버튼을 눌러야한다.
document.querySelector('#keyword').addEventListener('change', function(e) { // 검색어 입력후 엔터치면 검색된다.
	tbody.innerHTML = '';
	let kw = document.querySelector('#keyword').value;
	centerList.filter(center => center.sido.indexOf(kw) >=0)// 시도값이 같은 배열.
	.forEach(center => tbody.append(makeRow(center)));
})

// 시도목록이 변경이 되면 동일한 시도정보만 출력한다.
document.querySelector('#searchSido').addEventListener('change', function(e) {
	tbody.innerHTML = '';
	let kw = document.querySelector('#searchSido').value;
	//let kw = this.value;
	centerList.filter(center => center.sido == kw)// 시도값이 같은 배열.
	.forEach(center => tbody.append(makeRow(center)));
})

// json 전송해서 db에 입력기능.
document.getElementById('registerData').addEventListener('click', function(e) {
	fetch('../registerCenter.do', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(centerList)
	})
	.then(resolve => resolve.text())
	.then(result => console.log(result))
	.catch(err => console.log(err));
})
