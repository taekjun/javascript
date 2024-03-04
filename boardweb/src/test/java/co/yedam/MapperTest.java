package co.yedam;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.common.SearchVO;
import co.yedam.reply.mapper.ReplyMapper;

public class MapperTest {
	public static void main(String[] args) {
		SqlSession session = DataSource.getInstance().openSession(true);
		ReplyMapper mapper = session.getMapper(ReplyMapper.class);
		
		SearchVO search = new SearchVO();
		search.setBno(98);
		search.setRpage(2);
		
		mapper.selectList(search)
		.forEach(reply -> System.out.println(reply.toString())); // List<Reply>
		
	}
}
