package com.mongo.yrzx.dto;

import java.util.Date;

import lombok.Data;

@Data
public class BusPlanDto {
	
	private Integer plan_id;
	private Integer standard_id;
	private Integer cus_id;
	private Integer co_id;
	private Integer plan_xh;
	private String plan_month; // 计划月份  格式为：yyyy-MM
	private Double plan_num; // 计划产量
	private Integer plan_type; // 1-白布产品 2-染色产品 3-无底色印花产品 4-有底色印花产品
	private Date plan_date; // 计划下达日期
	private String plan_person; // 计划登记人
	private Integer plan_status; // 计划状态 0-未下达，1-下达


}
