(function(e){function t(t){for(var n,o,r=t[0],l=t[1],c=t[2],u=0,p=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={index:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("c31f")},"42b1":function(e,t,a){"use strict";var n=a("f381"),s=a.n(n);s.a},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=i,e.exports=s,s.id="4678"},"6dc4":function(e,t,a){"use strict";var n=a("ba5b"),s=a.n(n);s.a},"8a46":function(e,t,a){},ba5b:function(e,t,a){},c31f:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"title"},[e._v(" Demo ")]),a("div",{staticClass:"container"},[a("pre",[e._v(e._s(e.tree))]),a("json-schema-editor",{staticClass:"schema",attrs:{value:e.tree,disabledType:"",lang:"zh_CN",custom:""}})],1)])},i=[],o={name:"App",data:function(){return{tree:{root:{type:"object",title:"条件",properties:{name:{type:"string",title:"名称",maxLength:10,minLength:2},appId:{type:"integer",title:"应用ID"},credate:{type:"string",title:"创建日期",format:"date"}},required:["name","appId","credate"]}}}}},r=o,l=(a("42b1"),a("2877")),c=Object(l["a"])(r,s,i,!1,null,null,null),d=c.exports,u=(a("d81d"),a("b0c0"),a("5530")),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"json-schema-editor"},[a("a-row",{staticClass:"row",attrs:{gutter:10}},[a("a-col",{staticClass:"ant-col-name",attrs:{span:8}},[a("div",{staticClass:"ant-col-name-c",style:{marginLeft:20*e.deep+"px"}},["object"===e.pickValue.type?a("a-button",{staticStyle:{color:"rgba(0,0,0,.65)"},attrs:{type:"link",icon:e.hidden?"caret-right":"caret-down"},on:{click:function(t){e.hidden=!e.hidden}}}):a("span",{staticStyle:{width:"32px",display:"inline-block"}}),a("a-input",{staticClass:"ant-col-name-input",attrs:{disabled:e.disabled||e.root,value:e.pickKey},on:{blur:e.onInputName}})],1),e.root?a("a-tooltip",[a("span",{attrs:{slot:"title"},domProps:{textContent:e._s(e.local["checked_all"])},slot:"title"},[e._v("全选")]),a("a-checkbox",{staticClass:"ant-col-name-required",attrs:{disabled:!e.isObject&&!e.isArray},on:{change:e.onRootCheck}})],1):a("a-tooltip",[a("span",{attrs:{slot:"title"},domProps:{textContent:e._s(e.local["required"])},slot:"title"},[e._v("是否必填")]),a("a-checkbox",{staticClass:"ant-col-name-required",attrs:{disabled:e.isItem,checked:e.checked},on:{change:e.onCheck}})],1)],1),a("a-col",{attrs:{span:4}},[a("a-select",{staticClass:"ant-col-type",attrs:{disabled:e.disabledType,getPopupContainer:function(t){return t.parentNode||e.document.body}},on:{change:e.onChangeType},model:{value:e.pickValue.type,callback:function(t){e.$set(e.pickValue,"type",t)},expression:"pickValue.type"}},e._l(e.TYPE_NAME,(function(t){return a("a-select-option",{key:t},[e._v(" "+e._s(t)+" ")])})),1)],1),a("a-col",[a("a-input",{staticClass:"ant-col-title",attrs:{placeholder:e.local["title"]},model:{value:e.pickValue.title,callback:function(t){e.$set(e.pickValue,"title",t)},expression:"pickValue.title"}})],1),a("a-col",{staticClass:"ant-col-setting",attrs:{span:6}},[a("a-tooltip",[a("span",{attrs:{slot:"title"},domProps:{textContent:e._s(e.local["adv_setting"])},slot:"title"},[e._v("高级设置")]),a("a-button",{staticClass:"setting-icon",attrs:{type:"link",icon:"setting"},on:{click:e.onSetting}})],1),e.isObject?a("a-tooltip",[a("span",{attrs:{slot:"title"},domProps:{textContent:e._s(e.local["add_child_node"])},slot:"title"},[e._v("添加子节点")]),a("a-button",{staticClass:"plus-icon",attrs:{type:"link",icon:"plus"},on:{click:e.addChild}})],1):e._e(),e.root||e.isItem?e._e():a("a-tooltip",[a("span",{attrs:{slot:"title"},domProps:{textContent:e._s(e.local["remove_node"])},slot:"title"},[e._v("删除节点")]),a("a-button",{staticClass:"close-icon ant-btn-icon-only",attrs:{type:"link"},on:{click:e.removeNode}},[a("i",{staticClass:"anticon anticon-plus",attrs:{"aria-label":"icon: plus"}},[a("svg",{attrs:{viewBox:"64 64 896 896","data-icon":"plus",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"}},[a("path",{attrs:{d:"M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512z","p-id":"1142"}})])])])],1)],1)],1),e.hidden||!e.pickValue.properties||e.isArray?e._e():e._l(e.pickValue.properties,(function(t,n,s){var i;return a("json-schema-editor",{key:s,staticClass:"children",attrs:{value:(i={},i[n]=t,i),parent:e.pickValue,deep:e.deep+1,root:!1,lang:e.lang,custom:e.custom}})})),e.isArray?[a("json-schema-editor",{staticClass:"children",attrs:{value:{items:e.pickValue.items},deep:e.deep+1,disabled:"",isItem:"",root:!1,lang:e.lang,custom:e.custom}})]:e._e(),a("a-modal",{attrs:{title:e.local["adv_setting"],maskClosable:!1,okText:e.local["ok"],cancelText:e.local["cancel"],width:"800px",dialogClass:"json-schema-editor-advanced-modal"},on:{ok:e.handleOk},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[a("h3",{domProps:{textContent:e._s(e.local["base_setting"])}},[e._v("基础设置")]),a("a-form",{staticClass:"ant-advanced-search-form",model:{value:e.advancedValue,callback:function(t){e.advancedValue=t},expression:"advancedValue"}},[a("a-row",{attrs:{gutter:6}},e._l(e.advancedValue,(function(t,n){return a("a-col",{key:n,attrs:{span:8}},[a("a-form-item",[a("span",[e._v(e._s(e.local[n]))]),"integer"===e.advancedAttr[n].type||"number"===e.advancedAttr[n].type?a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:n},model:{value:e.advancedValue[n],callback:function(t){e.$set(e.advancedValue,n,t)},expression:"advancedValue[key]"}}):"boolean"===e.advancedAttr[n].type?a("span",{staticStyle:{display:"inline-block",width:"100%"}},[a("a-switch",{model:{value:e.advancedValue[n],callback:function(t){e.$set(e.advancedValue,n,t)},expression:"advancedValue[key]"}})],1):"array"===e.advancedAttr[n].type?a("a-select",{staticStyle:{width:"100%"},attrs:{getPopupContainer:function(t){return t.parentNode||e.document.body},placeholder:e.local[n]},model:{value:e.advancedValue[n],callback:function(t){e.$set(e.advancedValue,n,t)},expression:"advancedValue[key]"}},[a("a-select-option",{attrs:{value:""}},[e._v(e._s(e.local["nothing"]))]),e._l(e.advancedAttr[n].enums,(function(t){return a("a-select-option",{key:t},[e._v(" "+e._s(t)+" ")])}))],2):a("a-input",{staticStyle:{width:"100%"},attrs:{placeholder:n},model:{value:e.advancedValue[n],callback:function(t){e.$set(e.advancedValue,n,t)},expression:"advancedValue[key]"}})],1)],1)})),1)],1),a("h3",{directives:[{name:"show",rawName:"v-show",value:e.custom,expression:"custom"}],domProps:{textContent:e._s(e.local["add_custom"])}},[e._v("添加自定义属性")]),a("a-form",{directives:[{name:"show",rawName:"v-show",value:e.custom,expression:"custom"}],staticClass:"ant-advanced-search-form"},[a("a-row",{attrs:{gutter:6}},[e._l(e.customProps,(function(t){return a("a-col",{key:t.key,attrs:{span:8}},[a("a-form-item",{attrs:{label:t.key}},[a("a-input",{staticStyle:{width:"calc(100% - 30px)"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}}),a("a-button",{staticStyle:{width:"30px"},attrs:{icon:"close",type:"link"},on:{click:function(a){e.customProps.splice(e.customProps.indexOf(t),1)}}})],1)],1)})),a("a-col",{directives:[{name:"show",rawName:"v-show",value:void 0!=e.addProp.key,expression:"addProp.key != undefined"}],attrs:{span:8}},[a("a-form-item",[a("a-input",{staticStyle:{width:"100px"},attrs:{slot:"label"},slot:"label",model:{value:e.addProp.key,callback:function(t){e.$set(e.addProp,"key",t)},expression:"addProp.key"}}),a("a-input",{staticStyle:{width:"100%"},model:{value:e.addProp.value,callback:function(t){e.$set(e.addProp,"value",t)},expression:"addProp.value"}})],1)],1),a("a-col",{attrs:{span:8}},[a("a-form-item",[e.customing?a("a-button",{attrs:{icon:"check",type:"link"},on:{click:e.confirmAddCustomNode}}):a("a-tooltip",{attrs:{title:e.local["add_custom"]}},[a("a-button",{attrs:{icon:"plus",type:"link"},on:{click:e.addCustomNode}})],1)],1)],1)],2)],1),a("h3",{domProps:{textContent:e._s(e.local["preview"])}},[e._v("预览")]),a("pre",{staticStyle:{width:"100%"}},[e._v(e._s(e.completeNodeValue))])],1)],2)},m=[],f=(a("99af"),a("4de4"),a("4160"),a("c975"),a("a434"),a("a9e3"),a("b64b"),a("07ac"),a("159b"),a("b85c")),h=(a("055b"),a("160c")),b=(a("c721"),a("3af3")),v=(a("04f3"),a("ed3b")),j=(a("9e39"),a("f933")),y=(a("02cf"),a("9839")),k=(a("20c5"),a("bb76")),g=(a("a106"),a("09d9")),_=(a("a71a"),a("b558")),x=(a("805a"),a("0c63")),V=(a("e1f5"),a("5efb")),C=(a("1815"),a("e32c")),w=(a("50ac"),a("9a63"));function P(e){return"undefined"===typeof e||(null==e||""==e)}var O={description:null,maxProperties:null,minProperties:null},A={description:{name:"描述",type:"string"},maxProperties:{name:"最大元素个数",type:"integer"},minProperties:{name:"最小元素个数",type:"integer"}},$={value:O,attr:A},N=$,q={description:null,maxLength:null,minLength:null,pattern:null,format:null},I={description:{name:"描述",type:"string"},maxLength:{name:"最大字符数",type:"integer"},minLength:{name:"最小字符数",type:"integer"},pattern:{name:"正则表达式",type:"string"},format:{name:"格式",type:"array",enums:["date","date-time","email","hostname","ipv4","ipv6","uri"]}},M={value:q,attr:I},S=M,z={description:null,minItems:null,maxItems:null,uniqueItems:!1},T={description:{name:"描述",type:"string"},maxItems:{name:"最大元素个数",type:"integer"},minItems:{name:"最小元素个数",type:"integer"},uniqueItems:{name:"元素不可重复",type:"boolean"}},L={value:z,attr:T},E=L,K={description:null},B={description:{name:"描述",type:"string"}},D={value:K,attr:B},R=D,U={description:null,maximum:null,minimum:null,exclusiveMaximum:null,exclusiveMinimum:null},F={description:{name:"描述",type:"string"},maximum:{name:"最大值",type:"integer"},minimum:{name:"最小值",type:"integer"},exclusiveMaximum:{name:"不包含最大值",type:"boolean"},exclusiveMinimum:{name:"不包含最小值",type:"boolean"}},J={value:U,attr:F},Y=J,H={description:null,maximum:null,minimum:null,exclusiveMaximum:null,exclusiveMinimum:null},G={description:{name:"描述",type:"string"},maximum:{name:"最大值",type:"number"},minimum:{name:"最小值",type:"number"},exclusiveMaximum:{name:"不包含最大值",type:"boolean"},exclusiveMinimum:{name:"不包含最小值",type:"boolean"}},Q={value:H,attr:G},W=Q,X=["string","number","integer","object","array","boolean"],Z={object:N,string:S,array:E,boolean:R,integer:Y,number:W},ee={en_US:{title:"Title",import_json:"Import JSON",base_setting:"Base Setting",all_setting:"Source Code",default:"Default",description:"Description",adv_setting:"Advanced Settings",add_child_node:"Add child node",add_sibling_node:"Add sibling nodes",add_node:"Add sibling/child nodes",remove_node:"Remove node",child_node:"Child node",sibling_node:"Sibling node",ok:"OK",cancel:"Cancel",minLength:"Min length",maxLength:"Max length",pattern:"MUST be a valid regular expression.",exclusiveMinimum:"Value strictly less than",exclusiveMaximum:"Value strictly more than",minimum:"Min",maximum:"Max",uniqueItems:"Unique Items",minItems:"MinItems",maxItems:"MaxItems",minProperties:"MinProperties",maxProperties:"MaxProperties",checked_all:"Checked All",valid_json:"Not valid json",enum:"Enum",enum_msg:"One value per line",enum_desc:"desc",enum_desc_msg:"enum description",required:"Required",mock:"mock",mockLink:"Help",format:"Format",nothing:"Nothing",preview:"Preview",add_custom:"Add Custom Prop"},zh_CN:{title:"标题",import_json:"导入 json",base_setting:"基础设置",all_setting:"编辑源码",default:"默认值",description:"描述",adv_setting:"高级设置",add_child_node:"添加子节点",add_sibling_node:"添加兄弟节点",add_node:"添加兄弟/子节点",remove_node:"删除节点",child_node:"子节点",sibling_node:"兄弟节点",ok:"确定",cancel:"取消",minLength:"最小长度",maxLength:"最大长度",pattern:"用正则表达式约束字符串",exclusiveMinimum:"开启后，数据必须大于最小值",exclusiveMaximum:"开启后，数据必须小于最大值",minimum:"最小值",maximum:"最大值",uniqueItems:"开启后，每个元素都不相同",minItems:"最小元素个数",maxItems:"最大元素个数",minProperties:"最小元素个数",maxProperties:"最大元素个数",checked_all:"全选",valid_json:"不是合法的json字符串",enum:"枚举",enum_msg:"每行只能写一个值",enum_desc:"备注",enum_desc_msg:"备注描述信息",required:"是否必须",mock:"mock",mockLink:"查看文档",format:"格式化",nothing:"无",preview:"预览",add_custom:"添加自定义属性"}},te=function(e){return ee[e]},ae={name:"JsonSchemaEditor",components:{ARow:w["a"],ACol:C["a"],AButton:V["a"],AIcon:x["a"],AInput:_["a"],AInputNumber:g["a"],ACheckbox:k["a"],ASelect:y["a"],ASelectOption:y["a"].Option,ATooltip:j["a"],AModal:v["a"],AForm:b["a"],AFormItem:b["a"].Item,ASwitch:h["a"]},props:{value:{type:Object,required:!0},disabled:{type:Boolean,default:!1},disabledType:{type:Boolean,default:!1},isItem:{type:Boolean,default:!1},deep:{type:Number,default:0},root:{type:Boolean,default:!0},parent:{type:Object,default:null},custom:{type:Boolean,default:!1},lang:{type:String,default:"zh_CN"}},computed:{pickValue:function(){return Object.values(this.value)[0]},pickKey:function(){return Object.keys(this.value)[0]},isObject:function(){return"object"===this.pickValue.type},isArray:function(){return"array"===this.pickValue.type},checked:function(){return this.parent&&this.parent.required&&this.parent.required.indexOf(this.pickKey)>=0},advanced:function(){return Z[this.pickValue.type]},advancedAttr:function(){return Z[this.pickValue.type].attr},advancedNotEmptyValue:function(){var e=Object.assign({},this.advancedValue);for(var t in e)P(e[t])&&delete e[t];return e},completeNodeValue:function(){var e,t={},a=Object(f["a"])(this.customProps);try{for(a.s();!(e=a.n()).done;){var n=e.value;t[n.key]=n.value}}catch(s){a.e(s)}finally{a.f()}return Object.assign({},this.pickValue,this.advancedNotEmptyValue,t)}},data:function(){return{TYPE_NAME:X,hidden:!1,countAdd:1,modalVisible:!1,advancedValue:{},addProp:{},customProps:[],customing:!1,local:te(this.lang)}},methods:{onInputName:function(e){var t=e.target.value,a={};for(var n in this.parent.properties)n!=this.pickKey?a[n]=this.parent.properties[n]:(a[t]=this.parent.properties[n],delete this.parent.properties[n]);this.$set(this.parent,"properties",a);var s=this.parent.required;s&&s.length>0&&this.$set(this.parent,"required",s.filter((function(e){return a[e]})))},onChangeType:function(){this.$delete(this.pickValue,"properties"),this.$delete(this.pickValue,"items"),this.$delete(this.pickValue,"required"),this.isArray&&this.$set(this.pickValue,"items",{type:"string"})},onCheck:function(e){this._checked(e.target.checked,this.parent)},onRootCheck:function(e){var t=e.target.checked;this._deepCheck(t,this.pickValue)},_deepCheck:function(e,t){var a=this;"object"===t.type&&t.properties?(e?this.$set(t,"required",Object.keys(t.properties)):this.$delete(t,"required"),Object.keys(t.properties).forEach((function(n){return a._deepCheck(e,t.properties[n])}))):"array"===t.type&&"object"===t.items.type&&(e?this.$set(t.items,"required",Object.keys(t.items.properties)):this.$delete(t.items,"required"),Object.keys(t.items.properties).forEach((function(n){return a._deepCheck(e,t.items.properties[n])})))},_checked:function(e,t){var a=t.required;if(e)a||this.$set(this.parent,"required",[]),a=this.parent.required,-1===a.indexOf(this.pickKey)&&a.push(this.pickKey);else{var n=a.indexOf(this.pickKey);n>=0&&a.splice(n,1)}0===a.length&&this.$delete(t,"required")},addChild:function(){var e=this._joinName(),t="string",a=this.pickValue;a.properties||this.$set(a,"properties",{});var n=a.properties;this.$set(n,e,{type:t})},addCustomNode:function(){this.$set(this.addProp,"key",this._joinName()),this.$set(this.addProp,"value",""),this.customing=!0},confirmAddCustomNode:function(){this.customProps.push(this.addProp),this.addProp={},this.customing=!1},removeNode:function(){var e=this.parent,t=e.properties,a=e.required;if(this.$delete(t,this.pickKey),a){var n=a.indexOf(this.pickKey);n>=0&&a.splice(n,1),0===a.length&&this.$delete(this.parent,"required")}},_joinName:function(){return"feild_".concat(this.deep,"_").concat(this.countAdd++)},onSetting:function(){for(var e in this.modalVisible=!0,this.advancedValue=this.advanced.value,this.advancedValue)this.pickValue[e]&&(this.advancedValue[e]=this.pickValue[e])},handleOk:function(){for(var e in this.modalVisible=!1,this.advancedValue)P(this.advancedValue[e])?this.$delete(this.pickValue,e):this.$set(this.pickValue,e,this.advancedValue[e]);var t,a=Object(f["a"])(this.customProps);try{for(a.s();!(t=a.n()).done;){var n=t.value;this.$set(this.pickValue,n.key,n.value)}}catch(s){a.e(s)}finally{a.f()}}}},ne=ae,se=(a("fd8b"),a("6dc4"),Object(l["a"])(ne,p,m,!1,null,"34e78ae6",null)),ie=se.exports;ie.install=function(e){e.component(ie.name,ie)};var oe=ie,re=[oe],le=function e(t){e.installed||(e.installed=!0,re.map((function(e){t.component(e.name,e)})))};"undefined"!==typeof window&&window.Vue&&le(window.Vue);var ce=Object(u["a"])({install:le},re);n["a"].config.productionTip=!1,n["a"].use(ce),new n["a"]({render:function(e){return e(d)}}).$mount("#app")},f381:function(e,t,a){},fd8b:function(e,t,a){"use strict";var n=a("8a46"),s=a.n(n);s.a}});