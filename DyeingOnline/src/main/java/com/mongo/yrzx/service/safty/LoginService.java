package com.mongo.yrzx.service.safty;

import com.mongo.yrzx.dto.SysUserDto;

/**
 * 安全管理：用户登录业务规范层
 *	
 * @author hzw
 * @project DyeingOnline
 * @date 2019-08-07
 *
 */

public interface LoginService {
	
	/**
	 * 登录验证
	 * @param userDto
	 * @param session
	 * @return
	 */
	SysUserDto login(SysUserDto userDto);

}
