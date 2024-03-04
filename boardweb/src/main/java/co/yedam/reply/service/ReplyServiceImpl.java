package co.yedam.reply.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.reply.Reply;
import co.yedam.reply.mapper.ReplyMapper;

public class ReplyServiceImpl implements ReplyService {
	SqlSession session = DataSource.getInstance().openSession(true);
	ReplyMapper mapper = session.getMapper(ReplyMapper.class);
	
	public List<Reply> replyList(int bno) {
		return mapper.selectList(bno);
	}
	
	public boolean addReply(Reply reply) {
		return mapper.insertReply(reply) == 1;
	}
	
	public boolean removeReply(int rno) {
		return mapper.deleteReply(rno) == 1;
	}
}
