import{j as o,T as a,B as r,M as m,k as p}from"./design-system-R5PU-KJ5.js";import{H as s}from"./style-vendor-CCa_bSPe.js";import{L as x,h as u}from"./react-vendor-DvN4Y5o0.js";import{d as h}from"./queryKeys-B7CxYHCA.js";import{p as j,u as g,b as f}from"./index-BhlJXPXA.js";import{W as b}from"./WithNavigatorBar-BaUD9vuh.js";import{a as k,b as y}from"./useNoticeApi-Cjq6lB9j.js";import"./utils-vendor-Bc17E_qf.js";import"./query-vendor-CBGQWAC0.js";import"./useSchoolsApi-kltzsy-n.js";function N({noticeId:t,createdDate:i,onClickDeleteNotice:n}){return o.jsxs(C,{children:[o.jsx(a,{size:"bodyM",color:"gray5",display:"inline-block",children:h(i)}),o.jsx(x,{to:j.notice.patch(t),children:o.jsx(r,{kind:"outline",color:"primary",children:"수정하기"})}),o.jsx(r,{kind:"outline",onClick:n,color:"error",children:"삭제하기"})]})}const C=s.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({theme:t})=>t.color.gray3};

  > a {
    margin-left: auto;
  }
  button {
    margin-left: 10px;
  }
`;function D({closeModal:t,deleteNotice:i}){return o.jsx(m,{title:"",content:"공지를 삭제하시겠습니까?",close:t,buttonList:[o.jsx(r,{kind:"outline",color:"gray",onClick:t,children:"취소"}),o.jsx(r,{kind:"contained",color:"error",onClick:i,children:"삭제"})]})}function H(){const{noticeId:t}=u(),{selectModal:i,modalState:n,closeModal:c}=g(),{data:e}=k(t),l=y(t),d=()=>{i("DELETE_NOTICE")};return o.jsxs(o.Fragment,{children:[n.selectedModal==="DELETE_NOTICE"&&o.jsx(D,{closeModal:c,deleteNotice:l.mutate}),o.jsx(b,{children:o.jsxs(E,{children:[o.jsx(p,{left:366,pathToKorean:f}),o.jsx(a,{size:"titleM",color:"gray10",display:"inline-block",margin:["top",160],children:e==null?void 0:e.title}),o.jsx(N,{onClickDeleteNotice:d,createdDate:e==null?void 0:e.created_at,noticeId:t}),o.jsx(M,{color:"gray7",size:"bodyM",display:"inline-block",margin:["top",40],children:e==null?void 0:e.content})]})})]})}const E=s.div`
  width: 1030px;
  margin: 0 auto;
`,M=s(a)`
  white-space: pre-line;
`;export{H as NoticeDetail};
