(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-songDetail-index"],{"0410":function(e,t,i){var a=i("24fb"),n=i("1de5"),r=i("516f");t=a(!1);var o=n(r);t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.song-detail-container[data-v-587a96ac]{width:100%;height:100%}.song-detail-container .vague-wrapper[data-v-587a96ac]{height:30%;width:100%;background-image:url('+o+');position:relative}.song-detail-container .vague-wrapper .head-title[data-v-587a96ac]{color:#fff;position:absolute;top:0;width:100%;z-index:9999}.song-detail-container .vague-wrapper .day-recommend-info[data-v-587a96ac]{-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%}.song-detail-container .vague-wrapper .day-recommend-info .bgImg[data-v-587a96ac]{width:%?200?%;-webkit-border-radius:8px;border-radius:8px;margin-right:20px}.song-detail-container .vague-wrapper .day-recommend-info .song-info[data-v-587a96ac]{margin-bottom:%?12?%;color:#fff;max-width:calc(100% - 175px)}.song-detail-container .vague-wrapper .day-recommend-info .song-info .name[data-v-587a96ac]{font-size:%?32?%}.song-detail-container .vague-wrapper .day-recommend-info .song-info .content[data-v-587a96ac]{margin:%?15?% 0;color:#fff}.song-detail-container .vague-wrapper .day-recommend-info .song-info .content .avatar[data-v-587a96ac]{width:25px;height:25px;-webkit-border-radius:50%;border-radius:50%;display:inline-block;vertical-align:middle;margin-right:6px}.song-detail-container .vague-wrapper .day-recommend-info .song-info .description[data-v-587a96ac]{font-size:%?24?%;color:#e1d7f0;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-height:18px}.song-detail-container .recommend-main[data-v-587a96ac]{height:70%;width:100%;position:relative}.song-detail-container .recommend-main.hasPlayInfo[data-v-587a96ac]{height:calc(70% - %?110?%)}.song-detail-container .recommend-main .recommend-list[data-v-587a96ac]{position:absolute;top:-5%;left:0;right:0;bottom:0;background:#fff;-webkit-border-top-left-radius:26px;border-top-left-radius:26px;-webkit-border-top-right-radius:26px;border-top-right-radius:26px}.song-detail-container .recommend-main .recommend-list .music-title[data-v-587a96ac]{padding-left:20px;margin:15px 0;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;font-size:%?32?%;font-weight:600}.song-detail-container .recommend-main .recommend-list .music-title .playIcon[data-v-587a96ac]{margin-right:8px;font-size:%?40?%}.song-detail-container .recommend-main .recommend-list .music-title .light-text[data-v-587a96ac]{font-size:%?24?%;margin-left:6px;color:rgba(0,0,0,.5)}.song-detail-container .recommend-main .recommend-list .music-item[data-v-587a96ac]{height:70px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 20px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:10px;width:100%}.song-detail-container .recommend-main .recommend-list .music-item[data-v-587a96ac]:nth-last-of-type{margin-bottom:0}.song-detail-container .recommend-main .recommend-list .music-item.active[data-v-587a96ac]{background-image:-webkit-gradient(linear,left top,right top,from(rgba(247,73,79,.1)),to(rgba(247,73,79,.05)));background-image:-webkit-linear-gradient(left,rgba(247,73,79,.1),rgba(247,73,79,.05));background-image:linear-gradient(90deg,rgba(247,73,79,.1),rgba(247,73,79,.05))}.song-detail-container .recommend-main .recommend-list .music-item.active .music-info .music-name[data-v-587a96ac],\r\n.song-detail-container .recommend-main .recommend-list .music-item.active .music-info .small-icon[data-v-587a96ac],\r\n.song-detail-container .recommend-main .recommend-list .music-item.active .music-info .music-singer[data-v-587a96ac]{color:#f84e51!important}.song-detail-container .recommend-main .recommend-list .music-item.active .music-info[data-v-587a96ac]::before{content:"";width:4px;height:65px;background-image:-webkit-gradient(linear,left top,left bottom,from(#fd7566),to(#f7494f));background-image:-webkit-linear-gradient(top,#fd7566,#f7494f);background-image:linear-gradient(180deg,#fd7566,#f7494f);position:absolute;left:0;top:3px}.song-detail-container .recommend-main .recommend-list .music-item .music-img[data-v-587a96ac]{width:58px;-webkit-border-radius:6px;border-radius:6px}.song-detail-container .recommend-main .recommend-list .music-item .music-info[data-v-587a96ac]{margin-left:15px;max-width:calc(100% - 75px)}.song-detail-container .recommend-main .recommend-list .music-item .music-info .music-name[data-v-587a96ac]{font-size:%?30?%;margin-bottom:7px;color:#000}.song-detail-container .recommend-main .recommend-list .music-item .music-info .music-singer[data-v-587a96ac]{color:rgba(0,0,0,.5);font-size:%?24?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.song-detail-container .recommend-main .recommend-list .music-item .music-info .music-singer .small-icon[data-v-587a96ac]{margin-right:6px;-webkit-transform:scale(.9);transform:scale(.9);color:rgba(0,0,0,.5);font-size:12px;padding:1px 3px;border:1px solid rgba(0,0,0,.2);-webkit-border-radius:4px;border-radius:4px}',""]),e.exports=t},"0fc5":function(e,t,i){"use strict";i.r(t);var a=i("b2e9"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},"1de5":function(e,t,i){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},"38d1":function(e,t,i){"use strict";i.r(t);var a=i("b591"),n=i("0fc5");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("5c13");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"587a96ac",null,!1,a["a"],o);t["default"]=s.exports},"516f":function(e,t,i){e.exports=i.p+"static/img/background.01d212c7.png"},"5c13":function(e,t,i){"use strict";var a=i("fcad"),n=i.n(a);n.a},b2e9:function(e,t,i){"use strict";var a=i("4ea4");i("a15b"),i("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var n=a(i("1da1")),r=i("df46"),o=i("2f62"),c={data:function(){return{currentPlayList:{},musicList:[],bgImg:""}},onLoad:function(e){this.getPlayDetail(e.id)},computed:(0,o.mapState)({playInfo:function(e){return e.playInfo}}),methods:{getPlayDetail:function(e){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var a,n,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return uni.showLoading({title:"加载中..."}),i.next=3,t.$api.getPlayListData({id:e});case 3:return a=i.sent,t.currentPlayList=a.playlist||[],t.bgImg=t.currentPlayList.coverImgUrl+"param?300y300",n=a.playlist.trackIds.map((function(e){return e.id})).join(","),i.next=9,t.$api.getPlayDetail({ids:n});case 9:r=i.sent,t.musicList=r.songs||[],uni.hideLoading();case 12:case"end":return i.stop()}}),i)})))()},handlePlayMusic:function(e){this.playInfo.id!=e.id?this.$store.dispatch("playMusic",{src:"",title:e.name,singer:(0,r.getName)(e),coverImgUrl:(0,r.getImage)(e),id:e.id}):uni.navigateTo({url:"../play/index"})},handlePlayAllMusic:function(){var e=this.musicList.map((function(e){return{src:"",title:e.name,singer:(0,r.getName)(e),coverImgUrl:(0,r.getImage)(e),id:e.id}}));this.$store.dispatch("playAllMUsic",e)}}};t.default=c},b591:function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"song-detail-container"},[i("v-uni-view",{staticClass:"vague-wrapper bg-img bg-mask flex align-center"},[i("cu-custom",{staticClass:"head-title",attrs:{isBack:!0,bgColor:"unset"}},[i("template",{attrs:{slot:"content"},slot:"content"},[e._v("歌单详情")])],2),i("v-uni-view",{staticClass:"day-recommend-info",style:{"padding-top":e.CustomBar+"px"}},[i("v-uni-image",{staticClass:"bgImg",attrs:{src:e.bgImg,mode:"widthFix"}}),i("v-uni-view",{staticClass:"song-info"},[i("v-uni-view",{staticClass:"name text-overflow"},[e._v(e._s(e.currentPlayList.name))]),e.currentPlayList.creator?i("v-uni-view",{staticClass:"content"},[i("v-uni-image",{staticClass:"avatar",attrs:{src:e.currentPlayList.creator.avatarUrl+"?param45y45",mode:""}}),e._v(e._s(e.currentPlayList.creator.nickname))],1):e._e(),e.currentPlayList.description?i("v-uni-view",{staticClass:"description"},[e._v("简介："+e._s(e.currentPlayList.description))]):e._e()],1)],1)],1),i("v-uni-view",{staticClass:"recommend-main",class:{hasPlayInfo:e.playInfo.id}},[i("v-uni-view",{staticClass:"recommend-list"},[i("v-uni-view",{staticClass:"music-title",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handlePlayAllMusic.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont icon-kaishi3 basic-icon-color playIcon"}),e._v("全部播放"),i("v-uni-text",{staticClass:"light-text"},[e._v("(共"+e._s(e.musicList.length)+"首)")])],1),i("v-uni-scroll-view",{staticStyle:{height:"calc(100% - 55px)"},attrs:{"scroll-y":!0,"scroll-with-animation":!0}},e._l(e.musicList,(function(t,a){return i("v-uni-view",{key:t.id,staticClass:"music-item flex",class:{active:t.id==e.playInfo.id},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.handlePlayMusic(t)}}},[i("v-uni-image",{staticClass:"music-img",attrs:{src:t.al.picUrl+"?param=60y60",mode:"widthFix"}}),i("v-uni-view",{staticClass:"music-info"},[i("v-uni-view",{staticClass:"music-name text-overflow"},[e._v(e._s(t.name))]),i("v-uni-view",{staticClass:"music-singer text-overflow flex"},[i("span",{staticClass:"small-icon"},[e._v(e._s(t.id%2==0?"SQ":"HD"))]),e._v(e._s(t.ar?t.ar.map((function(e){return e.name})).join("/"):""))])],1)],1)})),1)],1)],1),e.playInfo.id?i("music-control"):e._e()],1)},r=[]},df46:function(e,t,i){"use strict";function a(e,t,i){var a,n,r,o,c,s=function s(){var l=+new Date-o;l<t&&l>0?a=setTimeout(s,t-l):(a=null,i||(c=e.apply(r,n),a||(r=n=null)))};return function(){for(var n=arguments.length,l=new Array(n),d=0;d<n;d++)l[d]=arguments[d];r=this,o=+new Date;var m=i&&!a;return a||(a=setTimeout(s,t)),m&&(c=e.apply(r,l),r=l=null),c}}function n(e){return!e||e<=0?0:e<1e3?e:e>=1e3&&e<1e4?Math.ceil(e/1e3)+"千":e>=1e4&&e<1e8?Math.ceil(e/1e4)+"万":Math.ceil(e/1e8)+"亿"}function r(e){var t="";return e.picUrl?t=e.picUrl:e.album?t=e.album.picUrl:e.al&&(t=e.al.picUrl),t?t+"?param=300y300":null}function o(e){return e.song?e.song.artists[0].name:e.artists?e.artists[0].name:e.ar?e.ar[0].name:void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.debounce=a,t.filterPlayCount=n,t.getImage=r,t.getName=o},fcad:function(e,t,i){var a=i("0410");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("1598cb12",a,!0,{sourceMap:!1,shadowMode:!1})}}]);