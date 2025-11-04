import{j as e,M as L,B as i,I as u,D as _}from"./design-system-R5PU-KJ5.js";import{H as l}from"./style-vendor-CCa_bSPe.js";import{r as x,L as $}from"./react-vendor-DvN4Y5o0.js";import{u as b}from"./index-BhlJXPXA.js";import{i as o,u as D,r as M}from"./queryKeys-B7CxYHCA.js";const s="/volunteers",z=async()=>{const{data:t}=await o.get(`${s}/manager`);return t},T=async t=>{await o.post(`${s}`,t)},K=async t=>{await o.delete(`${s}/${t}`)},q=async t=>{const{data:r}=await o.get(`${s}/${t}`);return r},J=async t=>{await o.post(`${s}/approval/${t}`)},Q=async t=>{await o.delete(`${s}/rejection/${t}`)},X=async()=>{const{data:t}=await o.get(`${s}/current`);return t},Y=async t=>{await o.delete(`${s}/exception/${t}`)},Z=async(t,r)=>{await o.patch(`${s}/${t}`,r)};function W(){const[t,r]=x.useState(""),[d,C]=x.useState(""),{toastDispatch:j}=D(),[m,S]=x.useState(null),f=["1학년","2학년","3학년"],{closeModal:h}=b(),[c,w]=x.useState({name:"",score:null,optional_score:null,max_applicants:null,available_grade:"",available_sex:"ALL"}),p=a=>{const{name:n,value:y}=a.target,k=n===" score"||n==="optional_score"||n==="max_applicants"?y===""?null:Number(y):y;w(E=>({...E,[n]:k}))},v=(a,n)=>{a==="primary"?r(n):a==="secondary"&&C(n)},g=a=>{S(a),w(n=>({...n,available_sex:a}))},V=async()=>{try{const a=[t,d].filter(Boolean).sort(),n=M(a.join(", "));await T({...c,available_grade:n}),j({actionType:"APPEND_TOAST",toastType:"SUCCESS",message:"봉사 활동을 성공적으로 추가했습니다."}),h(),window.location.reload()}catch{j({actionType:"APPEND_TOAST",toastType:"ERROR",message:"봉사 활동 추가에 실패했습니다."})}};return e.jsx(L,{close:h,title:"봉사 추가",width:"800px",inputList:[e.jsx(e.Fragment,{children:e.jsx(R,{children:e.jsxs(B,{children:[e.jsxs(A,{children:[e.jsx(u,{width:334,type:"text",placeholder:"ex) 2층 자습실 청소",name:"name",label:"제목",value:c.name,onChange:p}),e.jsx(_,{items:f,placeholder:"",value:t,width:334,onChange:a=>v("primary",a),label:"조건"}),e.jsx(_,{items:f,placeholder:"",value:d,width:334,onChange:a=>v("secondary",a)}),e.jsxs(G,{children:[e.jsx(i,{kind:m==="MALE"?"contained":"outline",onClick:()=>g("MALE"),children:"남자"}),e.jsx(i,{kind:m==="FEMALE"?"contained":"outline",onClick:()=>g("FEMALE"),children:"여자"}),e.jsx(i,{kind:m==="ALL"?"contained":"outline",onClick:()=>g("ALL"),children:"전체"})]})]}),e.jsxs(A,{children:[e.jsx(u,{width:334,type:"number",placeholder:"ex) 1",name:"score",value:c.score,label:"점수",onChange:p}),e.jsx(u,{width:334,type:"number",placeholder:"ex) 10",name:"optional_score",value:c.optional_score,onChange:p}),e.jsx(u,{width:334,type:"number",placeholder:"ex) 3",name:"max_applicants",label:"인원수",value:c.max_applicants,onChange:p})]})]})})})],buttonList:[e.jsxs(e.Fragment,{children:[e.jsx(i,{kind:"outline",onClick:h,children:"취소"}),e.jsx(i,{onClick:V,children:"확인"})]})]})}const A=l.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,B=l.div`
  display: flex;
  gap: 50px;
`,G=l.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 36px;
`,R=l.div`
  display: flex;
  gap: 56px;
  align-items: center;
  justify-content: center;
`;l.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;l.div`
  font-weight: 400;
  font-size: 16px;
  color: #555555;
  margin-left: 6px;
`;function ee(){const{selectModal:t,modalState:r}=b(),d=()=>t("VOLUNTEER_ADD");return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:e.jsxs(N,{children:[e.jsx(i,{onClick:d,children:"봉사 추가"}),e.jsx($,{to:"/apply/volunteer/current",children:e.jsx(i,{kind:"outline",children:"봉사 현황"})})]})}),r.selectedModal==="VOLUNTEER_ADD"?e.jsx(W,{}):null]})}const F=l.div`
  display: flex;
  width: 990px;
  margin-top: 100px;
  align-items: center;
  margin-bottom: 40px;
`,N=l.div`
  margin-left: auto;
  display: flex;
  gap: 12px;
`;export{ee as V,J as a,q as b,X as c,Z as d,Y as e,K as f,z as g,Q as r};
