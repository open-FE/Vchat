webpackJsonp([15],{"7Fpn":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("gyMJ"),s={name:"searchGroup",data:function(){return{huntKey:"",groupList:[],loadingSearch:!1,searchOptions:[{value:"2",label:"群名称"},{value:"1",label:"群号"}],type:"2"}},watch:{huntKey:function(){this.huntGroups()}},methods:{huntGroups:function(t){var e=this;if(!this.loadingSearch){if(!this.huntKey){if("click"===t)return;return this.loadingSearch=!0,void setTimeout(function(t){e.groupList=[],e.loadingSearch=!1},800)}this.loadingSearch=!0;var a={key:this.huntKey,offset:1,limit:8,type:this.type};n.a.huntGroups(a).then(function(t){0===t.code&&(e.groupList=t.data),e.loadingSearch=!1})}}},mounted:function(){}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vChat-searchGroup"},[a("p",{staticClass:"back"},[a("router-link",{attrs:{to:"/personalMain/group/ownGroup"}},[a("v-icon",{attrs:{name:"fanhui",cursor:"pointer"}})],1),t._v(" "),a("span",[t._v("查找群聊")])],1),t._v(" "),a("div",{staticClass:"Vchat-search group-search"},[a("el-select",{attrs:{placeholder:"请选择搜索方式"},on:{change:t.huntGroups},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.searchOptions,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("el-input",{attrs:{placeholder:"搜索内容",clearable:""},model:{value:t.huntKey,callback:function(e){t.huntKey=e},expression:"huntKey"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"append"},on:{click:function(e){t.huntGroups("click")}},slot:"append"})])],1),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingSearch,expression:"loadingSearch"}],staticClass:"search-contianer"},[a("ul",{directives:[{name:"show",rawName:"v-show",value:t.groupList.length,expression:"groupList.length"}],staticClass:"search-group-list"},t._l(t.groupList,function(e){return a("li",{key:t.groupList._id},[a("a",{attrs:{href:"javascript:;"}},[a("img",{attrs:{src:e.img,alt:""}})]),t._v(" "),a("div",[a("p",[t._v("\n                        "+t._s(e.title)+"\n                ")]),t._v(" "),a("p",[a("i",{staticClass:"icon-zhanghao iconfont"}),t._v("\n                        "+t._s(e.userNum)+"\n                ")]),t._v(" "),a("p",{staticClass:"vchat-line1",attrs:{title:e.desc}},[t._v("\n                        "+t._s(e.desc)+"\n                ")])])])})),t._v(" "),a("v-nodata",{directives:[{name:"show",rawName:"v-show",value:!t.groupList.length&&!t.loadingSearch,expression:"!groupList.length && !loadingSearch"}]},[a("p",{staticClass:"Vchat-no-have"},[t._v("\n                没有找到想要的，"),a("router-link",{attrs:{to:"/personalMain/group/setGroup"}},[t._v("新建")]),t._v(" 一个吧！\n        ")],1)])],1)])},staticRenderFns:[]};var r=a("C7Lr")(s,i,!1,function(t){a("uYc0")},"data-v-15a81a86",null);e.default=r.exports},uYc0:function(t,e){}});