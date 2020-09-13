package com.mongo.yrzx.dto;

import lombok.Data;

@Data
public class InfoCustomerDto {
	
	private Integer cus_id;
	private String cus_name;
	private String cus_remark;
	private String cus_status; // 状态 00-未确定 22-确定 55-启用 77-禁用 99-逻辑删除


}
