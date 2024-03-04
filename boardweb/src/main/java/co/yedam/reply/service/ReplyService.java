package co.yedam.reply.service;

import java.util.List;

import co.yedam.reply.Reply;

public interface ReplyService {
	List<Reply> replyList(int bno);
	boolean addReply(Reply reply);
	boolean removeReply(int rno);
}
