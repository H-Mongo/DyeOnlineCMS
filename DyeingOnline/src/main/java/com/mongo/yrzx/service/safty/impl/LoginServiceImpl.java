package com.mongo.yrzx.service.safty.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mongo.yrzx.dto.SysUserDto;
import com.mongo.yrzx.mapper.safty.LoginMapper;
import com.mongo.yrzx.service.safty.LoginService;

/**
 * 安全管理：用户登录业务规范层实现类
 *	
 * @author hzw
 * @project DyeingOnline
 * @date 2019-08-07
 *
 */

@Service
public class LoginServiceImpl implements LoginService {
	
	@Autowired
	private LoginMapper loginMapper;

	@Override
	public SysUserDto login(SysUserDto userDto) {
		
		return loginMapper.login(userDto);
	}

}
