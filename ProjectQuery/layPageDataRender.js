 laypage.render({
                        elem: '[div IDNAME]',
                        theme: '[styly]',
                        count: [data count],
                        limit: [limit],
                        jump: function (obj) {
                            //模拟渲染,渲染的div内容，在特殊情况下，可以是别的形式。返回别的数据                      
                            document.getElementById("xxx").innerHTML = function () {
                                let div = document.createElement('div');
                                
                                //每页数据显示，由于数据是动态变化的，所以我们对其进行计算设置
                                
                                //计算页数，当总数据/每页限制数据不为0的时候
                                if (data.count % obj.limit != 0) {
                                    var jlimit;
                                    
                                    //当前页数是最后一页的时候，其jlimit的大小
                                    if (obj.curr == parseInt((data.count / obj.limit) + 1)) {
                                        jlimit = data.count - parseInt(data.count / obj.limit) * obj.limit + (obj.curr - 1) * obj.limit;                                  
                                    } else {
                                        jlimit = (obj.curr - 1) * obj.limit + obj.limit
                                    }
                                    
                                   //在没有数据的情况下的显示 
                                } else if (data.count % obj.limit == 0) {                              
                                    layui.use('layer', function () {
                                        var layer = layui.layer;
                                        layer.msg("xxx", {
                                            icon: 5
                                        })
                                    })
                                    
                                    //在数据正常下的显示
                                } else {
                                    jlimit = (obj.curr - 1) * obj.limit + obj.limit
                                }
                                
                                                                
                                for (let j = (obj.curr - 1) * obj.limit; j < jlimit; j++) {
                                   //doSomething
                                }
                                
                                return xxxx
                                //return you need
                              
                            }();

                        }
                    });
