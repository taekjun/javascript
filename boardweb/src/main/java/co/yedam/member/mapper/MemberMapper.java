package co.yedam.member.mapper;

import java.util.List;

import co.yedam.member.Member;

public interface MemberMapper {
	List<Member> memberList();
	
	Member selectMember(Member member);
	
	int insertMember(Member member);
	
}
