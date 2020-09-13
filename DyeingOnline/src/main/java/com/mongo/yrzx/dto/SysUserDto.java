package com.mongo.yrzx.dto;

import lombok.Data;

@Data
public class SysUserDto {
	
	private String u_id;
	private String u_name;
	private String u_pwd;
	private String u_status; // 状态 00-未确定 22-确定 55-启用 77-禁用 99-逻辑删除


}
