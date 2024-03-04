package co.yedam.member.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.common.Control;
import co.yedam.member.Member;
import co.yedam.member.service.MemberService;
import co.yedam.member.service.MemberServiceImpl;

public class AddMemberControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		// TODO Auto-generated method stub
		// 1)요청정보 2)파일저장경로 3)업로드파일의 최대 파일크기 4)인코딩 5)리네임정책
		
		String savePath = req.getServletContext().getRealPath("images");
		int maxSize = 1024 * 1024 * 5;
		String enc = "utf-8";
		MultipartRequest multi = new MultipartRequest(req,savePath,maxSize,enc,new DefaultFileRenamePolicy());
		
		String id = multi.getParameter("id");
		String pw = multi.getParameter("pw");
		String name = multi.getParameter("name");
		String img = multi.getFilesystemName("image"); //변경된 파일의 이름.
		
		Member member = new Member();
		member.setId(id);
		member.setPw(pw);
		member.setName(name);
		member.setImage(img);
		
		// maaper: insertMember (MemberMapper에)
		// service: addMember (MemberService에)
		// 게시글목록 이동/ 에러페이지로 이동.
		MemberService svc = new MemberServiceImpl();
		if(svc.addMember(member)) {
			// 등록에 성공하면
			resp.sendRedirect("boardList.do");
		} else {
			req.setAttribute("message", "회원등록중 에러가 발생했습니다");
			String path= "WEB-INF/view/error.jsp";
			req.getRequestDispatcher(path).forward(req, resp);
		}
	}

}
