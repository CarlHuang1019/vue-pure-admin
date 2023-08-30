import{al as H,r as u,o as I,j as M,c as S,dw as T,d2 as p,dH as W,a6 as Y,E as $,R as C,q as o}from"./index.js";import{_ as F}from"./form.vue_vue_type_script_setup_true_lang2.js";import{g as O}from"./system.js";import{u as _}from"./hooks2.js";import"./index65.js";function P(){const n=H({name:"",status:null}),c=u(),l=u([]),i=u(!0),{tagStyle:r}=_(),d=[{label:"部门名称",prop:"name",width:180,align:"left"},{label:"排序",prop:"sort",minWidth:70},{label:"状态",prop:"status",minWidth:100,cellRenderer:({row:t,props:e})=>M(S("el-tag"),{size:e.size,style:r.value(t.status)},{default:()=>[t.status===1?"启用":"停用"]})},{label:"创建时间",minWidth:200,prop:"createTime",formatter:({createTime:t})=>T(t).format("YYYY-MM-DD HH:mm:ss")},{label:"备注",prop:"remark",minWidth:320},{label:"操作",fixed:"right",width:160,slot:"operation"}];function h(t){}function g(t){t&&(t.resetFields(),s())}async function s(){i.value=!0;const{data:t}=await O();let e=t;p(n.name)||(e=e.filter(a=>a.name.includes(n.name))),p(n.status)||(e=e.filter(a=>a.status===n.status)),l.value=W(e),setTimeout(()=>{i.value=!1},500)}function m(t){if(!t||!t.length)return;const e=[];for(let a=0;a<t.length;a++)t[a].disabled=t[a].status===0,m(t[a].children),e.push(t[a]);return e}function D(t="新增",e){Y({title:`${t}部门`,props:{formInline:{higherDeptOptions:m($(l.value)),parentId:(e==null?void 0:e.parentId)??0,name:(e==null?void 0:e.name)??"",principal:(e==null?void 0:e.principal)??"",phone:(e==null?void 0:e.phone)??"",email:(e==null?void 0:e.email)??"",sort:(e==null?void 0:e.sort)??0,status:(e==null?void 0:e.status)??1,remark:(e==null?void 0:e.remark)??""}},width:"40%",draggable:!0,fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>C(F,{ref:c}),beforeSure:(a,{options:v})=>{const y=c.value.getRef(),R=v.props.formInline;function f(){o(`您${t}了部门名称为${R.name}的这条数据`,{type:"success"}),a(),s()}y.validate(k=>{k&&f()})}})}function b(t){o(`您删除了部门名称为${t.name}的这条数据`,{type:"success"}),s()}return I(()=>{s()}),{form:n,loading:i,columns:d,dataList:l,onSearch:s,resetForm:g,openDialog:D,handleDelete:b,handleSelectionChange:h}}export{P as useDept};
