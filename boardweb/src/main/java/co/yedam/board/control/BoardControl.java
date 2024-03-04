package co.yedam.board.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.Board;
import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardServiceImpl;
import co.yedam.common.Control;

public class BoardControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub => board.do
		String bno = req.getParameter("bno");
		
		BoardService svc = new BoardServiceImpl();
		Board board = svc.getBoard(Integer.parseInt(bno)); //mapper 기능 처리
		
		req.setAttribute("board", board);
		
		String path = "board/board.tiles";
		req.getRequestDispatcher(path).forward(req, resp); //페이지 재지정하면서 요청정보 
	}

}
