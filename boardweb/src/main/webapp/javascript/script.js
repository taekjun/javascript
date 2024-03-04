/*
* script.js
*/

console.log("script.js")
console.log(document);

document.querySelector('button.btn').addEventListener('click', clickFnc);
function clickFnc(ev) {
	console.log(ev);
	let userValue = document.querySelector('input#name').value; // input 아이디값.
	let liTag = document.createElement('li');
	liTag.innerText = userValue + ' '; // <li>홍길동</li>
	
	// button 생성.
	let btn = document.createElement('button');
	btn.innerText = '삭제';
	liTag.append(btn);
	
	document.querySelector('#list').append(liTag);
	// init.
	document.querySelector('#name').value = ''; // 이름 추가하고 텍스트창 비워주는 명령.
}

// addRow (행추가해서 내용삽입)
document.querySelector('#addBtn').addEventListener('click', addRow);
function addRow() {
	let sno, sname, score;
	sno = document.querySelector('#sno').value;
	sname = document.querySelector('#sname').value;
	score = document.querySelector('#score').value;
	if (!sno || !sname || !score) {
		alert('빈값을 채워주세요.');
		return; // 함수 종료
	}
	//let obj = {sno: sno, sname: sname, score: score} // 아래 표현과 같은 내용임. 
	let obj = {sno, sname, score}
	let tr = makeRow(obj)
	document.querySelector('#studList').appendChild(tr);
	
	document.querySelectorAll('#studTable input').forEach(
		function(item, idx, ary){
			item.value = '';}); // 학생정보 입력하고 나면 텍스트창 비워주는 명령
	
	
}
// makeRow (행추가)
function makeRow(student={sno:1, sname:'test', score:90}) {
	let tr = document.createElement('tr');
	tr.addEventListener('click', displayRow, false)
	for (let prop in student) {
		let td = document.createElement('td');
		td.innerText = student[prop];
		tr.appendChild(td);
	}
	// 삭제버튼 추가
	let btn = document.createElement('button');
	btn.addEventListener('click', deleteRow, false);
	btn.innerText = '삭제';
	let td = document.createElement('td');
	td.appendChild(btn);
	tr.appendChild(td);
	
	return tr;
}
// 삭제.
function deleteRow(e) {
	e.stopPropagation(); // 하위->상위 이벤트전파 차단. 하위에서 검색되면 상위이벤트 실행x. 이벤트추가에 false넣으면(디폴드값임) 하->상/ true하면 상->하
	console.log(e.target);
	e.target.parentElement.parentElement.remove();
}

// 상세.
function displayRow(e) {
	//console.log(e.target, this);
	//console.log(this.children[1].innerText);
	document.querySelector('#sno').value = this.children[0].innerText;
	document.querySelector('#sname').value = this.children[1].innerText;
	document.querySelector('#score').value = this.children[2].innerText;
}
// 수정.
document.querySelector('#editBtn').addEventListener('click', editRow);
function editRow(e) {
	let list = document.querySelectorAll('#studList tr')
	for(let i=0; i<list.length; i++) {
		if(list[i].children[0].innerText == document.querySelector('#sno').value) {
			list[i].children[1].innerText = document.querySelector('#sname').value
			list[i].children[2].innerText = document.querySelector('#score').value
		}	
	}

}
//document.querySelectorAll
//value.innerText

// str에 값을 활용해서 화면출력.
function makeTr() {
	for (let student of str){
	// tr생성.
	// td * 3 생성.
	// tr을 tbody.appendChild
		/*let trTag = document.createElement('tr');
		for (let prop in student) {
			let tdTag = document.createElement('td');
			trTag.appendChild(tdTag);
			tdTag.innerText = student[prop];
		}*/
		let trTag = makeRow(student); //위 내용을 이렇게 바꿔줄 수 있다.
		document.querySelector('#studList').appendChild(trTag);
	}
}
makeTr();




