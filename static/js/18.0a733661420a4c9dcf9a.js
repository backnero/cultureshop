webpackJsonp([18],{"6AjH":function(t,a){},oDXO:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={components:{},props:{},data:function(){return{radio:1,show:!1,active:0,list:[],loading:!1,finished:!1}},watch:{},computed:{},methods:{onLoad:function(){var t=this;setTimeout(function(){for(var a=0;a<5;a++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=40&&(t.finished=!0)},1e3)},cancel:function(){console.log(1)},path:function(t){this.$router.push({name:t})}},created:function(){},mounted:function(){}},n={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"ambassador-container"},[i("div",{staticClass:"header"},[i("div",{staticClass:"card-wrapper"},[i("div",{staticClass:"one"},[i("div",{staticClass:"user"},[i("van-image",{attrs:{round:"",width:"50",height:"50",src:"https://img.yzcdn.cn/vant/cat.jpeg"}}),t._v(" "),i("div",{staticClass:"info"},[i("div",[i("span",[t._v("刘美丽")]),t._v(" "),i("van-icon",{attrs:{"class-prefix":"iconfont icondengji",name:"icondengji"}}),t._v(" "),i("span",{staticClass:"level"},[t._v("1")])],1),t._v(" "),t._m(0)])],1),t._v(" "),i("div",{staticClass:"commission_button"},[i("span",{on:{click:function(a){return t.path("ambassadorBrokerageInfo")}}},[t._v("明细")]),t._v(" "),i("span",{staticClass:"button",on:{click:function(a){return t.path("ambassadorBrokerageExtract")}}},[t._v("佣金提取")])])]),t._v(" "),t._m(1)]),t._v(" "),i("div",{staticClass:"preferential-wrapper",on:{click:function(a){t.show=!0}}},[t._m(2),t._v(" "),i("div",{staticClass:"right-wrapper"},[i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"item"},[t._m(3),t._v(" "),i("div",[i("van-icon",{attrs:{"class-prefix":"iconfont iconyou",name:"iconyou"}})],1)])])])]),t._v(" "),i("van-tabs",{staticClass:"tabs",attrs:{"title-active-color":"#7c322f",color:"#7c322f","line-width":"70","line-height":"2","title-inactive-color":"#666666",swipeable:""},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[i("van-tab",{attrs:{title:"有效优惠吗"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.list,function(a){return i("div",{key:a,staticClass:"cell"},[i("div",{staticClass:"right"},[i("van-image",{attrs:{round:"",width:"50",height:"50",src:"../../../static/image/ambassador_icon.png"}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"title"},[i("span",{staticClass:"bold",staticStyle:{"margin-right":"5px"}},[t._v("9折优惠码：AK728")]),t._v(" "),i("span",[t._v("有效期15天")])]),t._v(" "),i("div",{staticClass:"label"},[i("span",[t._v("\n                  未支付订单12个,已确认订单20个\n                  "),i("span",{on:{click:function(a){return t.path("ambassadorDiscountsInfo")}}},[t._v("\n                    详情\n                    "),i("van-icon",{attrs:{"class-prefix":"iconfont iconyou",name:"iconyou"}})],1)])])])],1),t._v(" "),i("div",{staticClass:"left"},[i("span",{staticClass:"sum"},[i("span",[t._v("¥")]),t._v(" "),i("span",{staticClass:"bold"},[t._v("56")])]),t._v(" "),i("span",{staticClass:"button",on:{click:function(a){return a.stopPropagation(),t.cancel(a)}}},[t._v("取消优惠")])])])}),0)],1),t._v(" "),i("van-tab",{attrs:{title:"失效优惠码"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.list,function(a){return i("div",{key:a,staticClass:"cell"},[i("div",{staticClass:"right"},[i("van-image",{attrs:{round:"",width:"50",height:"50",src:"../../../static/image/ambassador_icons.png"}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"title"},[i("span",{staticClass:"bold",staticStyle:{"margin-right":"5px"},on:{click:function(a){return t.path("ambassadorBrokerageInfo")}}},[t._v("9折优惠码：AK728")]),t._v(" "),i("span",[t._v("有效期15天")])]),t._v(" "),i("div",{staticClass:"label"},[i("span",[t._v("\n                  未支付订单12个,已确认订单20个\n                  "),i("span",{on:{click:function(a){return t.path("ambassadorDiscountsInfo")}}},[t._v("\n                    详情\n                    "),i("van-icon",{attrs:{"class-prefix":"iconfont iconyou",name:"iconyou"}})],1)])])])],1),t._v(" "),i("div",{staticClass:"left"},[i("span",{staticClass:"sum"},[i("span",[t._v("¥")]),t._v(" "),i("span",{staticClass:"bold"},[t._v("56")])]),t._v(" "),i("span",{staticClass:"failure"},[t._v("已失效")])])])}),0)],1)],1),t._v(" "),i("van-popup",{attrs:{round:""},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"block",style:{height:"100%"},on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"title-wrapper"},[t._v("\n          选择折扣\n          "),i("i",{staticClass:"iconfont iconcha right-icon",on:{click:function(a){t.show=!1}}})]),t._v(" "),i("div",{staticClass:"content-wrapper"},[i("van-radio-group",{model:{value:t.radio,callback:function(a){t.radio=a},expression:"radio"}},[i("van-cell-group",[i("van-cell",{attrs:{title:"9折",clickable:""},on:{click:function(a){t.radio="1"}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[i("van-radio",{attrs:{name:"1"}})]},proxy:!0}])}),t._v(" "),i("van-cell",{attrs:{title:"8折",clickable:""},on:{click:function(a){t.radio="2"}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[i("van-radio",{attrs:{name:"2"}})]},proxy:!0}])}),t._v(" "),i("van-cell",{attrs:{title:"7折",clickable:""},on:{click:function(a){t.radio="3"}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[i("van-radio",{attrs:{name:"3"}})]},proxy:!0}])}),t._v(" "),i("van-cell",{attrs:{title:"6折",clickable:""},on:{click:function(a){t.radio="4"}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[i("van-radio",{attrs:{name:"4"}})]},proxy:!0}])})],1)],1)],1),t._v(" "),i("div",{staticClass:"footer-wrapper"},[i("div",{on:{click:function(a){t.show=!1}}},[t._v("取消")]),t._v(" "),i("div",[t._v("确认")])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("span",[this._v("官方认证推广大使")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"two"},[a("div",[a("span",[this._v("当前可提取佣金")])]),this._v(" "),a("div",[a("span",[this._v("¥")]),this._v(" "),a("span",{staticClass:"sum"},[this._v("888")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"title-wrapper"},[a("span",[this._v("推广大使")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"title"},[this._v("点击生成优惠码")]),this._v(" "),a("div",{staticClass:"desc"},[this._v("已生成18个优惠码")])])}]};var c=i("VU/8")(s,n,!1,function(t){i("6AjH")},"data-v-1a7487f5",null);a.default=c.exports}});
//# sourceMappingURL=18.0a733661420a4c9dcf9a.js.map