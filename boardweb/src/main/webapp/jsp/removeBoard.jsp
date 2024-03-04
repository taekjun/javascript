<%@page import="co.yedam.board.BoardDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h3>게시글 삭제기능.</h3>
	<!-- jps/removeBoard.jsp -->
	<%	//꺽쇠 퍼센트는 자바영역을 표시
		// 자바 영역. 자바코드 사용.
		BoardDAO dao = new BoardDAO();	//컨트롤+스페이스 눌러서 임포트 진행 가능 (자바에서는 컨트롤+시프트+o)
		String bno = request.getParameter("bno");
		
		if (dao.deleteBoard(Integer.parseInt(bno))) {
	%>
		<p>삭제되었습니다.</p>	
	<%
		} else {
	%>	
		<p>처리중 에러.</p>
	<%
		}
	%>	
</body>
</html>