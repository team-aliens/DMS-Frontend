import{j as e,M as O,B as u,I as E,D as A,T as _}from"./design-system-R5PU-KJ5.js";import{H as n}from"./style-vendor-CCa_bSPe.js";import{d as R,f as V}from"./Header-Cq8aUTn2.js";import{D as B}from"./delete-ChCvswoC.js";import{r as l,L as z}from"./react-vendor-DvN4Y5o0.js";import{u as P,o as M,r as F,j as H}from"./queryKeys-B7CxYHCA.js";const N="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%2016H3.2615L13.498%205.7635L12.2365%204.502L2%2014.7385V16ZM1.404%2017.5C1.14783%2017.5%200.933167%2017.4133%200.76%2017.24C0.586667%2017.0668%200.5%2016.8522%200.5%2016.596V14.8635C0.5%2014.6197%200.546833%2014.3873%200.6405%2014.1663C0.734%2013.9453%200.862833%2013.7527%201.027%2013.5885L13.6905%200.93075C13.8417%200.793416%2014.0086%200.687333%2014.1913%200.6125C14.3741%200.5375%2014.5658%200.5%2014.7663%200.5C14.9668%200.5%2015.1609%200.535584%2015.3488%200.60675C15.5367%200.677917%2015.7032%200.791083%2015.848%200.946249L17.0693%202.18275C17.2244%202.32758%2017.335%202.49425%2017.401%202.68275C17.467%202.87125%2017.5%203.05975%2017.5%203.24825C17.5%203.44942%2017.4657%203.64133%2017.397%203.824C17.3283%204.00683%2017.2191%204.17383%2017.0693%204.325L4.4115%2016.973C4.24733%2017.1372%204.05475%2017.266%203.83375%2017.3595C3.61275%2017.4532%203.38033%2017.5%203.1365%2017.5H1.404ZM12.8562%205.14375L12.2365%204.502L13.498%205.7635L12.8562%205.14375Z'%20fill='%23555555'/%3e%3c/svg%3e";function $({closeModal:a,volunteerId:g,name:y,sex:s,grade:c,score:w,optionalScore:b,maxApplicants:L}){const[d,S]=l.useState(""),[p,j]=l.useState(""),{toastDispatch:f}=P(),C=["1학년","2학년","3학년"],[r,x]=l.useState({name:y,available_sex:s,available_grade:c,score:w,optional_score:b,max_applicants:L}),[m,v]=l.useState("ALL"),i=t=>{const{name:o,value:h}=t.target,k=o==="score"||o==="optional_score"||o==="max_applicants"?h===""?null:Number(h):h;x(G=>({...G,[o]:k}))},T=(t,o)=>{t==="primary"?S(o):t==="secondary"&&j(o)},D=t=>{v(t),x(o=>({...o,available_sex:t}))},W=async()=>{try{const t=[d,p].filter(Boolean).sort(),o=F(t.join(", "));await R(g,{...r,available_grade:o}),f({actionType:"APPEND_TOAST",toastType:"SUCCESS",message:"봉사 활동을 성공적으로 수정했습니다."}),a(),window.location.reload()}catch{f({actionType:"APPEND_TOAST",toastType:"ERROR",message:"봉사 활동 수정에 실패했습니다."})}};return l.useEffect(()=>{const t=c.split(", ").map(k=>k),o=t[0].includes("학년")?t[0]:t[0]+"학년",h=t[1]?t[1].includes("학년")?t[1]:t[1]+"학년":"";S(M(o||"")),j(M(h||"")),v(s)},[c,s]),e.jsx(O,{close:a,title:"봉사 수정",width:"800px",inputList:[e.jsx(e.Fragment,{children:e.jsx(U,{children:e.jsxs(K,{children:[e.jsxs(I,{children:[e.jsx(E,{width:334,type:"text",placeholder:"ex) 2층 자습실 청소",name:"name",label:"제목",value:r.name,onChange:i}),e.jsx(A,{items:C,placeholder:d||"",value:d,width:334,onChange:t=>T("primary",t),label:"조건"}),e.jsx(A,{items:C,placeholder:p||"",value:p,width:334,onChange:t=>T("secondary",t)}),e.jsxs(Z,{children:[e.jsx(u,{kind:m==="MALE"?"contained":"outline",onClick:()=>D("MALE"),children:"남자"}),e.jsx(u,{kind:m==="FEMALE"?"contained":"outline",onClick:()=>D("FEMALE"),children:"여자"}),e.jsx(u,{kind:m==="ALL"?"contained":"outline",onClick:()=>D("ALL"),children:"전체"})]})]}),e.jsxs(I,{children:[e.jsx(E,{width:334,type:"number",placeholder:"ex) 5",name:"score",value:r.score,label:"점수",onChange:i}),e.jsx(E,{width:334,type:"number",placeholder:"ex) 10",name:"optional_score",value:r.optional_score,onChange:i}),e.jsx(E,{width:334,type:"number",placeholder:"ex) 3",name:"max_applicants",label:"인원수",value:r.max_applicants,onChange:i})]})]})})})],buttonList:[e.jsxs(e.Fragment,{children:[e.jsx(u,{kind:"outline",onClick:a,children:"취소"}),e.jsx(u,{onClick:W,children:"확인"})]})]})}const I=n.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,K=n.div`
  display: flex;
  gap: 50px;
`,Z=n.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 36px;
`,U=n.div`
  display: flex;
  gap: 56px;
  align-items: center;
  justify-content: center;
