package co.yedam.member.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.member.Member;
import co.yedam.member.mapper.MemberMapper;

public class MemberServiceImpl implements MemberService{
	
	SqlSession session = DataSource.getInstance().openSession(true);
	MemberMapper mapper = session.getMapper(MemberMapper.class);
	List<Member> member = new ArrayList<>();
	
	@Override
	public Member loginCheck(Member member) {
		return mapper.selectMember(member);
	}
	
	@Override
	public boolean addMember(Member member) {
		return mapper.insertMember(member) == 1; // 처리되는 값이 한건이다
	}
	
	
}
