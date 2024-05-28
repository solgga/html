package com.itwill.lab05.datasource;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

public class DataSourceUtil {
	// singleton 구현
	// 싱글턴을 구현하는 공식 그냥 외우셈
	private static DataSourceUtil instance = null; // 1.자기 타입으로 스태틱 변수를 선언
	
	private HikariConfig config; // 2.생성자를 프라이빗으로 감춰버려
	private HikariDataSource ds;
	
	private DataSourceUtil() {
		// HikariCP의 설정(configuration)을 담당하는 객체.
		config = new HikariConfig(); 
		
		// 커넥션 풀(데이터소스) 환경 설정.
		config.setDriverClassName("oracle.jdbc.OracleDriver");
		config.setJdbcUrl("jdbc:oracle:thin:@localhost:1521:xe");
		config.setUsername("jspstudy");
		config.setPassword("jspstudy");
		
		// 데이터 소스 객체 생성.
		ds = new HikariDataSource(config);
		
	}
	
	
	public static DataSourceUtil getInstance() { // 3.그리고 퍼블릭이면서 스태틱인 메서드를 만들어준다
		if (instance == null) {
			instance = new DataSourceUtil();
		}
		
		return instance;
	}
	
	public HikariDataSource getDataSource() {
		return ds;
	}
	
	
}
