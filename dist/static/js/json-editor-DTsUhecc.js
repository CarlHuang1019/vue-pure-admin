import{S as m}from"./vue-json-pretty--bt2AYkJ.js";import{d as p,r as w,n as d,b as f,w as s,e as c,f as b,g as i,h as t,i as n,u as g}from"./index-CLfWc4d3.js";const _={class:"card-header"},v={class:"font-medium"},k={class:"font-medium"},J=p({name:"JsonEditor",__name:"json-editor",setup(x){const l={status:200,text:"",error:null,config:void 0,data:[{news_id:51184,title:"iPhone X Review: Innovative future with real black technology",source:"Netease phone"},{news_id:51183,title:"Traffic paradise: How to design streets for people and unmanned vehicles in the future?",source:"Netease smart",link:"http://netease.smart/traffic-paradise/1235"},{news_id:51182,title:"Teslamask's American Business Relations: The government does not pay billions to build factories",source:"AI Finance",members:["Daniel","Mike","John"]}]},e=w({val:JSON.stringify(l),data:l,showLine:!0,showLineNumber:!0,showDoubleQuotes:!0,showLength:!0,editable:!0,showIcon:!0,editableTrigger:"click",deep:3});return d(()=>e.val,o=>{try{e.data=JSON.parse(o)}catch(a){}}),d(()=>e.data,o=>{try{e.val=JSON.stringify(o)}catch(a){}}),(o,a)=>{const r=c("el-link"),u=c("el-card");return b(),f(u,{shadow:"never"},{header:s(()=>[i("div",_,[i("span",v,[t(" JSON编辑器，采用开源的 "),n(r,{href:"https://github.com/leezng/vue-json-pretty",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:s(()=>[t(" vue-json-pretty ")]),_:1}),t(" （支持大数据量）。 ")]),i("span",k,[t(" 当然还有一款代码编辑器推荐（这里就不做演示了），采用开源的 "),n(r,{href:"https://github.com/surmon-china/vue-codemirror",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:s(()=>[t(" codemirror6 ")]),_:1})])]),n(r,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/json-editor.vue",target:"_blank"},{default:s(()=>[t(" 代码位置 src/views/components/json-editor.vue ")]),_:1})]),default:s(()=>[n(g(m),{data:e.data,"onUpdate:data":a[0]||(a[0]=h=>e.data=h),deep:e.deep,"show-double-quotes":e.showDoubleQuotes,"show-line":e.showLine,"show-length":e.showLength,"show-icon":e.showIcon,"show-line-number":e.showLineNumber,editable:e.editable,"editable-trigger":e.editableTrigger},null,8,["data","deep","show-double-quotes","show-line","show-length","show-icon","show-line-number","editable","editable-trigger"])]),_:1})}}});export{J as default};
