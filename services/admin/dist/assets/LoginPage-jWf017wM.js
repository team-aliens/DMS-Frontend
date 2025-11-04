import{j as t,I as l,C as j,B as f,T as u}from"./design-system-R5PU-KJ5.js";import{L as m,r as g}from"./react-vendor-DvN4Y5o0.js";import{H as p}from"./style-vendor-CCa_bSPe.js";import{T as b}from"./TitleBox-CK0hfhyi.js";import{p as x}from"./index-BhlJXPXA.js";import{A as w}from"./AuthTemplate-4HuCpbnJ.js";import{u as y}from"./useObj-Bg0VYG3V.js";import{u as _}from"./useForm-DVm8TY_W.js";import{u as v}from"./useAuthApi-CHSrJW2v.js";import"./utils-vendor-Bc17E_qf.js";import"./query-vendor-CBGQWAC0.js";import"./index-DHERFh5K.js";import"./queryKeys-B7CxYHCA.js";import"./excel-vendor-CYB7cqj3.js";import"./decoder-D13FVXDo.js";function L({onChange:a,onClickLogin:i,disabled:s,loginState:e,errorMessage:o,autoSave:r,onChangeAutoSaveStatus:n}){const c=d=>{d.preventDefault()};return t.jsx(A,{onSubmit:c,children:t.jsxs(C,{children:[t.jsx(b,{children:"로그인"}),t.jsx(l,{margin:["top",56],label:"로그인",onChange:a,placeholder:"아이디를 입력해주세요",width:480,type:"text",name:"account_id",value:e.account_id,errorMsg:o==null?void 0:o.account_id}),t.jsx(l,{margin:["top",40],label:"비밀번호",onChange:a,placeholder:"비밀번호를 입력해주세요",width:480,type:"password",name:"password",value:e.password,errorMsg:o==null?void 0:o.password}),t.jsx(j,{disabled:!1,label:"아이디 저장",status:r,onChange:n,margin:["top",62]}),t.jsx(f,{margin:["top",38],kind:"contained",disabled:s,color:"primary",size:"medium",onClick:i,children:"로그인"}),t.jsxs(k,{children:[t.jsx(m,{to:x.findAccountId,children:t.jsx(u,{size:"bodyL",color:"gray6",children:"아이디 찾기"})}),t.jsx(u,{size:"bodyL",color:"gray6",children:"|"}),t.jsx(m,{to:x.resetPassword,children:t.jsx(u,{size:"bodyL",color:"gray6",children:"비밀번호 변경"})})]})]})})}const A=p.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,C=p.div`
  margin: 0 auto;
`,k=p.div`
  width: 238px;
  margin: 76px auto 0 auto;
  display: flex;
  justify-content: space-between;
  > p {
    cursor: pointer;
  }
`,h=localStorage.getItem("account_id");function G(){const[a,i]=g.useState(h&&!0),s=d=>i(d),{obj:e,changeObjectValue:o}=y({account_id:"",password:"",device_token:""}),{onHandleChange:r,state:n}=_({account_id:h||"",password:"",device_token:"admin_default"}),c=v({loginState:n,autoSave:a,changeErrorMessage:o});return t.jsx(w,{children:t.jsx(L,{onClickLogin:()=>c.mutate(),onChangeAutoSaveStatus:s,onChange:r,autoSave:a,loginState:n,errorMessage:e,disabled:!(n.account_id&&n.password)})})}export{G as LoginPage};
