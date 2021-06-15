package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;




@ComponentScan
@SpringBootApplication
public class SpringPaypalApplication extends SpringBootServletInitializer implements CommandLineRunner{
	
	@Autowired
	private JdbcTemplate jdbcdTemplate;

	public static void main(String[] args) {
		SpringApplication.run(SpringPaypalApplication.class, args);
	}
	
	@Override       //user Order.java object to replace Student.java
	public void run(String... args) throws Exception { //for testing oracle database connection.
		// TODO Auto-generated method stub
		String sql = "select NPI, FIRST_NAME, LAST_NAME, ADDRESS_STATE from NPIREGISTRY WHERE FIRST_NAME = 'NELSON' AND LAST_NAME = 'LUI'"; //test retrieval query
		//List<Student> students = jdbcdTemplate.query(sql, BeanPropertyRowMapper.newInstance(Student.class));
		//students.forEach(System.out :: println);
	}

}
