/*返回上次浏览位置*/
$(function () {
var str = window.location.href;
str = str.substring(str.lastIndexOf("/") + 1);
if ($.cookie(str)) {

$("html,body").animate({ scrollTop: $.cookie(str) }, 1000);
}
else {
}
})

$(window).scroll(function () {
var str = window.location.href;
str = str.substring(str.lastIndexOf("/") + 1);
var top = $(document).scrollTop();
$.cookie(str, top, { path: '/' });
return $.cookie(str);
})
/*返回上次浏览位置*/

/*这个是用jquery写的，所以用的时候要引入jquery库，和jquery.cookie.js*/
