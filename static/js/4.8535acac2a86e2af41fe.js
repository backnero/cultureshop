webpackJsonp([4],{DE04:function(t,s){},"WcB/":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={data:function(){return{show:!1,data:[],search:"",active:0,form:{}}},mounted:function(){},methods:{goPath:function(t){this.$router.push({name:t})},save:function(){console.log(this.form)}}},e={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"mallList"},[i("div",{staticClass:"head_nav"},[i("van-search",{staticClass:"head_search",attrs:{placeholder:"请输入搜索关键词"},scopedSlots:t._u([{key:"left-icon",fn:function(){return[i("van-icon",{attrs:{"class-prefix":"iconfont iconsousuo",name:"iconsousuo"}})]},proxy:!0}]),model:{value:t.search,callback:function(s){t.search=s},expression:"search"}})],1),t._v(" "),i("div",{staticClass:"content_main"},[i("div",{staticClass:"tabs_item",attrs:{id:"item_i"}},[i("div",{staticClass:"item_right"},[i("div",{staticClass:"r_line"}),t._v(" "),i("div",{staticClass:"r_iconfont",on:{click:function(s){t.show=!0}}},[i("van-icon",{attrs:{name:"filter-o"}})],1)])]),t._v(" "),i("van-tabs",{attrs:{id:"tabs","title-active-color":"#7c322f",color:"#7c322f","line-height":"2","title-inactive-color":"#333333",swipeable:""},model:{value:t.active,callback:function(s){t.active=s},expression:"active"}},[i("van-tab",{attrs:{title:"综合"}},[i("div",{staticClass:"c_item",on:{click:function(s){return t.goPath("goodsInfo")}}},[i("div",{staticClass:"c_item_image"}),t._v(" "),i("div",{staticClass:"c_item_text"},[i("div",{staticClass:"c_item_text_head"},[i("div",{staticClass:"c_item_text_head_title"},[t._v("宁夏枸杞")]),t._v(" "),i("div",{staticClass:"c_item_text_head_tag"},[i("i",{staticClass:"iconitem iconfont icontianjia"})])]),t._v(" "),i("div",{staticClass:"c_item_text_describe"},[i("span",{staticClass:"c_item_text_describe_left"},[t._v("¥69.9")]),t._v(" "),i("span",{staticClass:"c_item_text_describe_right"},[t._v("包邮")])])])]),t._v(" "),i("div",{staticClass:"c_item"},[i("div",{staticClass:"c_item_image"}),t._v(" "),i("div",{staticClass:"c_item_text"},[i("div",{staticClass:"c_item_text_head"},[i("div",{staticClass:"c_item_text_head_title"},[t._v("苍术（已炒制）")]),t._v(" "),i("div",{staticClass:"c_item_text_head_tag"},[i("i",{staticClass:"iconitem iconfont icontianjia"})])]),t._v(" "),i("div",{staticClass:"c_item_text_describe"},[i("span",{staticClass:"c_item_text_describe_left"},[t._v("¥69.9")]),t._v(" "),i("span",{staticClass:"c_item_text_describe_right"},[t._v("包邮")])])])]),t._v(" "),i("div",{staticClass:"c_item"},[i("div",{staticClass:"c_item_image"}),t._v(" "),i("div",{staticClass:"c_item_text"},[i("div",{staticClass:"c_item_text_head"},[i("div",{staticClass:"c_item_text_head_title"},[t._v("苍术（已炒制）")]),t._v(" "),i("div",{staticClass:"c_item_text_head_tag"},[i("i",{staticClass:"iconitem iconfont icontianjia"})])]),t._v(" "),i("div",{staticClass:"c_item_text_describe"},[i("span",{staticClass:"c_item_text_describe_left"},[t._v("¥69.9")]),t._v(" "),i("span",{staticClass:"c_item_text_describe_right"},[t._v("包邮")])])])])]),t._v(" "),i("van-tab",{attrs:{title:"销量"}}),t._v(" "),i("van-tab",{attrs:{title:"新品"}}),t._v(" "),i("van-tab",{attrs:{title:"价格"}})],1)],1),t._v(" "),i("van-popup",{style:{width:"75%",height:"100%"},attrs:{position:"right"},model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[i("div",{staticClass:"popup_body"},[i("div",{staticClass:"header"},[i("span",[t._v("筛选")])]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"title"},[t._v("折扣和服务")]),t._v(" "),i("div",{staticClass:"tag-wrapper"},[i("div",{staticClass:"tag"},[i("span",[t._v("包邮")])]),t._v(" "),i("div",{staticClass:"tag"},[i("span",[t._v("消费者保障")])]),t._v(" "),i("div",{staticClass:"tag"},[i("span",[t._v("7+7天退货")])]),t._v(" "),i("div",{staticClass:"tag"},[i("span",[t._v("活动")])]),t._v(" "),i("div",{staticClass:"tag"},[i("span",[t._v("优惠")])])]),t._v(" "),i("div",{staticClass:"title"},[t._v("价格区间(元)")]),t._v(" "),i("div",{staticClass:"interval-wrapper"},[i("div",{staticClass:"interval"},[i("div",[i("div",{staticClass:"tag"},[i("interval-input",{attrs:{width:"45px",type:"text",placeholder:"最低价"},model:{value:t.form.min,callback:function(s){t.$set(t.form,"min",s)},expression:"form.min"}})],1)]),t._v(" "),i("div",[i("div",{staticClass:"line"})]),t._v(" "),i("div",[i("div",{staticClass:"tag"},[i("interval-input",{attrs:{width:"45px",type:"text",placeholder:"最高价"},model:{value:t.form.max,callback:function(s){t.$set(t.form,"max",s)},expression:"form.max"}})],1)])])])]),t._v(" "),i("div",{staticClass:"footer"},[i("div",{staticClass:"reset"},[t._v("重置")]),t._v(" "),i("div",{staticClass:"complete",on:{click:t.save}},[t._v("完成")])])])])],1)},staticRenderFns:[]};var c=i("VU/8")(a,e,!1,function(t){i("DE04")},"data-v-75dce262",null);s.default=c.exports}});
//# sourceMappingURL=4.8535acac2a86e2af41fe.js.map