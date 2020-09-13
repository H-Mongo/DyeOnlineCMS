package com.mongo.yrzx.model;

import lombok.Data;

@Data
public class BusProduct {
	
	private Double product_id;
	private Double process_id;
	private String product_cus;
	private String product_std;
	private String process_color;
	private String product_level; // 表示成品质量，取值如下： 01：一等品  02：二等品  03：三等品  04：等外品
	private Double product_num;
	private String product_status; // 30 质检中 35 已质检 40 包装中 50 已包装 55 已部分入库 60 已入库 65 已部分交货 70 已交货


}
