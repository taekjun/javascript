package co.yedam;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.Board;
import co.yedam.board.BoardDAO;

/**
 * Servlet implementation class MethodServlet
 */
@WebServlet(name = "methodServ", urlPatterns = { "/methodServ", "/method" })
public class MethodServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public MethodServlet() {
		super();
	}

	// init -> service -> destroy
	// 요청방식: get방식요청(url직접입력, 링크<a href>)
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 등록기능: 제목,내용,작성자
		String title = request.getParameter("title"); // 요청정보의 값중에서 title에 저장된 값을 읽음.
		String content = request.getParameter("content");
		String writer = request.getParameter("writer");

		Board board = new Board();
		board.setTitle(title);
		board.setContent(content);
		board.setWriter(writer);

		BoardDAO dao = new BoardDAO();
		if (dao.insertBoard(board)) {
			response.getWriter().print("OK");
		} else {
			response.getWriter().print("NG");
		}
	}

	// post요청 form태크의 method="post"
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		//
		request.setCharacterEncoding("utf-8");
		
		// 수정기능
		String title = request.getParameter("title"); // 요청정보의 값중에서 title에 저장된 값을 읽음.
		String content = request.getParameter("content");
		String writer = request.getParameter("writer");
		String bno = request.getParameter("bno");

		Board board = new Board();
		board.setTitle(title);
		board.setContent(content);
		board.setWriter(writer);
		board.setBoardNo(Integer.parseInt(bno));

		// 게시글번호의 값을 변경하는 기능.
		BoardDAO dao = new BoardDAO();
		if (dao.updateBoard(board)) {
			response.getWriter().print("OK");
		} else {
			response.getWriter().print("NG");
		}
	}
}
