package com.mongo.yrzx.model;

import lombok.Data;

@Data
public class BusProcess {
	
	private Double process_id;
	private Integer plan_id;
	private String process_cus; // 格式：客户编号|客户名称
	private String process_std; // 格式：规格编号|规格名称
	private String process_color; // 格式：花色号编号|花色号名称
	private Double group_num; // 布匹数量（米）
	private String group_date; // 分组（投坯）时间
	private String group_person; // 坯布车间登记人
	private Double pretreat_num;
	private String pretreat_date;
	private String pretreat_person;
	private Double dye_num;
	private String dye_date;
	private String dye_person;
	private Double print_num;
	private String print_date;
	private String print_person;
	private Double arrange_num;
	private String arrange_date;
	private String arrange_person;
	private Double check_num;
	private String check_date;
	private String check_person;
	private String process_status; // 00 未投坯 05 已投坯 10 已前处理 15 已染色 20 已印花 25 已整理
    							   // 30 质检中 35 已质检 40 包装中 50 已包装 55 已部分入库 60 已入库 65 已部分交货 70 已交货


}
