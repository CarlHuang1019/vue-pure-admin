import{t as s}from"./data-CH7qh5n5.js";import{d as b,a as l,e as c,f as g,k as v,i as n,u,g as h,w as p,h as d}from"./index-CLfWc4d3.js";const k={style:{"margin-top":"20px"}},B=b({__name:"radio",setup(w){const o=l(),i=l(),a=t=>{const{setCurrentRow:e}=o.value.getTableRef();e(t)},_=t=>{i.value=t},f=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];return(t,e)=>{const m=c("pure-table"),r=c("el-button");return g(),v("div",null,[n(m,{ref_key:"tableRef",ref:o,data:u(s),columns:f,"highlight-current-row":"",onPageCurrentChange:_},null,8,["data"]),h("div",k,[n(r,{onClick:e[0]||(e[0]=C=>a(u(s)[1]))},{default:p(()=>[d("Select second row")]),_:1}),n(r,{onClick:e[1]||(e[1]=C=>a())},{default:p(()=>[d("Clear selection")]),_:1})])])}}});export{B as _};
