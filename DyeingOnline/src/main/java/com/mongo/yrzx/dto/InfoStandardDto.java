package com.mongo.yrzx.dto;

import lombok.Data;

@Data
public class InfoStandardDto {
	
	private Integer standard_id;
	private String standard_name; // 规格
	private String standard_remark;
	private String standard_status; // 状态 00-未确定 22-确定 55-启用 77-禁用 99-逻辑删除


}
