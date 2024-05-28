package com.itwill.lab05.repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.itwill.lab05.datasource.DataSourceUtil;
import com.zaxxer.hikari.HikariDataSource;



// MVC 아키텍쳐에서 영속성 계층(repository layer)을 담당하는 클래스.
// 데이터베이스에서 CRUD(Create, Read, Update, Delete) 작업을 담당
// DAO(Data Access Object). 그래서 다오임.
public enum PostDao {
	INSTANCE;
	
	private static final Logger log = LoggerFactory.getLogger(PostDao.class);
	private final HikariDataSource ds = DataSourceUtil.getInstance().getDataSource();
	
	
	// select() 메서드에서 실행할 SQL:
	private static final String SQL_SELECT_ALL = "select * from posts order by id desc";
	
	public List<Post> select() {
		log.debug("select()");
		log.debug(SQL_SELECT_ALL);
		
		List<Post> list = new ArrayList<>(); // SELECT 결과를 저장할 리스트.
 		Connection conn = null;
 		PreparedStatement stmt = null;
 		ResultSet rs = null;

	try {	
		conn = ds.getConnection();
		stmt = conn.prepareStatement(SQL_SELECT_ALL);
		rs = stmt.executeQuery();
			while (rs.next()) {
				Post post = fromResultSetToPost(rs);
				list.add(post);
			}
		
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			closeResources(conn, stmt, null);
		}
		return list;
	}
			
	
	//post 테이블에 insert 하는 SQL:
	private static final String SQL_INSERT = 
			"insert into posts (title, content, author) values (?, ?, ?)";
	
	public int insert(Post post) {
		log.debug("insert({})", post);
		log.debug(SQL_INSERT);
		
		Connection conn = null;
		PreparedStatement stmt = null;
		int result = 0;
		try {
			conn = ds.getConnection();
			stmt = conn.prepareStatement(SQL_INSERT);
			stmt.setString(1, post.getTitle());
			stmt.setString(2, post.getContent());
			stmt.setString(3, post.getAuthor());
			result = stmt.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			closeResources(conn,stmt);
		}
		
		return result;
	}
	
	// posts 테이블에서 id(PK)로 행 1개를 삭제하는 SQL:  // DELETE()
	private static final String SQL_DELETE = "delete from posts where id =?";
	
	public int delete(int id) {
		log.debug("delete(id = {})",id);
		log.debug(SQL_DELETE);
		
		Connection conn = null;
		PreparedStatement stmt = null;
		int result = 0;
		
		try {
			conn = ds.getConnection();
			stmt = conn.prepareStatement(SQL_DELETE);
			stmt.setInt(1, id);
			result = stmt.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
			
		} finally {
			closeResources(conn,stmt);
		}
		return result;
	}
	
	// posts 테이블에서 id(Primary Key.PK)로 검색하는 SQL:
	private static final String SQL_SELECT_BY_ID = "select * from posts where id = ?";
	
	public Post select(int id) {
		log.debug("select(id = {})", id);
		log.debug(SQL_SELECT_BY_ID);
		
		Connection conn = null;
		PreparedStatement stmt = null;
		ResultSet rs = null; // 얘는 select라서 리절트셋이필요함.
		Post post = null;
//		conn = ds.getConnection(); // 이렇게 쓴뒤에 트라이묶
		try {
			conn = ds.getConnection();
			stmt = conn.prepareStatement(SQL_SELECT_BY_ID);
			stmt.setInt(1, id);
			rs = stmt.executeQuery();
			if (rs.next()) {
				post = fromResultSetToPost(rs);
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			closeResources(conn, stmt, rs);
		}
		return post;
	}	

	
	private Post fromResultSetToPost(ResultSet rs) throws SQLException { // 쓰로우익셉션하면 이렇게 뒤에 throws SQLException { 으로바뀜.
//		int id = rs.getInt("id"); 이렇게까지 쓰면 getInt부분에 밑줄생기는데 쓰로우익셉션이나 트라이캐치를 해라고함. 여기선 쓰로우할거임.
		int id = rs.getInt("id");
		String title = rs.getString("title");
		String content = rs.getString("content");
		String author = rs.getString("author");
		LocalDateTime createdTime = rs.getTimestamp("created_time").toLocalDateTime();
		LocalDateTime modifiedTime = rs.getTimestamp("modified_time").toLocalDateTime();
		
		
//		return null; 첨에 리턴없으면 계속 에러나니가 리턴 널; 로하고 나중에 바꿈
		return Post.builder()
				.id(id)
				.title(title)
				.content(content)
				.author(author)
				.createdTime(createdTime)
				.modifiedTime(modifiedTime)
				.build();
		
	}
	
	//Statement 임포트할때는 sql로, ResultSet도 sql
	private void closeResources(Connection conn, Statement stmt, ResultSet rs) {
		// rs.close(); 까지쓰면 밑줄생기는데 트라이캐치하면댐
		
		try {  // DB 자원들을 해제하는 순서: 생성된 순서의 반대로. rs - stmt - conn 이런순으로 close()
			if (rs != null) rs.close(); // 리절트가 널이 아닌 경우에만 클로즈 하겠다
			if (stmt != null) stmt.close();
			if (conn != null) conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}   
	}
	
	
	private void closeResources(Connection conn, Statement stmt) {  // 같은 이름의 메서드, 다른 파라미터 - 메서드 오버로딩
		closeResources(conn, stmt, null);
	}
	
}
