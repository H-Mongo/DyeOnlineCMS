package com.mongo.yrzx.mapper.safty;

import org.apache.ibatis.annotations.Select;

import com.mongo.yrzx.dto.SysUserDto;

/**
 * 安全管理：用户登录
 *	
 * @author hzw
 * @project DyeingOnline
 * @date 2019-08-07
 *
 */

public interface LoginMapper {

	/**
	 * 登录验证
	 * @param userDto
	 * @param session
	 * @return
	 */
	@Select("select * from sys_user where u_name = #{userDto.u_name} and u_pwd = #{userDto.u_pwd}")
	SysUserDto login(SysUserDto userDto);

}
