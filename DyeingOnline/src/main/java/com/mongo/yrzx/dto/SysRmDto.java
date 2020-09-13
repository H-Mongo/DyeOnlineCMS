package com.mongo.yrzx.dto;

import lombok.Data;

/**
 * 角色和模块的关系
 * @author hzw
 *
 */

@Data
public class SysRmDto {
	
	private Integer m_id; // 模块编号规则：一级模块编号为两位，二级模块编号为一级模块编号+两位编号，三级模块编号为二级模块编号+两位编号，以此类推。
	private Integer ro_id;


}
