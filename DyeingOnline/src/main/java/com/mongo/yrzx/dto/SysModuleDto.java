package com.mongo.yrzx.dto;

import lombok.Data;

@Data
public class SysModuleDto {
	
	private Integer m_id; // 模块编号规则：一级模块编号为两位，二级模块编号为一级模块编号+两位编号，三级模块编号为二级模块编号+两位编号，以此类推。
	private Integer m_pid; // 模块编号规则：一级模块编号为两位，二级模块编号为一级模块编号+两位编号，三级模块编号为二级模块编号+两位编号，以此类推。
	private String m_name; // 模块名称
	private String m_url; // 模块首地址
	private Boolean m_ismenu; // 是否是菜单
	private String m_status; // 状态 00-未确定 22-确定 55-启用 77-禁用 99-逻辑删除


}
