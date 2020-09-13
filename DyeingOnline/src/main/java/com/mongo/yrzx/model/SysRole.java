package com.mongo.yrzx.model;

import lombok.Data;

/**
 * 系统用户角色
 * @author hzw
 *
 */

@Data
public class SysRole {
	
	private Integer ro_id;
	private String ro_name;
	private String ro_remark;
	private String ro_status; // 状态 00-未确定 22-确定 55-启用 77-禁用 99-逻辑删除


}
