import{b as l}from"./data2.js";import{r as u,al as i}from"./index.js";function h(r,o){const n=u([]),c=[{type:"selection",align:"left"},{label:"ID",prop:"id",width:80},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],s=i({pageSize:10,currentPage:1,layout:"prev, pager, next",total:l.length,background:!0,small:!0});return{columns:c,pagination:s,selectValue:n,tableDataEdit:l,onSure:()=>{r.value.blur()},onClear:()=>{const{clearSelection:e}=o.value.getTableRef();e()},removeTag:e=>{const{toggleRowSelection:a}=o.value.getTableRef();a(l.filter(t=>t.name===e)[0],!1)},handleSelectionChange:e=>{const a=[];e.forEach(t=>{a.push(t.name)}),n.value=a}}}export{h as useColumns};
