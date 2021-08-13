/*
 * @Author: your name
 * @Date: 2021-08-13 15:56:28
 * @LastEditTime: 2021-08-13 16:10:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop\src\api\ajax.js
 */
import axios from 'axios'
export default function ajax(url,data={},type='GET'){
  //默认类型为get
  return new Promise(function (resolve,reject){
    //1执行异步ajax请求
    let promise
    // 返回的是promise类型
    if(type==='get'){
      //准备url，query参数数据
      let dataStr=''//数据拼接字符串
      Object.keys(data).forEach(key =>{
        dataStr+=key+'='+data[key]+'&'
      })
      if(dataStr !==''){
        dataStr=dataStr.substring(0,dataStr.lastIndexOf('&'))
        url=url+'?'+dataStr
      }
      //发送get请求
      promise=axios.get(url)
    }else{
      //发送post请求
      promise=axios.post(url,data)
    }
    promise.then(function (response){
      //2成功了调用resolve()
      resolve(response.data)

    }).catch(function(error){
      //2失败了调用reject()
      reject(error)
    })
  })
}
