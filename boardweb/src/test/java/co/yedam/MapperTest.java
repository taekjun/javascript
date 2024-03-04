package co.yedam;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.reply.Reply;
import co.yedam.reply.mapper.ReplyMapper;

public class MapperTest {
	public static void main(String[] args) {
		SqlSession session = DataSource.getInstance().openSession(true);
		ReplyMapper mapper = session.getMapper(ReplyMapper.class);
		
		Reply rep = new Reply();
		rep.setBoardNo(98);
		rep.setReply("98번 댓글입니다");
		rep.setReplyer("newbie");
		//mapper.insertReply(rep);
		mapper.deleteReply(8); // 댓글번호8번 삭제
		
		mapper.selectList(98).forEach(reply -> System.out.println(reply.toString())); // List<Reply>
		
	}
}
