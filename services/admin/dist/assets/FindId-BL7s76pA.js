import{j as e,T as x,D as g,I as w,B as y}from"./design-system-R5PU-KJ5.js";import{r as h}from"./react-vendor-DvN4Y5o0.js";import{H as p}from"./style-vendor-CCa_bSPe.js";import{f as S}from"./fade-C-aabg4w.js";import{T as b}from"./TitleBox-CK0hfhyi.js";import{A as v}from"./AuthTemplate-4HuCpbnJ.js";import{u as D}from"./useForm-DVm8TY_W.js";import{u as I}from"./useDropDown-hVZVKMV4.js";import{u as Q,a as A}from"./useSchoolsApi-kltzsy-n.js";import{u as C}from"./useMangersApis-CoxZOvfK.js";import"./queryKeys-B7CxYHCA.js";import"./utils-vendor-Bc17E_qf.js";import"./index-BhlJXPXA.js";import"./query-vendor-CBGQWAC0.js";import"./index-DHERFh5K.js";import"./excel-vendor-CYB7cqj3.js";import"./decoder-D13FVXDo.js";function k({question:t}){return e.jsxs(N,{children:[e.jsx(x,{display:"block",size:"bodyS",margin:["bottom",8],children:"학교 인증 질문"}),e.jsx(x,{size:"bodyM",color:"gray6",children:t})]})}const N=p.div`
  margin: 16px 0 40px 0;
  padding: 12px 16px;
  height: 70px;
  background-color: ${({theme:t})=>t.color.gray2};
`;function T({schools:t,onDropDownChange:c,selectedSchoolName:o,isNextStep:l,onChange:i,answer:d,question:s,onClick:a}){const n=r=>{r.preventDefault()};return e.jsx(_,{children:e.jsxs("form",{onSubmit:n,children:[e.jsx(b,{children:"아이디 찾기"}),e.jsx(g,{margin:["top",56],width:480,label:"학교 이름",placeholder:"학교를 선택해주세요",value:o,disable:!1,onChange:c,items:t.map(r=>r.name)}),e.jsxs(B,{nextStep:l,children:[e.jsx(k,{question:s}),e.jsx(w,{label:"답변",placeholder:"답변을 작성해주세요.",width:480,type:"text",name:"answer",onChange:i,value:d})]}),e.jsx(F,{children:e.jsx(y,{kind:"contained",color:"primary",size:"default",onClick:a,children:"다음"})})]})})}const B=p.div`
  animation: ${S} 1s;
  display: ${({nextStep:t})=>!t&&"none"};
`,F=p.div`
  display: flex;
  justify-content: end;
  margin-top: 40px;
`,_=p.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.25s;
  > div {
    width: 480px;
  }
`;function Y(){const[t,c]=h.useState(!1),{data:o}=Q(),{onHandleChange:l,state:i}=D({answer:""}),{onDropDownChange:d,sort:s}=I(""),a=h.useMemo(()=>{var m,u;return(u=(m=o==null?void 0:o.schools)==null?void 0:m.filter(j=>j.name===s)[0])==null?void 0:u.id},[s,o]),{data:n}=A({selectedId:a,isNextStep:t}),r=()=>{c(!0)},f=C({selectedId:a,answer:i.answer});return e.jsx(v,{children:o&&e.jsx(T,{schools:o.schools,answer:i.answer,question:n==null?void 0:n.question,onChange:l,onClick:()=>t?f.mutate():r(),onDropDownChange:d,selectedSchoolName:s,isNextStep:t})})}export{Y as FindIdPage};
