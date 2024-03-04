package co.yedam.board.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.board.Board;
import co.yedam.board.Book;
import co.yedam.board.mapper.BoardMapper;
import co.yedam.common.DataSource;
import co.yedam.common.SearchVO;

// 업무로직을 담고 있는 프로세스.
// 데이터처리는 mapper 기능.
public class BoardServiceImpl implements BoardService{

	SqlSession session = DataSource.getInstance().openSession(true);
	BoardMapper mapper = session.getMapper(BoardMapper.class);
	
	
	@Override
	public List<Board> boardList(SearchVO search) {
		return mapper.boardList(search);
	}
	
	@Override
	public int boardTotalCnt(SearchVO search) {
		return mapper.getTotalCnt(search);
	}
	
	@Override
	public Board getBoard(int bno) {
		mapper.updateCount(bno);
		return mapper.selectBoard(bno);
	}

	@Override
	public boolean modifyBoard(Board board) {
		mapper.updateBoard(board);
		return true;
	}
	
	@Override
	public boolean removeBoard(int bno) {
		mapper.deleteBoard(bno);
		return mapper.deleteBoard(bno)==1;
	}
	
	@Override
	public boolean addBoard(Board board) {
		return mapper.insertBoard(board) == 1;
	}

	// 도서관련.
	@Override
	public List<Book> bookList() {
		return mapper.bookList();
	}
	
	@Override
	public boolean addBook(Book book) {
		return mapper.insertBook(book) == 1;
	}
	
	@Override
	public boolean removeBook(String bookCode) {
		mapper.deleteBook(bookCode);
		return true;
	}

}
