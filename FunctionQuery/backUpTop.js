 //first way
 $(document).ready(function () {
        $(".backtop").hide();
        $(function () {
            //检测屏幕高度
            var height = $(window).height();
            //scroll() 方法为滚动事件
            $(window).scroll(function () {
                if ($(window).scrollTop() > height) {
                    $(".backtop").fadeIn(500);
                } else {
                    $(".backtop").fadeOut(500);
                }
            });
            $(".backtop").click(function () {
                $('body,html').animate({ scrollTop: 0 }, 100);
                return false;
            });
        });
    });
    
    //second way
            /*判断回到顶部按钮显示与否*/
        window.onscroll = function () {
            var sTop = document.documentElement.scrollTop;
            if (sTop > 100) {
                document.getElementById("sm_top").style.display = "block";
            } else {
                document.getElementById("sm_top").style.display = "none";
            }
        }

        //回到顶部
        function backHead() {
            timer = setInterval(function () {
                var backtop = document.documentElement.scrollTop; //速度操作  减速
                var speedtop = backtop / 5;
                document.documentElement.scrollTop = backtop - speedtop; //高度不断减少
                if (backtop == 0) { //滑动到顶端
                    clearInterval(timer); //清除计时器
                }
            }, 30);
        }
        
    //third way
        /**layui**/
        layui.use('util', function(){
         var util = layui.util;
  
       //执行
       util.fixbar({
       bar1: true
       ,click: function(type){
       console.log(type);
       if(type === 'bar1'){
         alert('点击了bar1')
        }
       }
     });
   });