`;n.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;n.div`
  font-weight: 400;
  font-size: 16px;
  color: #555555;
  margin-left: 6px;
`;function de({name:a,availableGrade:g,availableSex:y,id:s,onDelete:c,status:w="icon",availablePoint:b,availableOptionalScore:L,availableMaxApplicants:d,availableContent:S,currentApplicants:p,maxApplicants:j,detailPath:f}){const[C,r]=l.useState(!1),{toastDispatch:x}=P(),m=async()=>{try{await V(s),c(s),x({actionType:"APPEND_TOAST",toastType:"SUCCESS",message:"봉사 활동을 성공적으로 삭제했습니다."})}catch{x({actionType:"APPEND_TOAST",toastType:"ERROR",message:"봉사 활동 삭제에 실패했습니다."})}},v=()=>{r(!0)},i=()=>{r(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(q,{children:[e.jsxs(J,{children:[e.jsx(z,{to:`${f}/${s}`,children:e.jsx(_,{color:"gray8",size:"bodyM",cursor:"pointer",children:a})}),e.jsx(Q,{children:e.jsxs(_,{color:"gray5",size:"bodyM",children:[p,"/",j]})})]}),e.jsx(X,{}),e.jsxs(Y,{children:[e.jsxs(ee,{children:[e.jsx(_,{color:"primary",size:"bodyM",children:g}),e.jsx(_,{color:"primary",size:"bodyM",children:y})]}),e.jsxs(te,{status:w,children:[e.jsx(ne,{onClick:v,src:N}),e.jsx(oe,{src:B,onClick:m})]})]})]}),C&&e.jsx($,{score:b,optionalScore:L,maxApplicants:d,name:a,sex:H(y),grade:g,closeModal:i,volunteerId:s})]})}const q=n.li`
  min-width: 280px;
  border-radius: 10px;
  background-color: ${({theme:a})=>a.color.gray1};
  box-shadow: 0 1px 20px rgba(238, 238, 238, 0.8);
  padding: 20px 20px 14px 20px;
`,J=n.div`
  display: flex;
  gap: 30px;
`,Q=n.div`
  margin-left: auto;
`,X=n.hr`
  width: 100%;
  height: 1px;
  background-color: ${({theme:a})=>a.color.gray4};
  margin: 12px 0 14px 0;
`,Y=n.div`
  display: flex;
`,ee=n.div`
  display: flex;
  gap: 5px;
  align-items: center;
`,te=n.div`
  display: ${({status:a})=>a==="icon"?"flex":"none"};
  align-items: center;
  gap: 12px;
  margin-left: auto;
`,ne=n.img`
  cursor: pointer;
`,oe=n.img`
  cursor: pointer;
`;export{de as I};
