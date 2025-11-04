import{j as e,B as r,T as s,M as h,I as j,A as b}from"./design-system-R5PU-KJ5.js";import{H as o}from"./style-vendor-CCa_bSPe.js";import{d as F,r as x,L as H}from"./react-vendor-DvN4Y5o0.js";import{W as z}from"./WithNavigatorBar-BaUD9vuh.js";import{u as U}from"./useForm-DVm8TY_W.js";import{u as p,p as E}from"./index-BhlJXPXA.js";import{u as A}from"./utils-vendor-Bc17E_qf.js";import{c as V,d as O}from"./useSchoolsApi-kltzsy-n.js";import{g as N,h as B,i as I}from"./useMangersApis-CoxZOvfK.js";import{i as R,u as W}from"./queryKeys-B7CxYHCA.js";import{u as Z}from"./query-vendor-CBGQWAC0.js";import{e as $,F as G}from"./excel-vendor-CYB7cqj3.js";import{g as _}from"./index-DHERFh5K.js";import"./decoder-D13FVXDo.js";function q({openNewQuestionModal:n,question:t,answer:l}){return e.jsxs(Q,{children:[e.jsx(P,{children:e.jsx(r,{kind:"contained",color:"gray",onClick:n,children:"질문과 답변 변경하기"})}),e.jsx(s,{display:"block",size:"titleL",children:"확인 질문"}),e.jsx(s,{display:"block",color:"gray6",size:"titleS",margin:[16,0,40,0],children:t}),e.jsx(s,{size:"titleL",display:"block",children:"답변"}),e.jsx(s,{color:"gray6",size:"titleS",display:"block",margin:["top",16],children:l})]})}const Q=o.div`
  width: 500px;
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
  margin-left: 30px;
  padding: 40px 0 0 40px;
`,P=o.div`
  position: relative;
  > button {
    position: absolute;
    right: 32px;
    top: -8px;
  }
`;function X({onClickNewCode:n,code:t}){return e.jsxs(K,{children:[e.jsx(J,{children:e.jsx(r,{kind:"contained",color:"gray",onClick:n,children:"새로 발급하기"})}),e.jsx(s,{display:"block",size:"titleL",children:"확인코드"}),e.jsx(s,{display:"block",size:"headlineM",color:"gray6",margin:["top",24],children:t})]})}const K=o.div`
  width: 500px;
  height: 180px;
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
  padding: 40px 0 0 40px;
`,J=o.div`
  position: relative;
  > button {
    position: absolute;
    right: 32px;
    top: -8px;
  }
`;function Y({question:n,onChange:t,answer:l,onClick:d}){const{closeModal:i}=p();return e.jsx(h,{close:i,buttonList:[e.jsx(r,{kind:"contained",onClick:d,children:"저장"})],title:"새 확인 질문과 답변을 입력해주세요.",inputList:[e.jsx(j,{name:"question",value:n,onChange:t,placeholder:"질문"}),e.jsx(j,{name:"answer",value:l,onChange:t,placeholder:"답변"})]})}function ee(){const n=F(),{closeModal:t}=p(),[l,d,i]=A(["refresh_token","access_token","service"]),c=()=>{i("refresh_token"),i("access_token"),i("service"),n(E.login),t()};return e.jsx(h,{close:t,title:"로그아웃 재확인",content:"로그아웃 하시겠습니까?",buttonList:[e.jsx(r,{onClick:t,kind:"outline",color:"gray",children:"취소"}),e.jsx(r,{onClick:c,kind:"contained",color:"error",children:"확인"})]})}const te=async n=>{const t=new FormData;t.append("file",n);const{data:l}=await R.post("/students/verified-student",t);return l},ne=n=>{const{toastDispatch:t}=W(),{closeModal:l}=p();return Z(()=>te(n),{onSuccess:()=>{t({actionType:"APPEND_TOAST",toastType:"SUCCESS",message:"엑셀이 업로드 되었습니다."}),l()},onError:d=>{d.response.data.message==="Bad Excel Format"?t({actionType:"APPEND_TOAST",toastType:"ERROR",message:"올바른 데이터 형식이 아닙니다."}):t({actionType:"APPEND_TOAST",toastType:"ERROR",message:"중복된 데이터가 존재합니다."})}})},oe=async()=>{const n=new $.Workbook,t=n.addWorksheet("학생등록_템플릿"),l=["학년","반","번호",`성별
(ex. 남, 여)`,"이름",`호실번호
(ex. 301,  501)`,`호실자리위치
(ex. A, B, C)`];t.columns=l.map(i=>({header:i,key:i,alignment:{vertical:"middle",horizontal:"center"}}));for(let i=1;i<8;i++)t.getCell(1,i).fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFE400"}},t.getCell(1,i).border={top:{style:"thin",color:{argb:"949494"}},left:{style:"thin",color:{argb:"949494"}},bottom:{style:"thin",color:{argb:"949494"}},right:{style:"thin",color:{argb:"949494"}}},t.getCell(1,i).alignment={vertical:"middle",horizontal:"center"};t.getColumn(4).width=12,t.getColumn(5).width=10,t.getColumn(6).width=15,t.getColumn(7).width=15;const d=await n.xlsx.writeBuffer();G.saveAs(new Blob([d]),"학생등록_템플릿.xlsx")},ie=()=>{const[n,t]=x.useState(null),l=ne(n),{closeModal:d}=p(),i=c=>{t(c.target.files[0])};return e.jsxs(h,{close:d,title:"학생 등록 엑셀 다운로드",buttonList:[e.jsx(r,{kind:"outline",onClick:d,children:"취소"}),e.jsx(r,{onClick:()=>{l.mutate()},children:"확인"})],children:[e.jsx(r,{onClick:oe,children:"엑셀 양식 다운로드"}),e.jsx(re,{margin:[15,0,14,0],children:"학생을 등록하기 위해서 엑셀을 다운로드 받은 후 정보를 기입한 엑셀을 업로드 해주세요."}),n?e.jsxs(e.Fragment,{children:[e.jsxs(se,{htmlFor:"input-file",children:[e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M22.1668 22.167H9.3335C8.69183 22.167 8.14233 21.9383 7.685 21.481C7.22766 21.0237 6.99939 20.4746 7.00016 19.8337V3.50033C7.00016 2.85866 7.22883 2.30916 7.68616 1.85183C8.1435 1.39449 8.69261 1.16622 9.3335 1.16699H16.5377C16.8488 1.16699 17.1455 1.22533 17.4278 1.34199C17.7102 1.45866 17.9579 1.62394 18.171 1.83783L23.8293 7.49616C24.0432 7.71005 24.2085 7.95816 24.3252 8.24049C24.4418 8.52283 24.5002 8.81916 24.5002 9.12949V19.8337C24.5002 20.4753 24.2715 21.0248 23.8142 21.4822C23.3568 21.9395 22.8077 22.1678 22.1668 22.167ZM4.66683 26.8337C4.02516 26.8337 3.47566 26.605 3.01833 26.1477C2.561 25.6903 2.33272 25.1412 2.3335 24.5003V9.33366C2.3335 9.00311 2.4455 8.72583 2.6695 8.50183C2.8935 8.27783 3.17039 8.16622 3.50016 8.16699C3.83072 8.16699 4.108 8.27899 4.332 8.50299C4.556 8.72699 4.66761 9.00388 4.66683 9.33366V24.5003H16.3335C16.6641 24.5003 16.9413 24.6123 17.1653 24.8363C17.3893 25.0603 17.5009 25.3372 17.5002 25.667C17.5002 25.9975 17.3882 26.2748 17.1642 26.4988C16.9402 26.7228 16.6633 26.8344 16.3335 26.8337H4.66683ZM17.5002 9.33366H22.1668L16.3335 3.50033V8.16699C16.3335 8.49755 16.4455 8.77483 16.6695 8.99883C16.8935 9.22283 17.1704 9.33444 17.5002 9.33366Z",fill:"#DDDDDD"})}),e.jsxs("div",{children:[e.jsx(s,{color:"gray5",size:"bodyS",children:n.name}),e.jsxs(s,{color:"gray5",size:"overlineM",children:[n.size/1e3,"KB"]})]})]}),e.jsx(w,{id:"input-file",type:"file",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",onChange:i})]}):e.jsxs(e.Fragment,{children:[e.jsxs(le,{htmlFor:"input-file",children:[e.jsx("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",children:e.jsx("path",{d:"M45.8327 83.3327H27.0827C20.7632 83.3327 15.3632 81.1452 10.8827 76.7702C6.40213 72.3952 4.16324 67.048 4.16602 60.7285C4.16602 55.3118 5.79796 50.4855 9.06185 46.2493C12.3257 42.0132 16.5966 39.3049 21.8744 38.1243C23.6105 31.7355 27.0827 26.5618 32.291 22.6035C37.4994 18.6452 43.4021 16.666 49.9994 16.666C58.1244 16.666 65.0174 19.4966 70.6785 25.1577C76.3396 30.8188 79.1688 37.7105 79.166 45.8327C83.9577 46.3882 87.9341 48.4549 91.0952 52.0327C94.2563 55.6105 95.8355 59.7938 95.8327 64.5827C95.8327 69.791 94.0091 74.2188 90.3619 77.866C86.7146 81.5132 82.2882 83.3355 77.0827 83.3327H54.166V53.541L60.8327 59.9993L66.666 54.166L49.9994 37.4993L33.3327 54.166L39.166 59.9993L45.8327 53.541V83.3327Z",fill:"#DDDDDD"})}),e.jsx(s,{color:"gray4",children:"여기에 파일을 끌어다 놓아주세요."})]}),e.jsx(w,{id:"input-file",type:"file",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",onChange:i})]})]})},se=o.label`
  background: #eeeeee;
  border-radius: 4px;
  height: 58px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: 13px;
  margin-bottom: 158px;
`,le=o.label`
  padding: 6px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin-bottom: 62px;
`,w=o.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  display: none;
`,re=o(s)`
  width: 324px;
`;function de({onClick:n}){const{closeModal:t}=p(),l=()=>{n(),t()};return e.jsx(h,{close:t,content:"확인코드를 새로 발급하시겠습니까?",buttonList:[e.jsx(r,{onClick:t,kind:"outline",color:"gray",children:"취소"}),e.jsx(r,{onClick:l,kind:"contained",color:"error",children:"확인"})]})}const ae=()=>{const[n,t]=x.useState(null),l=N(n),{mutate:d}=_(),i=u=>{t(u.target.files[0])},{closeModal:c}=p();return e.jsxs(h,{close:c,title:"호실 정보 변경",buttonList:[e.jsx(r,{kind:"outline",onClick:c,children:"취소"}),e.jsx(r,{onClick:()=>{l.mutate()},children:"확인"})],children:[e.jsx(r,{onClick:d,children:"학생 정보 다운로드"}),e.jsxs(xe,{margin:[15,0,14,0],children:["학생 정보 엑셀을 다운로드 받은 후",e.jsx("br",{}),"호실, 자리 위치를 수정하여 업로드 해주세요."]}),n?e.jsxs(e.Fragment,{children:[e.jsxs(ce,{htmlFor:"input-file",children:[e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M22.1668 22.167H9.3335C8.69183 22.167 8.14233 21.9383 7.685 21.481C7.22766 21.0237 6.99939 20.4746 7.00016 19.8337V3.50033C7.00016 2.85866 7.22883 2.30916 7.68616 1.85183C8.1435 1.39449 8.69261 1.16622 9.3335 1.16699H16.5377C16.8488 1.16699 17.1455 1.22533 17.4278 1.34199C17.7102 1.45866 17.9579 1.62394 18.171 1.83783L23.8293 7.49616C24.0432 7.71005 24.2085 7.95816 24.3252 8.24049C24.4418 8.52283 24.5002 8.81916 24.5002 9.12949V19.8337C24.5002 20.4753 24.2715 21.0248 23.8142 21.4822C23.3568 21.9395 22.8077 22.1678 22.1668 22.167ZM4.66683 26.8337C4.02516 26.8337 3.47566 26.605 3.01833 26.1477C2.561 25.6903 2.33272 25.1412 2.3335 24.5003V9.33366C2.3335 9.00311 2.4455 8.72583 2.6695 8.50183C2.8935 8.27783 3.17039 8.16622 3.50016 8.16699C3.83072 8.16699 4.108 8.27899 4.332 8.50299C4.556 8.72699 4.66761 9.00388 4.66683 9.33366V24.5003H16.3335C16.6641 24.5003 16.9413 24.6123 17.1653 24.8363C17.3893 25.0603 17.5009 25.3372 17.5002 25.667C17.5002 25.9975 17.3882 26.2748 17.1642 26.4988C16.9402 26.7228 16.6633 26.8344 16.3335 26.8337H4.66683ZM17.5002 9.33366H22.1668L16.3335 3.50033V8.16699C16.3335 8.49755 16.4455 8.77483 16.6695 8.99883C16.8935 9.22283 17.1704 9.33444 17.5002 9.33366Z",fill:"#DDDDDD"})}),e.jsxs("div",{children:[e.jsx(s,{color:"gray5",size:"bodyS",children:n.name}),e.jsxs(s,{color:"gray5",size:"overlineM",children:[n.size/1e3,"KB"]})]})]}),e.jsx(y,{id:"input-file",type:"file",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",onChange:i})]}):e.jsxs(e.Fragment,{children:[e.jsxs(pe,{htmlFor:"input-file",children:[e.jsx("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",children:e.jsx("path",{d:"M45.8327 83.3327H27.0827C20.7632 83.3327 15.3632 81.1452 10.8827 76.7702C6.40213 72.3952 4.16324 67.048 4.16602 60.7285C4.16602 55.3118 5.79796 50.4855 9.06185 46.2493C12.3257 42.0132 16.5966 39.3049 21.8744 38.1243C23.6105 31.7355 27.0827 26.5618 32.291 22.6035C37.4994 18.6452 43.4021 16.666 49.9994 16.666C58.1244 16.666 65.0174 19.4966 70.6785 25.1577C76.3396 30.8188 79.1688 37.7105 79.166 45.8327C83.9577 46.3882 87.9341 48.4549 91.0952 52.0327C94.2563 55.6105 95.8355 59.7938 95.8327 64.5827C95.8327 69.791 94.0091 74.2188 90.3619 77.866C86.7146 81.5132 82.2882 83.3355 77.0827 83.3327H54.166V53.541L60.8327 59.9993L66.666 54.166L49.9994 37.4993L33.3327 54.166L39.166 59.9993L45.8327 53.541V83.3327Z",fill:"#DDDDDD"})}),e.jsx(s,{color:"gray4",children:"여기에 파일을 끌어다 놓아주세요."})]}),e.jsx(y,{id:"input-file",type:"file",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",onChange:i})]})]})},ce=o.label`
  background: #eeeeee;
  border-radius: 4px;
  height: 58px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: 13px;
  margin-bottom: 158px;
`,pe=o.label`
  padding: 6px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin-bottom: 62px;
`,y=o.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  display: none;
`,xe=o(s)`
  width: 324px;
`,he=()=>{const[n,t]=x.useState(null),l=B(n),{mutate:d}=_(),{closeModal:i}=p(),c=u=>{t(u.target.files[0])};return e.jsxs(h,{close:i,title:"학번 정보 변경",buttonList:[e.jsx(r,{kind:"outline",onClick:i,children:"취소"}),e.jsx(r,{onClick:()=>{l.mutate()},children:"확인"})],children:[e.jsx(r,{onClick:d,children:"학생 정보 다운로드"}),e.jsxs(Ce,{margin:[15,0,14,0],children:["학생 정보 엑셀을 다운로드 받은 후",e.jsx("br",{}),"학번을 수정하여 업로드 해주세요."]}),n?e.jsxs(e.Fragment,{children:[e.jsxs(ue,{htmlFor:"input-file",children:[e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M22.1668 22.167H9.3335C8.69183 22.167 8.14233 21.9383 7.685 21.481C7.22766 21.0237 6.99939 20.4746 7.00016 19.8337V3.50033C7.00016 2.85866 7.22883 2.30916 7.68616 1.85183C8.1435 1.39449 8.69261 1.16622 9.3335 1.16699H16.5377C16.8488 1.16699 17.1455 1.22533 17.4278 1.34199C17.7102 1.45866 17.9579 1.62394 18.171 1.83783L23.8293 7.49616C24.0432 7.71005 24.2085 7.95816 24.3252 8.24049C24.4418 8.52283 24.5002 8.81916 24.5002 9.12949V19.8337C24.5002 20.4753 24.2715 21.0248 23.8142 21.4822C23.3568 21.9395 22.8077 22.1678 22.1668 22.167ZM4.66683 26.8337C4.02516 26.8337 3.47566 26.605 3.01833 26.1477C2.561 25.6903 2.33272 25.1412 2.3335 24.5003V9.33366C2.3335 9.00311 2.4455 8.72583 2.6695 8.50183C2.8935 8.27783 3.17039 8.16622 3.50016 8.16699C3.83072 8.16699 4.108 8.27899 4.332 8.50299C4.556 8.72699 4.66761 9.00388 4.66683 9.33366V24.5003H16.3335C16.6641 24.5003 16.9413 24.6123 17.1653 24.8363C17.3893 25.0603 17.5009 25.3372 17.5002 25.667C17.5002 25.9975 17.3882 26.2748 17.1642 26.4988C16.9402 26.7228 16.6633 26.8344 16.3335 26.8337H4.66683ZM17.5002 9.33366H22.1668L16.3335 3.50033V8.16699C16.3335 8.49755 16.4455 8.77483 16.6695 8.99883C16.8935 9.22283 17.1704 9.33444 17.5002 9.33366Z",fill:"#DDDDDD"})}),e.jsxs("div",{children:[e.jsx(s,{color:"gray5",size:"bodyS",children:n.name}),e.jsxs(s,{color:"gray5",size:"overlineM",children:[n.size/1e3,"KB"]})]})]}),e.jsx(k,{id:"input-file",type:"file",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",onChange:c})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ge,{htmlFor:"input-file",children:[e.jsx("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",children:e.jsx("path",{d:"M45.8327 83.3327H27.0827C20.7632 83.3327 15.3632 81.1452 10.8827 76.7702C6.40213 72.3952 4.16324 67.048 4.16602 60.7285C4.16602 55.3118 5.79796 50.4855 9.06185 46.2493C12.3257 42.0132 16.5966 39.3049 21.8744 38.1243C23.6105 31.7355 27.0827 26.5618 32.291 22.6035C37.4994 18.6452 43.4021 16.666 49.9994 16.666C58.1244 16.666 65.0174 19.4966 70.6785 25.1577C76.3396 30.8188 79.1688 37.7105 79.166 45.8327C83.9577 46.3882 87.9341 48.4549 91.0952 52.0327C94.2563 55.6105 95.8355 59.7938 95.8327 64.5827C95.8327 69.791 94.0091 74.2188 90.3619 77.866C86.7146 81.5132 82.2882 83.3355 77.0827 83.3327H54.166V53.541L60.8327 59.9993L66.666 54.166L49.9994 37.4993L33.3327 54.166L39.166 59.9993L45.8327 53.541V83.3327Z",fill:"#DDDDDD"})}),e.jsx(s,{color:"gray4",children:"여기에 파일을 끌어다 놓아주세요."})]}),e.jsx(k,{id:"input-file",type:"file",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",onChange:c})]})]})},ue=o.label`
  background: #eeeeee;
  border-radius: 4px;
  height: 58px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: 13px;
  margin-bottom: 158px;
`,ge=o.label`
  padding: 6px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin-bottom: 62px;
`,k=o.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  display: none;
`,Ce=o(s)`
  width: 324px;
`;function Be(){const{modalState:n,selectModal:t}=p(),l=()=>t("NEW_QNA"),d=()=>t("LOGOUT"),i=()=>t("STUDENT_EXEL"),c=()=>t("STUDENT_EDIT_ROOM_EXCEL"),u=()=>t("STUDENT_EDIT_GRADE_EXCEL"),{onHandleChange:L,state:C}=U({question:"",answer:""}),{answer:S,question:D}=C,{data:a}=I(),M=V(C),g=O(),[T,m]=x.useState("");return x.useEffect(()=>{m(a==null?void 0:a.code)},[a]),x.useEffect(()=>{var f;g.data&&m((f=g.data)==null?void 0:f.code)},[g.isSuccess,g.data]),e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsxs(je,{children:[e.jsx(s,{display:"block",size:"headlineM",margin:["bottom",60],children:a==null?void 0:a.school_name}),e.jsxs(me,{children:[e.jsxs("div",{children:[e.jsx(X,{onClickNewCode:()=>t("SCHOOL_CHECKING_CODE"),code:T}),e.jsxs(fe,{children:[e.jsxs(be,{to:E.myPage.changePwd,children:[e.jsx(s,{display:"block",size:"titleS",children:"비밀번호 변경"}),e.jsx(b,{size:24,direction:"right"})]}),e.jsx(_e,{margin:["left","auto"],onClick:d,display:"block",size:"titleS",color:"error",children:"로그아웃"})]})]}),e.jsx(q,{openNewQuestionModal:l,question:a==null?void 0:a.question,answer:a==null?void 0:a.answer})]}),e.jsxs(we,{children:[e.jsxs(ye,{onClick:i,children:[e.jsx(s,{display:"block",size:"titleS",children:"학생 등록"}),e.jsx(b,{size:24,direction:"right"})]}),e.jsxs(ke,{children:[e.jsx(v,{onClick:c,children:e.jsx(s,{display:"block",size:"titleS",children:"호실 정보 변경"})}),e.jsx(Ee,{onClick:u,children:e.jsx(s,{display:"block",size:"titleS",children:"학번 정보 변경"})})]})]})]})}),n.selectedModal==="NEW_QNA"&&e.jsx(Y,{question:D,onChange:L,answer:S,onClick:M.mutate}),n.selectedModal==="SCHOOL_CHECKING_CODE"&&e.jsx(de,{onClick:g.mutate}),n.selectedModal==="LOGOUT"&&e.jsx(ee,{}),n.selectedModal==="STUDENT_EXEL"&&e.jsx(ie,{}),n.selectedModal==="STUDENT_EDIT_ROOM_EXCEL"&&e.jsx(ae,{}),n.selectedModal==="STUDENT_EDIT_GRADE_EXCEL"&&e.jsx(he,{})]})}const me=o.div`
  display: flex;
  margin-left: auto;
`,fe=o.div`
  display: flex;
  margin-top: 30px;
`,je=o.div`
  margin: 160px 0 0 80px;
`,be=o(H)`
  width: 233px;
  display: flex;
  align-items: center;
  padding-left: 24px;
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
  > div {
    margin-right: 60px;
  }
`,we=o.div`
  display: flex;
  justify-content: space-between;
`,ye=o.div`
  width: 500px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0 24px;
  margin-top: 25px;
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
`,ke=o.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`,v=o.div`
  width: 233px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0 24px;
  margin-top: 25px;
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
`,Ee=o(v)`
  width: 250px;
`,_e=o(s)`
  width: 250px;
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
  padding: 24px 21px;
  cursor: pointer;
`;export{Be as MyPage};
