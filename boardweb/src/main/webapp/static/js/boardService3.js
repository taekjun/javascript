/**
 * boardService3.js 제이쿼리 기반
 */
import service from './boardAjax.js';

console.log('jquery')
let page = 1;
// 댓글 목록 5건 출력.
service.replyList({ bno: bno, page: page }, // 인자값1
	replyListCall,
	err => console.log('error=> ', err)
);
function replyListCall(result) {
	let ul = $('.content>ul');
	// 기존목록 삭제.
	$('.content>ul>li:gt(1)').remove();
	//console.log(result);
	$(result).each(function(idx, item) {
		// row 생성하는 함수로 별도로 빼는 작업 할 것.(makeRow)
		let clon = $('.content>ul>li').eq(0).clone();
		// 삭제 기능.
		let delBtn = $('<button>삭제</button>')
		delBtn.click(function (e) {
			service.removeReply(item.replyNo, 
			function (result) {
				if(result.retCode == 'OK') {
					alert(result.retMsg);
					service.replyList({ bno: bno, page: page }, // 인자값1
					replyListCall,
					err => console.log('error=> ', err)
					);
				} else {
					alert(result.retMsg);
				}
			},
			function (err) {
				console.log('error=> ', err)
			})
		}) // end of delete.
		
		clon.find('span:eq(0)').text(item.replyNo);
		clon.find('span:eq(1)').text(item.reply);
		clon.find('span:eq(2)').text(item.replyer);
		clon.find('span:eq(3)').html(delBtn);
		ul.append(clon);
	});

	// 페이지 리스트 생성.
	service.pageList(bno,
		createPageElement,
		err => console.log('error=> ', err)
	)
}

// 댓글 등록.
$('.addReply').click(function () {
	let reply = $('#reply').val();
	service.addReply({bno,reply,replyer},
	function (result) {
		if(result.retCode == 'OK') {
			alert('등록 성공.')
			$('.content>ul').append(makeRow(result.retVal)); // retVal->AddReplyControl
			
			// 마지막 페이지로 이동후 목록 보여주기.
			service.pageList(bno,
			result => {
				page = Math.ceil(result.totalCount / 5);
				service.replyList({ bno: bno, page: page }, // 인자값1
					replyListCall,
					err => console.log('error=> ', err));
			}, err => console.log(err))
		} else {
			alert('등록 실패.')
		}
	},
	function (err) {
		console.log('error=> ', err)	
	})
})

// 댓글목록 생성.
function makeRow (item) {
	let clon = $('.content>ul>li:nth-of-type(1)').clone();
	clon.find('span:eq(0)').text = item.replyNo;
	clon.find('span:eq(1)').text = item.reply;
	clon.find('span:eq(2)').text = item.replyer;
	clon.find('span:eq(3)').html($('<button>삭제</button>'));
	return clon;
}

// 페이지 목록 생성.
function createPageElement(result) {
	// 기존 페이지 삭제
	let pagination = $('div.pagination');
	pagination.html('');

	let totalCnt = result.totalCount;
	let startPage, endPage; // 1~5,6~10
	let next, prev;
	let realEnd = Math.ceil(totalCnt / 5);
	endPage = Math.ceil(page / 5) * 5;
	startPage = endPage - 4;
	endPage = endPage > realEnd ? realEnd : endPage;
	next = endPage < realEnd ? true : false;
	prev = startPage > 1;

	if (prev) {
		$('<a />').attr('href', '#').attr('data-page', startPage - 1)
			.html('&laquo').appendTo(pagination);

	}
	for (let p = startPage; p <= endPage; p++) {
		let aTag = $('<a />').attr('href', '#').attr('data-page', p)
			.html(p).appendTo(pagination);
		if (p == page) {
			aTag.addClass('active');
		}
	}
	if (next) {
		$('<a />').attr('href', '#').attr('data-page', endPage + 1)
			.html('&raquo').appendTo(pagination);
	}
}

// 페이지 이동.
$('.pagination').on('click', 'a', function(e) {
	page = $(this).data('page');
	service.replyList({ bno: bno, page: page }, // 인자값1
		replyListCall,
		err => console.log('error=> ', err)
	);
})
