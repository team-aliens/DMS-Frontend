import{j as t,I as h,B as E,T as j}from"./design-system-R5PU-KJ5.js";import{r as d}from"./react-vendor-DvN4Y5o0.js";import{H as u}from"./style-vendor-CCa_bSPe.js";import{u as y}from"./useForm-DVm8TY_W.js";import{T as S}from"./TitleBox-CK0hfhyi.js";import{A as v}from"./AuthTemplate-4HuCpbnJ.js";import{a as A,b as T,c as P,d as R}from"./useAuthApi-CHSrJW2v.js";import{u as D}from"./useObj-Bg0VYG3V.js";import"./index-DHERFh5K.js";import"./queryKeys-B7CxYHCA.js";import"./utils-vendor-Bc17E_qf.js";import"./index-BhlJXPXA.js";import"./query-vendor-CBGQWAC0.js";import"./excel-vendor-CYB7cqj3.js";import"./decoder-D13FVXDo.js";const H=e=>/^(?=.*[a-zA-Z])(?=.*[!@#$%^&*+=-])(?=.*[0-9]).{8,20}$/.test(e);function I({onChangeValue:e,resetPasswordState:o,onClickResetPwd:c}){const[a,n]=d.useState(""),{new_password:s}=o;return t.jsx(z,{children:t.jsxs(O,{children:[t.jsx(h,{margin:["top",56],label:"새 비밀번호 입력",placeholder:"새로운 비밀번호를 입력해주세요.",width:480,type:"password",name:"new_password",onChange:e,value:s}),t.jsx(h,{margin:["top",40],label:"새 비밀번호 확인",placeholder:"새로운 비밀번호를 다시 확인해주세요.",width:480,type:"password",name:"re_password",onChange:i=>n(i.target.value),value:a}),t.jsx(E,{margin:[["top",40],["left","auto"]],size:"default",color:"primary",kind:"contained",onClick:c,disabled:!H(s)||s!==a,children:"완료"})]})})}const z=u.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,O=u.div`
  margin: 0 auto;
`;function B({emailHint:e,onChangeValue:o,email:c,errorMessage:a}){return t.jsxs(t.Fragment,{children:[t.jsxs(U,{children:[t.jsx(j,{size:"bodyS",display:"block",children:"아이디와 일치하는 이메일입니다."}),t.jsx(j,{size:"bodyS",color:"primary",children:e})]}),t.jsx(h,{margin:["bottom",40],label:"이메일",placeholder:"이메일을 입력해주세요",onChange:o,width:480,type:"text",name:"email",value:c,errorMsg:a})]})}const U=u.div`
  margin: 16px 0 40px 0;
  padding: 12px 16px;
  width: 480px;
  height: 70px;
  background-color: ${({theme:e})=>e.color.gray2};
`;function N({auth_code:e,errorMessage:o,onClickPostEmailAuthCode:c,onChangeValue:a}){return t.jsxs($,{children:[t.jsx(h,{margin:["bottom",40],label:"인증코드",name:"auth_code",onChange:a,type:"text",width:480,placeholder:"이메일로 발송된 인증코드를 입력해주세요.",value:e,errorMsg:o}),t.jsxs(F,{children:[t.jsx(j,{size:"captionM",color:"gray6",margin:[["right",12],["top",16]],children:"인증번호가 발송되지 않았나요?"}),t.jsx(E,{onClick:()=>c("resend"),color:"gray",kind:"underline",clickType:"button",size:"default",children:"인증번호 재발송"})]})]})}const $=u.div`
  position: relative;
  margin-top: 60px;
`,F=u.div`
  display: flex;
  position: absolute;
  right: 0;
  top: -5px;
  > button {
    padding: 0;
  }
`;function W({account_id:e,auth_code:o,email:c,onChangeValue:a,step:n,onClick:s,errorMessages:i,emailHint:p,postEmailCode:x}){return t.jsxs(t.Fragment,{children:[t.jsx(h,{margin:[56,0,40,0],label:"아이디",placeholder:"id를 입력해주세요.",onChange:a,width:480,type:"text",name:"account_id",value:e,errorMsg:i==null?void 0:i.account_id}),n!=="RESET"&&n!=="ACCOUNT_ID"&&t.jsx(B,{emailHint:p,onChangeValue:a,email:c,errorMessage:i==null?void 0:i.email}),n==="AUTH_CODE"&&t.jsx(N,{auth_code:o,errorMessage:(i==null?void 0:i.auth_code)||"",onClickPostEmailAuthCode:x,onChangeValue:a}),t.jsx(E,{margin:["left","auto"],onClick:s,size:"default",color:"primary",kind:"contained",children:"인증"})]})}const L={RESET:"비밀번호는 영문, 숫자, 기호를 포함한 8~20자이어야 합니다."};function ct(){const[e,o]=d.useState("ACCOUNT_ID"),[c,a]=d.useState(""),{state:n,onHandleChange:s}=y({account_id:"",auth_code:"",email:"",new_password:""}),{email:i,account_id:p,auth_code:x}=n,{obj:_,changeObjectValue:r}=D({account_id:"",auth_code:"",email:""}),w=A({resetPwdState:n}),m=T({email:i,authCode:x}),l=P(p);d.useEffect(()=>{m.isSuccess&&(o("RESET"),r("auth_code",""))},[m.isSuccess,r]),d.useEffect(()=>{m.isError&&r("auth_code","인증코드가 일치하지 않습니다.")},[m.isError,r]),d.useEffect(()=>{l.isSuccess&&l.data&&(o("EMAIL"),a(l.data.email),r("account_id",""))},[l.isSuccess,l.data]);const f=R({email:i}),C=d.useCallback(g=>{if(!i){r("email","이메일을 입력해 주세요.");return}g==="resend"?f.mutate("RESEND"):f.mutate(void 0,{onSuccess:()=>{o("AUTH_CODE"),r("email","")}})},[i,r,f,o]),b=d.useCallback(()=>e==="ACCOUNT_ID"?l.refetch():e==="EMAIL"?C():m.refetch(),[e,C,l]),k=g=>{g.preventDefault()};return t.jsx(v,{children:t.jsx(q,{children:t.jsxs("form",{onSubmit:k,children:[t.jsx(S,{moreInfo:L[e],children:"비밀번호 재설정"}),e==="RESET"?t.jsx(I,{onChangeValue:s,resetPasswordState:n,onClickResetPwd:()=>w.mutate()}):t.jsx(W,{onChangeValue:s,account_id:n.account_id,auth_code:n.auth_code,email:n.email,step:e,errorMessages:_,emailHint:c,onClick:b,postEmailCode:C})]})})})}const q=u.div`
  width: 50%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;export{ct as ResetPwdPage};
