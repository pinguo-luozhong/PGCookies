/**
 * Created by luozhong on 15/7/29.
 */
(function (win) {

  var cookies = {};

  //设置coolie 的值
  cookies.setCookie = function (name, value,time) {
    if(value.constructor == Object){
      value = JSON.stringify(value);
    }
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec * 1);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
  }

  function getsec(str) {
    var str1 = str.substring(1, str.length) * 1;
    var str2 = str.substring(0, 1);
    if (str2 == "s") {
      return str1 * 1000;
    }
    else if (str2 == "h") {
      return str1 * 60 * 60 * 1000;
    }
    else if (str2 == "d") {
      return str1 * 24 * 60 * 60 * 1000;
    }
  }

  cookies.getCookie = function (name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
  }

  //删除cookie
  cookies.delCookie = function (name) {
    document.cookie = name + "=;expires=" + (new Date(0)).toGMTString();
  }

  window.myCookies = cookies;
})()
