import{j as r,T as a,B as e}from"./design-system-R5PU-KJ5.js";import{H as t}from"./style-vendor-CCa_bSPe.js";import{r as d,L as n}from"./react-vendor-DvN4Y5o0.js";import{W as l}from"./WithNavigatorBar-BaUD9vuh.js";import{u as x,N as m}from"./useNoticeApi-Cjq6lB9j.js";import{d as u}from"./queryKeys-B7CxYHCA.js";import{p}from"./index-BhlJXPXA.js";import"./useSchoolsApi-kltzsy-n.js";import"./query-vendor-CBGQWAC0.js";import"./utils-vendor-Bc17E_qf.js";function g({noticeItem:o}){return r.jsxs(h,{children:[r.jsx(a,{size:"bodyL",children:o==null?void 0:o.title}),r.jsx(a,{size:"bodyM",color:"gray5",margin:["left","auto"],children:u(o.created_at)})]})}const h=t.li`
  width: 100%;
  height: 60px;
  background-color: ${({theme:o})=>o.color.gray1};
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;function B(){const[o,c]=d.useState("NEW"),{data:s}=x(o);return r.jsx(l,{children:r.jsxs(f,{children:[r.jsxs(j,{children:[r.jsxs(e,{kind:"outline",color:"gray",onClick:()=>c(o==="NEW"?"OLD":"NEW"),children:[m[o],"순"]}),r.jsx(n,{to:p.notice.write,children:r.jsx(e,{kind:"outline",color:"primary",children:"공지 작성하기"})})]}),r.jsx(y,{children:s&&s.notices.map(i=>r.jsx(n,{to:p.notice.detail(i.id),children:r.jsx(g,{noticeItem:i},i.id)},i.id))})]})})}const f=t.div`
  margin: 0 auto;
  width: 1030px;
  margin-bottom: 150px;
`,j=t.section`
  margin-top: 160px;
  display: flex;
  > a {
    margin-left: auto;
  }
`,y=t.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px 0;
`;export{B as NoticeListPage};
