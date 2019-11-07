//html
/**
div id=demo style=overflow:hidden;height:139;width:232;background:#f4f4f4;color:#ffffff>
<table align=left cellpadding=0 cellspace=0 border=0><tr><td id=demo1 valign=top></td>
<td id=demo2 valign=top></td></tr></table></div>
**/

//js
var speed=30
  demo2.innerHTML=demo1.innerHTML
  function Marquee(){
  if(demo2.offsetWidth-demo.scrollLeft<=0)
  demo.scrollLeft-=demo1.offsetWidth
  else{
  demo.scrollLeft++
  }
  }
  var MyMar=setInterval(Marquee,speed)
  demo.onmouseover=function() {clearInterval(MyMar)}
  demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)}
