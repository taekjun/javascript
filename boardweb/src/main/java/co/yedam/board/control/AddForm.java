package co.yedam.board.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.Board;
import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardServiceImpl;
import co.yedam.common.Control;

public class AddForm implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String title = req.getParameter("title");
	    String content = req.getParameter("content");
		String writer = req.getParameter("writer");
		
		req.setAttribute("title", title);
		req.setAttribute("content", content);
		req.setAttribute("writer", writer);
		
		String path = "WEB-INF/view/addForm.jsp";
		req.getRequestDispatcher(path).forward(req, resp);
	}

}
