package co.yedam.reply.mapper;

import java.util.List;

import co.yedam.reply.Reply;

public interface ReplyMapper {
	// 목록,등록,삭제
	List<Reply> selectList(int bno);
	int insertReply(Reply reply);
	int deleteReply(int rno);
}
