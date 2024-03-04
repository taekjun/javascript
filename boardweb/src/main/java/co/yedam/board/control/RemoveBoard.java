package co.yedam.board.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.Board;
import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardServiceImpl;
import co.yedam.common.Control;

public class RemoveBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String bno = req.getParameter("bno");
		
		BoardService svc = new BoardServiceImpl();
		
		if (svc.removeBoard(Integer.parseInt(bno))) {
			resp.sendRedirect("boardList.do");
		} else {
			req.setAttribute("message", "삭제 중 에러가 발생했습니다.");
			String path = "WEB-INF/view/error.jsp"; 
			req.getRequestDispatcher(path).forward(req, resp);
			
		}
		
		// mapper => int deletBoard 기능추가. 파라메터 타입은 int
		// service => boolean removeBoard 기능추가. (int)
		// 정상삭제되면 목록으로 이동. 삭제가 안될경우 에러페이지
		
		
	}

}
