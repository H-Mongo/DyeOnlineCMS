package com.mongo.yrzx.dto;

import lombok.Data;

@Data
public class BusStoreDto {
	
	private Integer store_id;
	private Double product_id;
	private String store_cus;
	private String store_std;
	private String store_color;
	private Double store_num;
	private String tore_in_date;
	private String store_per;
	private String store_out_date;
	private String store_out_per;
	private String store_status; // 50 已包装 60 已入库 70 已提货


}
