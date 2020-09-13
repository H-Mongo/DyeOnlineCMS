package com.mongo.yrzx.dto;

import lombok.Data;

@Data
public class InfoColorDto {
	
	private Integer co_id;
	private String co_name;
	private String co_remark;
	private String co_status; // 状态 00-未确定 22-确定 55-启用 77-禁用 99-逻辑删除


}
