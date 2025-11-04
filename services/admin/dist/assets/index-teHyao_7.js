import{j as e,M,B as d,I as N,l as T,D as x,i as W,O,T as w,k as z}from"./design-system-R5PU-KJ5.js";import{H as i}from"./style-vendor-CCa_bSPe.js";import{r as h}from"./react-vendor-DvN4Y5o0.js";import{W as B}from"./WithNavigatorBar-BaUD9vuh.js";import{u as $,a as G,b as K,c as F,d as q,e as J,f as P,g as Q}from"./useRemainApi-CwYd8pL4.js";import{u as y}from"./useForm-DVm8TY_W.js";import{u as g,b as U}from"./index-BhlJXPXA.js";import{m,n as C}from"./queryKeys-B7CxYHCA.js";import{h as k,m as I}from"./timeToArray-B3PEZA57.js";import{u as V}from"./query-vendor-CBGQWAC0.js";import"./useSchoolsApi-kltzsy-n.js";import"./excel-vendor-CYB7cqj3.js";import"./decoder-D13FVXDo.js";import"./utils-vendor-Bc17E_qf.js";function X({initTitle:t,initContent:n,selectModalId:l,kind:r}){const{onHandleChange:c,state:o,setState:a}=y({title:r==="edit"?t:"",content:r==="edit"?n:""}),{closeModal:s}=g(),{mutate:_}=$({title:o.title,description:o.content}),{mutate:p}=G(l,{title:o.title,description:o.content}),f=()=>{r==="create"?_():p(),s()},j=()=>{a({title:"",content:""}),s()};return e.jsx(M,{title:r==="create"?"잔류 항목 추가":"잔류 항목 수정",inputList:[e.jsxs(R,{children:[e.jsx(N,{onChange:c,name:"title",label:"제목",value:o.title,placeholder:"ex) 금요 외박",type:"text",limit:30}),e.jsxs(Z,{children:["(",o.title.length,"/30)"]})]},"title"),e.jsxs(R,{children:[e.jsx(Y,{children:"내용"}),e.jsx(T,{onChange:c,name:"content",value:o.content,height:176,limit:200})]},"content")],buttonList:[e.jsx(d,{disabled:!(o.title&&o.content),onClick:f,children:"추가"},"add")],close:j})}const R=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Y=i.div`
  font-weight: 400;
  font-size: 16px;
  color: #555555;
  margin-left: 6px;
`,Z=i.div`
  align-self: flex-end;
  font-size: 12px;
  font-weight: 400;
  color: #999999;
`;function tt({selectModalId:t}){const{mutate:n}=K(t),{closeModal:l}=g(),r=()=>{n(),l()};return e.jsx(M,{content:"잔류 항목을 삭제하시겠습니까?",buttonList:[e.jsx(d,{kind:"outline",color:"gray",onClick:l,children:"취소"},"cancel"),e.jsx(d,{color:"error",onClick:r,children:"확인"},"okay")],close:l})}const b=["월","화","수","목","금","토","일"];function et(){const{data:t}=F(),{state:n,setState:l}=y({startDay:m(t==null?void 0:t.start_day_of_week),startHour:t==null?void 0:t.start_time.slice(0,2),startMin:t==null?void 0:t.start_time.slice(3,5),endDay:m(t==null?void 0:t.end_day_of_week),endHour:t==null?void 0:t.end_time.slice(0,2),endMin:t==null?void 0:t.end_time.slice(3,5)}),{closeModal:r}=g(),{mutate:c}=q({start_day_of_week:C(n.startDay),start_time:`${n.startHour}:${n.startMin}:00`,end_day_of_week:C(n.endDay),end_time:`${n.endHour}:${n.endMin}:00`});h.useEffect(()=>{l({startDay:m(t==null?void 0:t.start_day_of_week),startHour:t==null?void 0:t.start_time.slice(0,2),startMin:t==null?void 0:t.start_time.slice(3,5),endDay:m(t==null?void 0:t.end_day_of_week),endHour:t==null?void 0:t.end_time.slice(0,2),endMin:t==null?void 0:t.end_time.slice(3,5)})},[t]);const o=()=>{c(),r()},a=(s,_)=>{l(p=>({...p,[_]:s}))};return e.jsx(M,{title:"잔류 신청 시간 설정",inputList:[e.jsxs(nt,{children:[e.jsx(x,{items:b,placeholder:"",onChange:s=>a(s,"startDay"),value:n.startDay,width:45}),e.jsx("p",{className:"day",children:"요일"}),e.jsx(x,{items:k,placeholder:"",onChange:s=>a(s,"startHour"),value:n.startHour,width:70}),e.jsx("p",{className:"day",children:":"}),e.jsx(x,{items:I,placeholder:"",onChange:s=>a(s,"startMin"),value:n.startMin,width:70}),e.jsx("p",{className:"to",children:"~"}),e.jsx(x,{items:b,placeholder:"",onChange:s=>a(s,"endDay"),value:n.endDay,width:45}),e.jsx("p",{className:"day",children:"요일"}),e.jsx(x,{items:k,placeholder:"",onChange:s=>a(s,"endHour"),value:n.endHour,width:70}),e.jsx("p",{className:"day",children:":"}),e.jsx(x,{items:I,placeholder:"",onChange:s=>a(s,"endMin"),value:n.endMin,width:70})]},"time")],buttonList:[e.jsx(d,{color:"primary",onClick:o,children:"확인"},"okay")],close:r})}const nt=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  .day {
    color: #555555;
    font-weight: 400;
    font-size: 14px;
  }
  > .to {
    margin: 0 12px;
  }
  > div > label > input {
    text-align: center;
  }
