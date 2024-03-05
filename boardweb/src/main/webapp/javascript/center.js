/**
 * center.js
 */
console.log('center.js');

let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=64&serviceKey=yReI6VOUDBfrdEXPOu5%2BtNH50AEpXG1MJH%2BcgBxdVOOF0lgMencj0fGnGAk4NVv6BKsM9ZkHutFJAwB381kAIw%3D%3D'

let showFields = ['id','centerName','phoneNumber','sido'];
let tbody = document.querySelector('#list');
fetch(url)
.then(resolve => resolve.json())
.then(result => {
	console.log(result);
	result.data.forEach(center => {
		let tr = document.createElement('tr');
		showFields.forEach(field => {
			let td = document.createElement('td');
			if(field == 'centerName') {
				td.innerText = center[field].substring('코로나19 '.length);
			} else {
				td.innerText = center[field]
			}
			tr.append(td);
		})
		tbody.append(tr);
	})
})
.catch(err => console.log(err));

// 조회이벤트 처리.
