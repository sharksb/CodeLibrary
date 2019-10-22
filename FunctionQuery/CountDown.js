1 <html>
 2 <head>
 3 <meta charset="UTF-8">
 4 <title>简单时长倒计时</title>
 5 <SCRIPT type="text/javascript">        
 6             var maxtime = 60 * 60; //一个小时，按秒计算，自己调整!   
 7             function CountDown() {
 8                 if (maxtime >= 0) {
 9                     minutes = Math.floor(maxtime / 60);
10                     seconds = Math.floor(maxtime % 60);
11                     msg = "距离结束还有" + minutes + "分" + seconds + "秒";
12                     document.all["timer"].innerHTML = msg;
13                     if (maxtime == 5 * 60)alert("还剩5分钟");
14                         --maxtime;
15                 } else{
16                     clearInterval(timer);
17                     alert("时间到，结束!");
18                 }
19             }
20             timer = setInterval("CountDown()", 1000);                
21         </SCRIPT>
22 </head>
23 <body>
24 <div id="timer" style="color:red"></div>
25 <div id="warring" style="color:red"></div>
26 </body>
27 </html>


 <html>  
 2 <head>  
 3     <meta charset="UTF-8">  
 4     <title>js简单时分秒倒计时</title>  
 5     <script type="text/javascript">  
 6         function countTime() {  
 7             //获取当前时间  
 8             var date = new Date();  
 9             var now = date.getTime();  
10             //设置截止时间  
11             var str="2018/3/17 00:00:00";
12             var endDate = new Date(str); 
13             var end = endDate.getTime();  
14             
15             //时间差  
16             var leftTime = end-now; 
17             //定义变量 d,h,m,s保存倒计时的时间  
18             var d,h,m,s;  
19             if (leftTime>=0) {  
20                 d = Math.floor(leftTime/1000/60/60/24);  
21                 h = Math.floor(leftTime/1000/60/60%24);  
22                 m = Math.floor(leftTime/1000/60%60);  
23                 s = Math.floor(leftTime/1000%60);                     
24             }
25             //将0-9的数字前面加上0，例1变为01
26             d = checkTime(d);
27             h = checkTime(h);
28             m = checkTime(m);
29             s = checkTime(s);
30             function checkTime(i){
31                 if (i<10) {
32                     i = "0"+i;
33                 }
34                 return i;
35             }
36             //将倒计时赋值到div中  
37             document.getElementById("_d").innerHTML = d+"天";  
38             document.getElementById("_h").innerHTML = h+"时";  
39             document.getElementById("_m").innerHTML = m+"分";  
40             document.getElementById("_s").innerHTML = s+"秒";  
41             //递归每秒调用countTime方法，显示动态时间效果  
42             setTimeout(countTime,1000);  
43   
44         }  
45     </script>  
46 </head >  
47 <body onload="countTime()" >  
48     <div>  
49         <span id="_d">00</span>  
50         <span id="_h">00</span>  
51         <span id="_m">00</span>  
52         <span id="_s">00</span>  
53     </div>  
54 </body>  
55 </html>        
