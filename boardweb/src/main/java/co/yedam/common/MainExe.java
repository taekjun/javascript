package co.yedam.common;

import java.util.List;

import co.yedam.board.Board;
import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardServiceImpl;

public class MainExe {
	public static void main(String[] args) {

		SearchVO search = new SearchVO();
		search.setPage(1);
		search.setSearchCondition("T");
		search.setKeyword("n");
		
		BoardService svc = new BoardServiceImpl();
		List<Board> list = svc.boardList(search);
		
		for(Board board : list) {
			System.out.println(board.toString());
		}
	}
}
