<template>
   <div>
       <!-- in object -->
    <h1>in object</h1>
   <table > 
       <!-- all content -->
       <h4>all content</h4>
       <tr v-for="AllContent in items1"><td>{{AllContent}}</td></tr>
       <!-- title -->
       <h4>title</h4>
       <tr><td>{{items1.title}}</td></tr>
           <!-- foot -->
       <h4>foot</h4>
       <tr><td>{{items1.foot}}</td></tr>

       <!-- circle item1.content with array -->
       <h4>circle item1.content with array</h4>
       <tr v-for="item in items1.content"><td >{{item}}</td></tr>
       <!-- circle item1.testcontent with object -->
       <h4>circle item1.testcontent with object</h4>
       <tr v-for="itemtest in items1.testcontent"><td>{{itemtest}}</td></tr>
        <h4>direct writing item1.testcontent</h4>
       <tr><td>{{items1.testcontent}}</td></tr>
      <!-- <td>{{want to get its title name and value throught items.testcontent with  objct  }}</td> -->
        <h4>get its title name and value throught items.testcontent with  objct</h4>
       <tr v-for="(value,name,index) in items1.testcontent"><td>{{index}}</td><td>{{name}}</td><td>{{value}}</td></tr>
   </table>
      
      <!-- in array -->
      <div>
      <h1>in array</h1>
      <!-- all content -->
      <h4>all content</h4>
      <li v-for="AllContent in items2">{{AllContent}}</li>
      <!-- direct value -->
      <h4> circle direct vlaue</h4>
      <li v-for="directVlaue in items2[0]">{{directVlaue}}</li>
      <!-- direct value -->
      <h4>direct value</h4>
      <li>{{items2[0]}}</li>
      <!-- circle items2.nameA -->
      <h4>circle items2.nameA</h4>
      <li v-for="AllNameA in items2">{{AllNameA.nameA}}</li>
      <!-- ATTENTION: format AllNameA  in {{}} not for...in -->

      <!-- circle items2.nameB -->
      <h4>circle items2.nameB</h4>
      <li v-for="AllNameB in items2">{{AllNameB.nameB}}</li>
      </div>
     
</div>
</template>
    <!-- we can build a array for circle-->

<script>
export default {
    data(){
        return {
            items1:{
                title:'this is position about title',
                content:['this is first conetent',
                         'this is second content',
                         'this is third contnet'
                ],
                foot:'this is posiotion about foot',
                testcontent:{
                    quesstion:'can we lost name',
                    answer1:'yes ,we can',
                    answer2:'we find we can not'
                }
            },
            items2:[
                  'value1qwe',
                  {nameA:'valueNA1 about nameA'},
                  {nameA:'valueNA2 about nameA'},
                  {nameA:'valueNA3 about nameA'},
                  {nameB:'valueNB1 about nameB'},
                  {nameB:'valueNB2 about nameB'},

            ]

        }
    }
}
</script>>
