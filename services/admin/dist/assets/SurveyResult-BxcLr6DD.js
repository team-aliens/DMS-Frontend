import{j as t,q as e,r as a}from"./design-system-R5PU-KJ5.js";import{W as m}from"./WithNavigatorBar-BaUD9vuh.js";import{k as x}from"./useVoteApi-DKbPm0Pc.js";import{H as n}from"./style-vendor-CCa_bSPe.js";import{h as c}from"./react-vendor-DvN4Y5o0.js";import"./queryKeys-B7CxYHCA.js";import"./utils-vendor-Bc17E_qf.js";import"./index-BhlJXPXA.js";import"./query-vendor-CBGQWAC0.js";import"./useSchoolsApi-kltzsy-n.js";const w=()=>{const{id:s}=c(),{data:o}=x(s),i=new Date,p=new Intl.DateTimeFormat("ko-KR").format(i);return t.jsx(m,{children:t.jsxs(f,{children:[t.jsxs(l,{children:[o==null?void 0:o.voting_topic_name,t.jsx("span",{children:p})]}),t.jsx(d,{children:o&&o.votes.length>0?o.votes.map(r=>t.jsxs("li",{children:[r.name,"(",r.votes,")"]},r.id)):"결과가 없습니다."})]})})},d=n.div`
  font: ${e.bodyM};
`,l=n.div`
  font: ${e.headlineM};
  display: flex;
  flex-direction: column;
  gap: 32px;
  > span {
    font: ${e.bodyM};
    color: ${a.gray5};
  }
`,f=n.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 44px 32px 0px 32px;
  justify-content: center;
  width: 1040px;
  margin: 100px 100px 60px 50px;
  gap: 67px;
`;export{w as SurveyResult};