`,st=({id:t,title:n,description:l,is_applied:r,onDelete:c,onEdit:o})=>{const[a,s]=h.useState(!1);return e.jsxs(ot,{children:[e.jsx(at,{children:n}),e.jsx(lt,{children:l}),e.jsx(ct,{kind:"text",size:"default",onClick:()=>s(!0),children:e.jsx(W,{})}),a&&e.jsx(O,{onOutsideClick:()=>s(!1),children:e.jsxs(rt,{children:[e.jsx(w,{color:"error",onClick:()=>c(t),children:"항목 삭제"}),e.jsx(it,{}),e.jsx(w,{color:"gray6",onClick:()=>o(t,n,l),children:"항목 수정"})]})})]},t)},ot=i.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 16px;
  padding: 28px 0 0 40px;
  width: 1030px;
  min-height: 180px;
  box-shadow: 0 1px 20px rgba(238, 238, 238, 0.8);
  border-radius: 4px;
`,at=i.p`
  font-weight: 700;
  font-size: 22px;
`,it=i.div`
  width: 129px;
  height: 2px;
  background-color: #eeeeee;
`,lt=i.p`
  width: 729px;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
`,rt=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  gap: 15px;
  top: 56px;
  right: 20px;
  width: 160px;
  height: 112px;
  cursor: pointer;
  box-shadow: 0 1px 20px rgba(238, 238, 238, 0.8);
  border-radius: 6px;
  background-color: white;
`,ct=i(d)`
  min-width: 24px;
  width: 24px;
  border: none;
  padding: 0;
  height: 24px;
  appearance: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  :hover {
    background-color: transparent;
  }
`;function bt(){const{data:t}=J(),{mutate:n}=P(),{mutate:l}=V(Q),[r,c]=h.useState("create"),{selectModal:o,modalState:a}=g(),[s,_]=h.useState({id:"",isCheck:!1}),[p,f]=h.useState(""),{setState:j,state:E}=y({title:"",content:""}),D=(u,H,L)=>{f(u),c("edit"),j({title:H,content:L}),o("EDIT_REMAIN_ITEM")},v=u=>{f(u),o("DELETE_REMAIN_ITEM")},S=()=>{c("create"),o("CREATE_REMAIN_ITEM")},A=()=>{o("SET_REMAIN_TIME")};return e.jsxs(B,{children:[e.jsxs(dt,{children:[e.jsx(z,{pathToKorean:U}),e.jsxs(pt,{children:[e.jsx(d,{color:"gray",kind:"outline",onClick:n,children:"액셀 출력"}),e.jsxs(xt,{children:[e.jsx(d,{onClick:A,children:"잔류 신청 시간 설정"}),e.jsx(d,{kind:"outline",onClick:S,children:"항목 추가"})]})]}),e.jsx(ut,{children:t==null?void 0:t.remain_options.map(u=>e.jsx(st,{...u,onDelete:v,onEdit:D}))})]}),a.selectedModal==="SET_REMAIN_TIME"?e.jsx(et,{}):null,(a.selectedModal==="CREATE_REMAIN_ITEM"||a.selectedModal==="EDIT_REMAIN_ITEM")&&e.jsx(X,{selectModalId:p,kind:r,initTitle:E.title,initContent:E.content}),a.selectedModal==="DELETE_REMAIN_ITEM"&&e.jsx(tt,{selectModalId:p})]})}const dt=i.div`
  display: flex;
  flex-direction: column;
  margin: 160px auto 150px auto;
  width: 1030px;
  padding-bottom: 80px;
`,pt=i.div`
  display: flex;
  justify-content: space-between;
  width: 1030px;
`,xt=i.div`
  display: flex;
  gap: 10px;
`,ut=i.div`
  display: flex;
  flex-direction: column;
  margin-top: 17px;
  gap: 20px;
`;export{bt as default};
