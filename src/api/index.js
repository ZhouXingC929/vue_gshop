/*
 * @Author: your name
 * @Date: 2021-08-13 15:56:35
 * @LastEditTime: 2021-08-13 17:44:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop\src\api\index.js
 */
// 包含n个接口请求函数模块
// 函数的返回值：promise对象

import ajax from './ajax'
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash)=> ajax(`/position/:geohash${geohash}`)
// 2、获取食品分类列表
export const reqFoodTypes = ()=> ajax('/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = ({longitude,latitude})=> ajax('/shops',{longitude,latitude})
// 4、根据经纬度和关键字搜索商铺列表???
export const reqSearchShops = ({geohash,keyword})=> ajax(`search_shops`,{geohash,keyword})
// 5、获取一次性验证码
export const reqCheckCode = ()=> ajax(`/captcha`)
// 6、用户名密码登陆
export const reqQwdLogin = ({name,pwd,captcha})=> ajax(`/login_pwd`,{name,pwd,captcha},'POST')
// 7、发送短信验证码
export const reqCodeLogin = (phone)=> ajax(`/sendcode`,{phone})
// 8、手机号验证码登陆
export const reqTeleLogin = ({phone,code})=> ajax(`/login_sms`,{phone,code},'POST')
// 9、根据会话获取用户信息
export const reqUser = ()=> ajax(`/userinfo`)
// 10、用户登出
export const reqLogout = ()=> ajax(`/logout`)
