import{r as n,L as y,G as i,j as t,l as r,v as c,de as j,c as f,q as D,aB as I}from"./index.js";import{b as M}from"./data2.js";import{d as O}from"./edit-pen.js";import{d as S}from"./check.js";function E(){const l=n({}),u=n({}),o=n(-1),v=n(y(M,!0)),m=i(()=>e=>{var a;return(a=l.value[e])==null?void 0:a.value}),s=i(()=>e=>{var a;return(a=u.value[e])==null?void 0:a.editing}),p=i(()=>(e,a=!1)=>["cursor-pointer","ml-2","transition","delay-100",a?["hover:scale-110","hover:text-red-500"]:s.value(e)&&["scale-150","text-red-500"]]),b=[{label:"ID（可编辑）",prop:"id",cellRenderer:({row:e,index:a})=>t("div",{class:"flex-bc w-full h-[32px]",onMouseenter:()=>o.value=a,onMouseleave:()=>d(a)},[r(t("p",null,[e.id]),[[c,!s.value(a)]]),t(j,{"enter-active-class":"animate__animated animate__fadeInUp animate__faster"},{default:()=>[r(t(f("el-input"),{modelValue:m.value(a),onInput:_=>h(_,a)},null),[[c,s.value(a)]])]}),r(t(f("iconify-icon-offline"),{icon:S,class:p.value(a),onClick:()=>C(a)},null),[[c,s.value(a)]]),r(t(f("iconify-icon-offline"),{icon:O,class:p.value(a,!0),onClick:()=>g(e,a)},null),[[c,o.value===a&&!s.value(a)]])])},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];function g({id:e},a){l.value[a]=Object.assign({},l.value[a],{value:e}),u.value[a]=Object.assign({},u.value[a],{editing:!0})}function d(e){var a;(a=l.value[e])!=null&&a.value?o.value=e:o.value=-1}function h(e,a){l.value[a].value=e}function C(e){v.value[e].id=l.value[e].value,D(`您编辑了第 ${e+1} 行，编辑后数据为：${JSON.stringify(v.value[e])}`,{type:"success"}),u.value[e]=Object.assign({},u.value[e],{editing:!1}),I().then(()=>l.value[e].value=null)}return{columns:b,dataList:v}}export{E as useColumns};
