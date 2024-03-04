package co.yedam.board.mapper;

import java.util.List;

import co.yedam.board.Board;
import co.yedam.board.Book;
import co.yedam.common.SearchVO;

public interface BoardMapper {
	List<Board> boardList(SearchVO search);
	int getTotalCnt(SearchVO search); // 목록기능
	
	// 상세화면에 사용될 데이터.
	Board selectBoard(int bno);
	// 조회수 증가.
	int updateCount(int bno); //BoardMapper.xml 파일 id값에 들어간다
	// 글 내용 수정.
	int updateBoard(Board board);
	//글 삭제
	int deleteBoard(int bno);
	//글 등록
	int insertBoard(Board board);
	
	// 도서목록.
	List<Book> bookList();
	int insertBook(Book book);
	
	int deleteBook(String bookCode);
	
}
