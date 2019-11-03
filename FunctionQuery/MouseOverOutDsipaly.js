 //点击页面任何地方，隐藏菜单
            $(document).on('mouseover', function (e) {
                var e = e || window.event; //浏览器兼容性
                var elem = e.target || e.srcElement;
                while (elem) { //循环判断至跟节点，防止点击的是div子元素
                    if (elem.id && elem.id == '[idname]') {
                        return;
                    } if (elem.id && elem.id == '[idname]') {
                        return;
                    }//如果还有别的div不想点击，就加else if判断
                    elem = elem.parentNode;
                }
                //这里写你想实现的效果
                $("#menu").hide();
                //移出时图标恢复
                $('.icon').removeClass("layui-icon-up");
                $('.icon').addClass("layui-icon-down");
                $('.icon').css('color', '');
            });
