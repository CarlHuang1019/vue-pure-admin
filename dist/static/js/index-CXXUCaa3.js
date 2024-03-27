import oe from"./tree-DNlxn1Bh.js";import{useUser as te}from"./hook-WxndmlnK.js";import{R as le,P as ne}from"./refresh-COlD6HBY.js";import{u as s}from"./hooks-aPFXFTSW.js";import{d as ae}from"./admin-line-CpqWPwjZ.js";import{d as re}from"./delete-Ce0TSdK5.js";import{d as ie}from"./edit-pen-Ci7W0xNM.js";import{d as se}from"./add-circle-line-DOJqVT3s.js";import{d as ce,a as g,e as a,A as de,f as D,k as z,i as o,v as m,u as e,g as C,w as t,h as i,B as me,t as pe,j as ue,_ as fe}from"./index-CLfWc4d3.js";import"./git-branch-line-BhusJOme.js";import"./more-2-fill-iTOisMwj.js";import"./role.vue_vue_type_script_setup_true_lang-DoTjIvG8.js";import"./index-CraX0RAn.js";import"./index.vue_vue_type_script_setup_true_lang-CKaMMXpv.js";import"./hooks-dUBpBLky.js";import"./upload.vue_vue_type_script_setup_true_lang-B-2VRVO-.js";import"./index-wiqLyKxp.js";import"./user-DNtD0Fqa.js";import"./system-DDE0GyGQ.js";import"./sortable.esm-6WsHlDA5.js";import"./epTheme-C2RFIJpx.js";const _e={width:24,height:24,body:'<path fill="currentColor" d="M3 19h18v2H3v-2ZM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485l-1.414 1.415L13 5.827Z"/>'},he=_e,ge={width:24,height:24,body:'<path fill="currentColor" d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1ZM5 10v10h14V10H5Zm6 4h2v2h-2v-2Zm-4 0h2v2H7v-2Zm8 0h2v2h-2v-2Zm1-6V7a4 4 0 0 0-8 0v1h8Z"/>'},Ce=ge,ve={width:1024,height:1024,body:'<path fill="currentColor" d="M176 416a112 112 0 1 1 0 224a112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224a112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224a112 112 0 0 1 0-224z"/>'},ye=ve,be={key:0,class:"bg-[var(--el-fill-color-light)] w-full h-[46px] mb-2 pl-4 flex items-center"},ke={class:"flex-auto"},xe={style:{"font-size":"var(--el-font-size-base)"},class:"text-[rgba(42,46,54,0.5)] dark:text-[rgba(220,220,242,0.5)]"},we=ce({name:"SystemUser",__name:"index",setup(Ve){const v=g(),y=g(),b=g(),{form:c,loading:k,columns:U,dataList:Z,treeData:L,treeLoading:P,selectedNum:x,pagination:B,buttonClass:f,deviceDetection:_,onSearch:w,resetForm:M,onbatchDel:N,openDialog:V,onTreeSelect:T,handleUpdate:H,handleDelete:j,handleUpload:I,handleReset:A,handleRole:E,handleSizeChange:F,onSelectionCancel:q,handleCurrentChange:G,handleSelectionChange:J}=te(b,v);return(Se,r)=>{const S=a("el-input"),u=a("el-form-item"),$=a("el-option"),K=a("el-select"),n=a("el-button"),O=a("el-form"),R=a("el-popconfirm"),h=a("el-dropdown-item"),Q=a("el-dropdown-menu"),W=a("el-dropdown"),X=a("pure-table"),Y=de("motion-fade");return D(),z("div",{class:m(["flex","justify-between",e(_)()&&"flex-wrap"])},[o(oe,{ref_key:"treeRef",ref:v,class:m(["mr-2",e(_)()?"w-full":"min-w-[200px]"]),treeData:e(L),treeLoading:e(P),onTreeSelect:e(T)},null,8,["class","treeData","treeLoading","onTreeSelect"]),C("div",{class:m([e(_)()?["w-full","mt-2"]:"w-[calc(100%-200px)]"])},[o(O,{ref_key:"formRef",ref:y,inline:!0,model:e(c),class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px] overflow-auto"},{default:t(()=>[o(u,{label:"用户名称：",prop:"username"},{default:t(()=>[o(S,{modelValue:e(c).username,"onUpdate:modelValue":r[0]||(r[0]=l=>e(c).username=l),placeholder:"请输入用户名称",clearable:"",class:"!w-[180px]"},null,8,["modelValue"])]),_:1}),o(u,{label:"手机号码：",prop:"phone"},{default:t(()=>[o(S,{modelValue:e(c).phone,"onUpdate:modelValue":r[1]||(r[1]=l=>e(c).phone=l),placeholder:"请输入手机号码",clearable:"",class:"!w-[180px]"},null,8,["modelValue"])]),_:1}),o(u,{label:"状态：",prop:"status"},{default:t(()=>[o(K,{modelValue:e(c).status,"onUpdate:modelValue":r[2]||(r[2]=l=>e(c).status=l),placeholder:"请选择",clearable:"",class:"!w-[180px]"},{default:t(()=>[o($,{label:"已开启",value:"1"}),o($,{label:"已关闭",value:"0"})]),_:1},8,["modelValue"])]),_:1}),o(u,null,{default:t(()=>[o(n,{type:"primary",icon:e(s)("ri:search-line"),loading:e(k),onClick:e(w)},{default:t(()=>[i(" 搜索 ")]),_:1},8,["icon","loading","onClick"]),o(n,{icon:e(s)(e(le)),onClick:r[3]||(r[3]=l=>e(M)(y.value))},{default:t(()=>[i(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),o(e(ne),{title:"用户管理（仅演示，操作后不生效）",columns:e(U),onRefresh:e(w)},{buttons:t(()=>[o(n,{type:"primary",icon:e(s)(e(se)),onClick:r[4]||(r[4]=l=>e(V)())},{default:t(()=>[i(" 新增用户 ")]),_:1},8,["icon"])]),default:t(({size:l,dynamicColumns:ee})=>[e(x)>0?me((D(),z("div",be,[C("div",ke,[C("span",xe," 已选 "+pe(e(x))+" 项 ",1),o(n,{type:"primary",text:"",onClick:e(q)},{default:t(()=>[i(" 取消选择 ")]),_:1},8,["onClick"])]),o(R,{title:"是否确认删除?",onConfirm:e(N)},{reference:t(()=>[o(n,{type:"danger",text:"",class:"mr-1"},{default:t(()=>[i(" 批量删除 ")]),_:1})]),_:1},8,["onConfirm"])])),[[Y]]):ue("",!0),o(X,{ref_key:"tableRef",ref:b,"row-key":"id",adaptive:"",adaptiveConfig:{offsetBottom:108},"align-whole":"center","table-layout":"auto",loading:e(k),size:l,data:e(Z),columns:ee,pagination:e(B),paginationSmall:l==="small","header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},onSelectionChange:e(J),onPageSizeChange:e(F),onPageCurrentChange:e(G)},{operation:t(({row:d})=>[o(n,{class:"reset-margin",link:"",type:"primary",size:l,icon:e(s)(e(ie)),onClick:p=>e(V)("修改",d)},{default:t(()=>[i(" 修改 ")]),_:2},1032,["size","icon","onClick"]),o(R,{title:`是否确认删除用户编号为${d.id}的这条数据`,onConfirm:p=>e(j)(d)},{reference:t(()=>[o(n,{class:"reset-margin",link:"",type:"primary",size:l,icon:e(s)(e(re))},{default:t(()=>[i(" 删除 ")]),_:2},1032,["size","icon"])]),_:2},1032,["title","onConfirm"]),o(W,null,{dropdown:t(()=>[o(Q,null,{default:t(()=>[o(h,null,{default:t(()=>[o(n,{class:m(e(f)),link:"",type:"primary",size:l,icon:e(s)(e(he)),onClick:p=>e(I)(d)},{default:t(()=>[i(" 上传头像 ")]),_:2},1032,["class","size","icon","onClick"])]),_:2},1024),o(h,null,{default:t(()=>[o(n,{class:m(e(f)),link:"",type:"primary",size:l,icon:e(s)(e(Ce)),onClick:p=>e(A)(d)},{default:t(()=>[i(" 重置密码 ")]),_:2},1032,["class","size","icon","onClick"])]),_:2},1024),o(h,null,{default:t(()=>[o(n,{class:m(e(f)),link:"",type:"primary",size:l,icon:e(s)(e(ae)),onClick:p=>e(E)(d)},{default:t(()=>[i(" 分配角色 ")]),_:2},1032,["class","size","icon","onClick"])]),_:2},1024)]),_:2},1024)]),default:t(()=>[o(n,{class:"ml-3 mt-[2px]",link:"",type:"primary",size:l,icon:e(s)(e(ye)),onClick:p=>e(H)(d)},null,8,["size","icon","onClick"])]),_:2},1024)]),_:2},1032,["loading","size","data","columns","pagination","paginationSmall","header-cell-style","onSelectionChange","onPageSizeChange","onPageCurrentChange"])]),_:1},8,["columns","onRefresh"])],2)],2)}}}),Ke=fe(we,[["__scopeId","data-v-febb6646"]]);export{Ke as default};
