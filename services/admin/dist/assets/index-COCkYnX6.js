import{j as i,T as r}from"./design-system-R5PU-KJ5.js";import{H as o}from"./style-vendor-CCa_bSPe.js";import{L as t}from"./react-vendor-DvN4Y5o0.js";import{W as d}from"./WithNavigatorBar-BaUD9vuh.js";import{p as e}from"./index-BhlJXPXA.js";import{b as x}from"./useSchoolsApi-kltzsy-n.js";import"./queryKeys-B7CxYHCA.js";import"./utils-vendor-Bc17E_qf.js";import"./query-vendor-CBGQWAC0.js";function y(){const{data:s}=x();return i.jsx(d,{children:i.jsxs(c,{children:[(s==null?void 0:s.study_room_service)&&i.jsx(t,{to:e.apply.studyRoom.list,children:i.jsx(n,{children:i.jsxs("div",{children:[i.jsx(r,{size:"titleM",children:"자습실"}),i.jsxs(r,{children:["자습실 관리와 생성 ",i.jsx("br",{}),"또는 수정,삭제할 수 있습니다."]})]})})}),(s==null?void 0:s.remain_service)&&i.jsx(t,{to:e.apply.remains.list,children:i.jsx(n,{children:i.jsxs("div",{children:[i.jsx(r,{size:"titleM",children:"잔류"}),i.jsxs(r,{children:["잔류 항목 확인과 생성 ",i.jsx("br",{})," 또는 수정,삭제할 수 있습니다."]})]})})}),(s==null?void 0:s.outing_service)&&i.jsx(t,{to:e.outing,children:i.jsx(n,{children:i.jsxs("div",{children:[i.jsx(r,{size:"titleM",children:"주말 외출"}),i.jsxs(r,{children:["주말 외출 명단을 확인하고 ",i.jsx("br",{})," 관리할 수 있습니다."]})]})})}),(s==null?void 0:s.volunteer_service)&&i.jsx(t,{to:e.apply.volunteer.list,children:i.jsx(n,{children:i.jsxs("div",{children:[i.jsx(r,{size:"titleM",children:"봉사"}),i.jsxs(r,{children:["봉사 신청 명단을 확인하고 ",i.jsx("br",{})," 관리할 수 있습니다."]})]})})})]})})}const c=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 260px auto auto;
  gap: 30px;
  align-items: center;
  justify-content: center;
`,n=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 180px;
  background: #ffffff;
  box-shadow: 0px 1px 20px rgba(238, 238, 238, 0.8);
  border-radius: 4px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;export{y as default};
