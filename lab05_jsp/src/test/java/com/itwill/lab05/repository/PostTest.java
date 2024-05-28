package com.itwill.lab05.repository;

import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PostTest {
	private static final Logger log = LoggerFactory.getLogger(PostTest.class);
	
	private PostDao dao = PostDao.INSTANCE; // PostDao 이넘클래스 만들고 난뒤 작성햇
	
	
	// Test 애너테이션은 언제붙여주는거냐면 JUnit 모듈에서 단위 테스트를 하기위해 호출하는 메서드임.
	// (1) public void. (2) 아규먼트를 갖지 않음. 요거 두가지만 지켜주면됨.
//	@Test
	public void test() {
		// Post 타입 객체 생성 - Builder 디자인 패턴.
		Post p = Post.builder()
				.title("테스트")
				.author("관리자")
				.content("builder design pattern")
				.id(1)
				.build();
		
		// assertNotNull(arg): arg가 null이 아니면 JUnit 테스트 성공, null이면 테스트 실패. 이걸 검사해주는 메서드.
		// assertNull(arg): arg가 null 이면 단위 테스트 성공, null이 아니면 테스트 실패.
		Assertions.assertNotNull(p);
		log.debug("p = {}", p);
	}
	
	
//	@Test
	public void testPostDao() {
		Assertions.assertNotNull(dao); // PostDao 타입 객체가 null이 아니면 단위 테스트 성공.
		log.debug("dao = {}", dao);
		
		List<Post> result = dao.select();
		Assertions.assertEquals(3, result.size());
		for (Post p : result) {
			log.debug(p.toString());
		}
	}
	
//	@Test
	public void testInsert() {
		// PostDao.insert 메서드 단위 테스트. 
		Post post = Post.builder()
				.title("insert 테스트")
				.content("JDBC, Connection Pool test")
				.author("admin")
				.build();
		int result = dao.insert(post); // PostDao의 insert 메서드 호출.
		Assertions.assertEquals(1, result);
		// >> insert 메서드의 리턴 값(삽입된 행의 개수)가 1이면 단위 테스트 성공.
	}
	
//	@Test
	public void testDelete() {
		// TODO: PostDao.delete 메서드 단위 테스트. 만들기.
		Post post = Post.builder()
				.id(1)
				.build();
		int result = dao.delete(1);
		Assertions.assertEquals(1, result);    /// id(PK)가 있는 경우는 이러케
//		result = dao.delete(1);
//		Assertions.assertEquals(1, result);  // id(PK)가 없는 경우
		
	}
	
	@Test
	public void testSelectByID() {
		Post post = dao.select(2); // id=2(pk)가 테이블에 있는 경우
		Assertions.assertNotNull(post);
		log.debug(post.toString());
		
		post = dao.select(0); // ( id=0 )pk가 테이블에 없는경우
		Assertions.assertNull(post);
	}
	
}

