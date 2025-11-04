import{j as t,T as d,B as m,k as u}from"./design-system-R5PU-KJ5.js";import{W as T}from"./WithNavigatorBar-BaUD9vuh.js";import{H as i}from"./style-vendor-CCa_bSPe.js";import{r as f,a as y,V as g,b as A}from"./Header-Cq8aUTn2.js";import{u as h}from"./queryKeys-B7CxYHCA.js";import{h as j,r as x}from"./react-vendor-DvN4Y5o0.js";import{b as S}from"./index-BhlJXPXA.js";import"./useSchoolsApi-kltzsy-n.js";import"./query-vendor-CBGQWAC0.js";import"./utils-vendor-Bc17E_qf.js";function E({name:n,gcd:p,id:s,onApprove:c,onDelete:l}){const{toastDispatch:o}=h(),e=async()=>{try{await y(s),c(s),o({actionType:"APPEND_TOAST",toastType:"SUCCESS",message:"봉사 신청을 수락했습니다."})}catch{o({actionType:"APPEND_TOAST",toastType:"ERROR",message:"봉사 신청 수락에 실패했습니다."})}},a=async()=>{try{await f(s),l(s),o({actionType:"APPEND_TOAST",toastType:"SUCCESS",message:"봉사 신청을 거절했습니다."})}catch{o({actionType:"APPEND_TOAST",toastType:"ERROR",message:"봉사 신청 거절에 실패했습니다."})}};return t.jsxs(D,{children:[t.jsxs(v,{children:[t.jsx(d,{size:"bodyM",children:p}),t.jsx(d,{size:"bodyM",children:n})]}),t.jsxs(P,{children:[t.jsx(m,{kind:"outline",onClick:a,children:"거절"}),t.jsx(m,{onClick:e,children:"수락"})]})]})}const D=i.div`
  display: flex;
  width: 990px;
  height: 82px;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);
  padding: 16px 24px;
  align-items: center;
`,P=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
`,v=i.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;function z(){const{id:n}=j(),[p,s]=x.useState([]),{toastDispatch:c}=h();x.useEffect(()=>{(async()=>{try{const a=await A(n);s((a==null?void 0:a.applicants)||[])}catch{c({actionType:"APPEND_TOAST",toastType:"ERROR",message:"봉사 활동 신청된 학생 조회에 실패했습니다."})}})()},[n]);const l=e=>{s(a=>a.filter(r=>r.id!==e))},o=e=>{s(a=>a.filter(r=>r.id!==e))};return t.jsx(T,{children:t.jsxs(R,{children:[t.jsx(u,{left:366,pathToKorean:S}),t.jsx(g,{}),t.jsx(_,{children:p.map(e=>t.jsx(E,{name:e.name,gcd:e.gcd,onApprove:l,id:e.id,onDelete:o},e.id))})]})})}const R=i.div`
  margin: 0 auto;
  width: 1000px;
`,_=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 100px;
`;export{z as VolunteerDetail};
