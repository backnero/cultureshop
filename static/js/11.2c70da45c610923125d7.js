webpackJsonp([11],{NOIT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("//Fk"),a=n.n(s),i={data:function(){return{isPhone:!1,data:[{isSelected:!0,content:5,title:"口罩",number:1},{isSelected:!0,content:1234.23,title:"aj",number:1}],state:!0,show:!1,messageConfig:{uploadImg:function(){return new a.a(function(t){setTimeout(function(){return t("https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg")},1e3)})},uploadMaxSize:3,placeholderMap:{text:"xxx",tel:"xxx"},initialMessages:{"留言":"留言信息"}},goods:{picture:"https://img.yzcdn.cn/"},sku:{tree:[{k:"规格",v:[{id:"1215",name:"250/g  一袋"},{id:"1216",name:"500/g  一盒"},{id:"1217",name:"1000/g  一箱"}],k_s:"s1"}],list:[{id:2259,price:1990,s1:"1215",stock_num:160},{id:2259,price:1990,s1:"1216",stock_num:120},{id:2259,price:1990,s1:"1217",stock_num:110}],price:"19.9",stock_num:227,collection_id:2259,none_sku:!1,hide_stock:!1}}},filters:{toFixed:function(t,e){return parseFloat(100*t)},toFixeds:function(t,e){return parseFloat(t).toFixed(e)}},computed:{checkAll:{get:function(){return this.data.every(function(t){return t.isSelected})},set:function(t){this.data.forEach(function(e){return e.isSelected=t})}},sum:function(){return this.data.reduce(function(t,e){return e.isSelected?t+e.content*e.number:t},0)},num:function(){return this.data.filter(function(t){return t.isSelected}).length},height:function(){return this.$store.getters.nav_height>60?this.isPhone=!0:this.isPhone=!1,this.$store.getters.nav_height}},methods:{onBuyClicked:function(){},onAddCartClicked:function(){},onSubmit:function(){},init:function(t){t.forEach(function(t){t.isSelected=!1}),this.data=t},goPath:function(t){this.$router.push({name:t})},onChange:function(t,e){var n=this;this.$toast.loading({forbidClick:!0}),setTimeout(function(){n.$toast.clear()},500)},chechange:function(t){t?this.num++:this.num--}},created:function(){},mounted:function(){},beforeRouteEnter:function(t,e,n){n()}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shoppingCart"},[n("div",{staticClass:"shoppingCart_head"},[n("van-row",{staticClass:"head_dz"},[n("van-col",{attrs:{span:"20"}},[t._v(t._s(t.height))]),t._v(" "),n("van-col",{attrs:{span:"4"}},[n("div",{staticClass:"h_center",on:{click:function(e){t.state=!t.state}}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.state,expression:"state"}]},[t._v("管理")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:0==t.state,expression:"state==false"}]},[t._v("完成")])])])],1)],1),t._v(" "),n("ul",t._l(t.data,function(e,s){return n("li",{key:s},[n("van-swipe-cell",{staticClass:"cell_swipe"},[n("van-checkbox",{on:{change:t.chechange},model:{value:e.isSelected,callback:function(n){t.$set(e,"isSelected",n)},expression:"item.isSelected"}}),t._v(" "),n("van-card",{staticClass:"goods-card",attrs:{price:t._f("toFixeds")(e.content,2),title:e.title,thumb:"https://img.yzcdn.cn/vant/cat.jpeg"}},[n("div",{attrs:{slot:"tags"},slot:"tags"},[n("div",[n("span",{on:{click:function(e){t.show=!0}}},[t._v("250/g 一袋")]),t._v(" "),n("van-icon",{attrs:{name:"play"}})],1)]),t._v(" "),n("div",{attrs:{slot:"bottom"},slot:"bottom"},[n("van-stepper",{staticStyle:{width:"92px"},attrs:{"async-change":""},on:{change:function(n){return t.onChange(e._id,e)}},model:{value:e.number,callback:function(n){t.$set(e,"number",n)},expression:"item.number"}})],1)]),t._v(" "),n("van-button",{staticClass:"delete-button",attrs:{slot:"right",square:"",text:"删除",type:"danger"},slot:"right"})],1)],1)}),0),t._v(" "),n("van-submit-bar",{directives:[{name:"show",rawName:"v-show",value:t.state,expression:"state"}],ref:"flxed_bar",class:t.isPhone?"flxed_bar_x":"flxed_bar",attrs:{"safe-area-inset-bottom":!1,price:t._f("toFixed")(t.sum,2),"button-text":"结算("+t.num+")"},on:{submit:function(e){return t.goPath("confirmOrders")}}},[n("van-checkbox",{model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[t._v("全选")])],1),t._v(" "),n("van-submit-bar",{directives:[{name:"show",rawName:"v-show",value:!t.state,expression:"!state"}],ref:"flxed_bar",class:t.isPhone?"flxed_bar_x":"flxed_bar",attrs:{"safe-area-inset-bottom":!1,"button-text":"删除"},on:{submit:t.onSubmit}},[n("van-checkbox",{model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[t._v("全选")])],1)],1)},staticRenderFns:[]};var c=n("VU/8")(i,o,!1,function(t){n("qbVz")},"data-v-5ddf5b9e",null);e.default=c.exports},qbVz:function(t,e){}});
//# sourceMappingURL=11.2c70da45c610923125d7.js.map