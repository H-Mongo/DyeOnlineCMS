package com.mongo.yrzx.controller.safty;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mongo.yrzx.dto.SysUserDto;
import com.mongo.yrzx.service.safty.LoginService;

/**
 * 安全管理：用户登录控制器
 *	
 * @author hzw
 * @project DyeingOnline
 * @date 2019-08-07
 *
 */

@RestController
@RequestMapping("/safty/login")
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	/**
	 * 登录验证
	 * @param userDto
	 * @param session
	 * @return
	 */
	public SysUserDto login(@RequestBody SysUserDto userDto, HttpSession session){
		
		SysUserDto u = loginService.login(userDto);
		if(u != null) {
			session.setAttribute("user", u);
			return u;
		}
		return null;
		
	}
	

}
