package com.mongo.yrzx;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(basePackages = {"com.mongo.yrzx.mapper"})
public class DyeingOnlineApplication {

	public static void main(String[] args) {
		SpringApplication.run(DyeingOnlineApplication.class, args);
	}

}
