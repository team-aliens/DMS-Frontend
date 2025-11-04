import{j as t,M as A,B as h,D as T,m as I,T as y,d as U,k as V,f as B}from"./design-system-R5PU-KJ5.js";import{r as g,L as O}from"./react-vendor-DvN4Y5o0.js";import{H as c}from"./style-vendor-CCa_bSPe.js";import{W as Y}from"./WithNavigatorBar-BaUD9vuh.js";import{u as F,p as R,b as z}from"./index-BhlJXPXA.js";import{h as v,m as D}from"./timeToArray-B3PEZA57.js";import{u as P,a as W,b as Z,c as K,d as G,e as Q,f as q,g as J,h as X,i as tt}from"./index-D4m5LYf9.js";import{u as b,g as et,e as it}from"./queryKeys-B7CxYHCA.js";import{t as st}from"./time-qVz9ajGy.js";import{u as nt}from"./useForm-DVm8TY_W.js";import{b as ot}from"./query-vendor-CBGQWAC0.js";import"./useSchoolsApi-kltzsy-n.js";import"./utils-vendor-Bc17E_qf.js";import"./excel-vendor-CYB7cqj3.js";import"./decoder-D13FVXDo.js";function H({close:e,startHour:n,startMin:r,endHour:i,endMin:a,setApplicationTime:o,onChangeDropdown:d}){return t.jsx(A,{title:"자습실 신청 시간 설정",close:e,inputList:[t.jsxs(at,{children:[t.jsx(T,{items:v,placeholder:"0",onChange:s=>d("startHour",s),width:80,value:n}),t.jsx("p",{children:":"}),t.jsx(T,{items:D,placeholder:"0",onChange:s=>d("startMin",s),width:80,value:r}),t.jsx("p",{className:"to",children:"~"}),t.jsx(T,{items:v,placeholder:"0",onChange:s=>d("endHour",s),width:80,value:i}),t.jsx("p",{children:":"}),t.jsx(T,{items:D,placeholder:"0",onChange:s=>d("endMin",s),width:80,value:a})]})],buttonList:[t.jsx(h,{onClick:o,children:"저장"})]})}const at=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    margin: 0 8px;
  }
  > .to {
    margin: 0 32px;
  }
  > div > label > input {
    text-align: center;
  }
`;function rt({setApplicationTime:e,onChangeDropdown:n,startHour:r,startMin:i,endHour:a,endMin:o}){const[d,s]=g.useState(!1),{selectModal:u,modalState:m,closeModal:l}=F(),{mutateAsync:j}=P(),{toastDispatch:_}=b(),f=()=>{s(S=>!S)},C=()=>{j().catch(()=>_({toastType:"ERROR",actionType:"APPEND_TOAST",message:"신청 내역 출력 오류"})).finally(()=>{l()})};return t.jsxs(t.Fragment,{children:[m.selectedModal==="APPLICATION_TIME"&&t.jsx(H,{onChangeDropdown:n,close:l,startHour:r,startMin:i,endHour:a,endMin:o,setApplicationTime:e}),t.jsxs(dt,{children:[t.jsxs(pt,{children:[t.jsx(I,{fill:!1,colorKey:"primary"}),t.jsxs(y,{margin:["left",20],color:"gray9",size:"bodyS",children:["자습실 신청 시간은 ",r,":",i," ~ ",a,":",o,"까지 입니다."]}),t.jsx(h,{kind:"text",color:"primary",margin:["left","auto"],onClick:()=>u("APPLICATION_TIME"),children:"수정"})]}),t.jsxs("div",{className:"buttonWrapper",children:[t.jsx(h,{Icon:t.jsx(lt,{}),onClick:f,children:"파일"}),d&&t.jsxs(ht,{children:[t.jsx("div",{className:"fileOption",onClick:C,children:"신청 내역 출력"}),t.jsx(ct,{}),t.jsx("div",{className:"fileOption",onClick:()=>u("PRINT_STUDY_ROOM_APPLY"),children:"추가 정보 업로드"})]}),t.jsx(xt,{to:R.apply.studyRoom.create,children:t.jsx(h,{kind:"outline",color:"primary",children:"자습실 생성"})})]})]})]})}function lt(){return t.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M13.7647 8.75H17.1111C17.602 8.75 18 9.14797 18 9.63889V14.8317V14.8317C18 15.8911 17.1411 16.75 16.0817 16.75H4M2 4.13889V15C2 15.9665 2.7835 16.75 3.75 16.75V16.75C4.7165 16.75 5.5 15.9665 5.5 15V9.63889C5.5 9.14797 5.89797 8.75 6.38889 8.75H16.2222V6.64869C16.2222 6.15777 15.8243 5.7598 15.3333 5.7598H9.47712L8.11883 3.65664C7.9551 3.40313 7.67392 3.25 7.37213 3.25H2.88889C2.39797 3.25 2 3.64797 2 4.13889Z",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}const ct=()=>t.jsx("svg",{width:"112",height:"2",viewBox:"0 0 112 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.5 1H111",stroke:"#EEEEEE","stroke-linecap":"round"})}),dt=c.div`
  display: flex;
  .buttonWrapper {
    display: flex;
    margin-left: auto;
    gap: 12px;
    position: relative;
  }
`,pt=c.div`
  display: flex;
  align-items: center;
  min-width: 400px;
  height: 50px;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.color.gray1};
  padding-left: 20px;
  box-shadow: 0 1px 20px rgba(238, 238, 238, 0.8);
  > button {
    min-width: 58px;
  }
`,xt=c(O)``,ht=c.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 132px;
  height: 92px;
  border: 1px solid #eeeeee;
  box-shadow: 0px 1px 20px rgba(238, 238, 238, 0.8);
  border-radius: 4px;
  top: 60px;
  left: -50px;
  background-color: white;
  z-index: 2;
  .fileOption {
    display: flex;
    align-items: center;
    height: 100%;
    font-weight: 400;
    font-size: 12px;
    color: #555555;
    cursor: pointer;
  }
`;function ut({floor:e,name:n,available_grade:r,available_sex:i,total_available_seat:a,in_use_headcount:o}){return t.jsxs(mt,{children:[t.jsxs(L,{children:[t.jsxs(y,{color:"primary",size:"bodyM",children:[e,"층"]}),t.jsx(y,{color:"gray8",size:"bodyM",margin:["left",14],children:n})]}),t.jsx(gt,{}),t.jsxs(L,{children:[t.jsxs(y,{color:"primary",size:"bodyM",children:[et(r)," ",it(i)]}),t.jsxs(y,{color:"gray5",size:"bodyM",margin:["left","auto"],children:[o,"/",a]})]})]})}const mt=c.li`
  width: 280px;
  height: 110px;
  border-radius: 10px;
  background-color: ${({theme:e})=>e.color.gray1};
  box-shadow: 0 1px 20px rgba(238, 238, 238, 0.8);
  padding: 20px 20px 14px 20px;
`,gt=c.hr`
  width: 100%;
  height: 1px;
  background-color: ${({theme:e})=>e.color.gray4};
  margin: 12px 0 14px 0;
`,L=c.div`
  display: flex;
`;function ft({setClickId:e,selectId:n,setSelectId:r,prevId:i,selectModal:a,timeSlot:o}){const d=()=>{e(i),a("EDIT_STUDY_ROOM_TIME")},s=()=>{e(i),a("DELETE_STUDY_ROOM_TIME")},{start_hour:u,start_min:m,end_min:l,end_hour:j}=st(o);return t.jsx(jt,{isSelect:n===i,children:t.jsxs(h,{kind:n==i?"contained":"outline",color:n===i?"primary":"gray",children:[t.jsxs(_t,{onClick:()=>r(i),children:[u,":",m," ~ ",j,":",l," "]}),t.jsx(Tt,{className:"line"}),t.jsxs("div",{className:"timeMenu",children:[t.jsx("div",{onClick:d,children:t.jsx(yt,{pathColor:n==i?"white":"#999999",color:n==i?"#3D8AFF":"#FFFFFF"})}),t.jsx("div",{onClick:s,children:t.jsx(U,{className:"icon",colorKey:n===i?"gray1":"gray5",size:28})})]})]})})}function yt({color:e,pathColor:n}){return t.jsxs("svg",{width:"27",height:"26",viewBox:"0 0 27 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"13.1504",cy:"13",r:"13",fill:e}),t.jsx("path",{d:"M15.6495 11.4451L14.7053 10.5009L8.48589 16.7203V17.6645H9.43009L15.6495 11.4451ZM16.5937 10.5009L17.5379 9.55667L16.5937 8.61247L15.6495 9.55667L16.5937 10.5009ZM9.98299 19H7.15039V16.1667L16.1216 7.19551C16.2468 7.07032 16.4167 7 16.5937 7C16.7708 7 16.9406 7.07032 17.0658 7.19551L18.9549 9.08457C19.0801 9.2098 19.1504 9.37961 19.1504 9.55667C19.1504 9.73374 19.0801 9.90355 18.9549 10.0288L9.98299 19Z",fill:n})]})}const jt=c.div`
  display: flex;
  position: relative;
  gap: 12px;
  height: auto;
  button {
    width: 120px;
    transition: all 0.3s;
    position: relative;
  }
  button .timeMenu {
    display: flex;
    align-items: center;
    position: absolute;
    right: 16px;
    gap: 14px;
    opacity: 0;
    div {
      svg {
        padding: 2px;
        border-radius: 90px;
        background-color: ${({isSelect:e})=>e?"#3D8AFF":"#FFFFFF"};
        fill: ${({isSelect:e})=>e?"#2B7FFF":"#999999"};
      }
    }
  }
  button:hover {
    width: 220px;
    height: auto;
    .timeMenu {
      transition-delay: 0.15s;
      opacity: 1;
      svg {
        fill: white;
      }
    }
    .line {
      position: absolute;
      top: 25%;
      left: 120px;
      path {
        stroke: ${({isSelect:e})=>e?"#579AFF":"#F3F3F3"};
      }
    }
  }
`,_t=c.p`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 16px;
  height: 100%;
`,Tt=({className:e})=>t.jsx("svg",{width:"2",height:"28",viewBox:"0 0 2 28",fill:"none",className:e,xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1.15039 1L1.15039 27",stroke:"",strokeLinecap:"round"})});function Ct({closeModal:e,timeSlotId:n}){const{mutateAsync:r}=W({path:{time_slot_id:n}}),{toastDispatch:i}=b(),a=()=>{r().then(()=>{i({toastType:"SUCCESS",actionType:"APPEND_TOAST",message:"자습실 이용시간이 삭제되었습니다."}),e()}).catch(()=>{i({toastType:"ERROR",actionType:"APPEND_TOAST",message:"자습실 이용시간 삭제를 실패했습니다."})})};return t.jsx(A,{content:"해당 시간을 삭제 하시겠습니까?",close:e,buttonList:[t.jsx(h,{onClick:e,color:"gray",children:"취소"}),t.jsx(h,{color:"error",onClick:a,children:"확인"})]})}function St({closeModal:e}){const[n,r]=g.useState(),{toastDispatch:i}=b(),{mutateAsync:a}=Z(n),{mutateAsync:o}=K(),{mutate:d}=P(),s=l=>{l.target.files[0]&&r(l.target.files[0])},u=()=>{o().catch(()=>{i({toastType:"ERROR",actionType:"APPEND_TOAST",message:"파일 다운로드에 실패했습니다."})})},m=()=>{a().then(()=>{i({toastType:"SUCCESS",actionType:"APPEND_TOAST",message:"파일이 전송되었습니다."})}).catch(()=>{i({toastType:"ERROR",actionType:"APPEND_TOAST",message:"파일 형식이 잘못되었습니다."})}).finally(()=>{e()})};return t.jsxs(A,{title:"추가 정보 업로드",buttonList:[t.jsx(h,{kind:"outline",onClick:e,children:"취소"}),t.jsx(h,{onClick:m,children:"확인"})],close:e,children:[t.jsx(y,{color:"gray6",children:"추가 정보를 업로드하고"}),t.jsx(y,{color:"gray6",children:"확인 버튼을 눌러 자습실 신청 현황을 출력하세요"}),t.jsx(h,{margin:[16,0,0,0],onClick:u,children:"추가 정보 엑셀 예시"}),t.jsxs(Et,{children:[t.jsx("input",{type:"file",style:{display:"none"},id:"file",onChange:s}),t.jsx("label",{htmlFor:"file",children:n?t.jsx("div",{className:"files",children:t.jsxs("div",{className:"file",children:[t.jsx(wt,{}),t.jsxs("div",{children:[t.jsx(y,{color:"gray5",children:n.name}),t.jsxs(y,{size:"bodyS",color:"gray5",children:[Math.round(n.size/1e3),"KB"]})]})]})}):t.jsxs(t.Fragment,{children:[t.jsx(Mt,{}),t.jsx("button",{children:"내 컴퓨터"}),t.jsx("p",{children:"여기에 파일을 끌어다 놓아주세요."})]})})]})]})}function wt(){return t.jsx("svg",{width:"29",height:"28",viewBox:"0 0 29 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M22.7474 22.1666H9.91406C9.2724 22.1666 8.7229 21.938 8.26556 21.4806C7.80823 21.0233 7.57995 20.4742 7.58073 19.8333V3.49996C7.58073 2.85829 7.8094 2.30879 8.26673 1.85146C8.72406 1.39413 9.27318 1.16585 9.91406 1.16663H17.1182C17.4293 1.16663 17.7261 1.22496 18.0084 1.34163C18.2907 1.45829 18.5385 1.62357 18.7516 1.83746L24.4099 7.49579C24.6238 7.70968 24.7891 7.95779 24.9057 8.24013C25.0224 8.52246 25.0807 8.81879 25.0807 9.12913V19.8333C25.0807 20.475 24.8521 21.0245 24.3947 21.4818C23.9374 21.9391 23.3883 22.1674 22.7474 22.1666ZM5.2474 26.8333C4.60573 26.8333 4.05623 26.6046 3.5989 26.1473C3.14156 25.69 2.91329 25.1409 2.91406 24.5V9.33329C2.91406 9.00274 3.02606 8.72546 3.25006 8.50146C3.47406 8.27746 3.75095 8.16585 4.08073 8.16663C4.41129 8.16663 4.68856 8.27863 4.91256 8.50263C5.13656 8.72663 5.24818 9.00352 5.2474 9.33329V24.5H16.9141C17.2446 24.5 17.5219 24.612 17.7459 24.836C17.9699 25.06 18.0815 25.3368 18.0807 25.6666C18.0807 25.9972 17.9687 26.2745 17.7447 26.4985C17.5207 26.7225 17.2438 26.8341 16.9141 26.8333H5.2474ZM18.0807 9.33329H22.7474L16.9141 3.49996V8.16663C16.9141 8.49718 17.0261 8.77446 17.2501 8.99846C17.4741 9.22246 17.751 9.33407 18.0807 9.33329Z",fill:"#DDDDDD"})})}function Mt(){return t.jsx("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M45.8327 83.3327H27.0827C20.7632 83.3327 15.3632 81.1452 10.8827 76.7702C6.40213 72.3952 4.16324 67.048 4.16602 60.7285C4.16602 55.3118 5.79796 50.4855 9.06185 46.2493C12.3257 42.0132 16.5966 39.3049 21.8744 38.1243C23.6105 31.7355 27.0827 26.5618 32.291 22.6035C37.4994 18.6452 43.4021 16.666 49.9994 16.666C58.1244 16.666 65.0174 19.4966 70.6785 25.1577C76.3396 30.8188 79.1688 37.7105 79.166 45.8327C83.9577 46.3882 87.9341 48.4549 91.0952 52.0327C94.2563 55.6105 95.8355 59.7938 95.8327 64.5827C95.8327 69.791 94.0091 74.2188 90.3619 77.866C86.7146 81.5132 82.2882 83.3355 77.0827 83.3327H54.166V53.541L60.8327 59.9993L66.666 54.166L49.9994 37.4993L33.3327 54.166L39.166 59.9993L45.8327 53.541V83.3327Z",fill:"#DDDDDD"})})}const Et=c.div`
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    .files {
      display: flex;
      flex-direction: column;
      margin-top: 31px;
      gap: 16px;
      .file {
        background: #eeeeee;
        border-radius: 4px;
        width: 480px;
        height: 58px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 13px;
        div {
          margin-left: 17px;
        }
      }
    }
    button {
      background: #3d8aff;
      border-radius: 2px;
      width: 96px;
      height: 38px;
      color: white;
      font-weight: 700;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      color: #dddddd;
    }
  }
`;function k({closeModal:e,timeSlotId:n,initTimeSlots:r,ModalType:i}){var C,S,w,M;const[a,o]=g.useState(r),d=i==="edit"&&a.time_slots.filter(p=>p.id===n),{state:s,setState:u}=nt({start_hour:((C=d[0])==null?void 0:C.start_time.slice(0,2))??"00",start_min:((S=d[0])==null?void 0:S.start_time.slice(3,5))??"00",end_hour:((w=d[0])==null?void 0:w.end_time.slice(0,2))??"00",end_min:((M=d[0])==null?void 0:M.end_time.slice(3,5))??"00"}),{mutateAsync:m}=G({body:{start_time:`${s.start_hour}:${s.start_min}`,end_time:`${s.end_hour}:${s.end_min}`}}),{mutateAsync:l}=Q({body:{start_time:`${s.start_hour}:${s.start_min}`,end_time:`${s.end_hour}:${s.end_min}`},path:{time_slot_id:n}}),{toastDispatch:j}=b(),_=()=>{i==="create"?m().then(()=>{j({toastType:"SUCCESS",actionType:"APPEND_TOAST",message:"자습실 이용 시간이 추가되었습니다."}),e()}):l()},f=(p,x)=>{u(E=>({...E,[p]:x}))};return t.jsx(A,{close:e,title:"자습실 이용 시간 설정",inputList:[t.jsxs(bt,{children:[t.jsx(T,{placeholder:"00",value:s.start_hour,items:v,onChange:p=>f("start_hour",p)}),t.jsx("p",{children:":"}),t.jsx(T,{placeholder:"00",value:s.start_min,items:D,onChange:p=>f("start_min",p)}),t.jsx("p",{className:"to",children:"~"}),t.jsx(T,{placeholder:"00",value:s.end_hour,items:v,onChange:p=>f("end_hour",p)}),t.jsx("p",{children:":"}),t.jsx(T,{placeholder:"00",value:s.end_min,items:D,onChange:p=>f("end_min",p)})]})],buttonList:[t.jsx(h,{onClick:_,children:i==="create"?"생성":"수정"})]})}const bt=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    margin: 0 8px;
  }
  > .to {
    margin: 0 32px;
  }
  > div > label > input {
    text-align: center;
  }
`;function Wt(){var p;const{closeModal:e,selectModal:n,modalState:r}=F(),{toastDispatch:i}=b(),{data:a}=q(),[o,d]=g.useState({startHour:"00",startMin:"00",endHour:"00",endMin:"00"}),s=ot();g.useEffect(()=>{if(a!=null&&a.start_at&&(a!=null&&a.end_at)){const[x,E]=a.start_at.split(":"),[N,$]=a.end_at.split(":");d({...o,startHour:x,startMin:E,endHour:N,endMin:$})}},[a]);const u=(x,E)=>{d({...o,[x]:E})},{mutate:m}=J({start_at:`${o.startHour}:${o.startMin}:00`,end_at:`${o.endHour}:${o.endMin}:00`},{onSuccess:()=>{e(),s.invalidateQueries(["getStudentRoomApplicationTime"]),i({toastType:"SUCCESS",actionType:"APPEND_TOAST",message:"신청 시간 수정이 완료되었습니다."})},onError:()=>{i({toastType:"ERROR",actionType:"APPEND_TOAST",message:"수정할 신청 시간을 다시 확인 해 주세요."})}}),{data:l,mutateAsync:j}=X(),[_,f]=g.useState(""),[C,S]=g.useState(""),{data:w,mutate:M}=tt({time_slot:_??l[0]});return g.useEffect(()=>{M()},[_]),g.useEffect(()=>{r.selectedModal!=="ADD_STUDY_ROOM_TIME"&&j()},[r]),g.useEffect(()=>{j().then(x=>{f(x.time_slots[0].id),M()})},[]),t.jsxs(Y,{children:[t.jsx(V,{top:46,left:351,pathToKorean:z}),t.jsxs(vt,{children:[t.jsx(rt,{onChangeDropdown:u,setApplicationTime:m,startHour:o.startHour,startMin:o.startMin,endHour:o.endHour,endMin:o.endMin}),t.jsxs(Dt,{children:[t.jsx(h,{kind:"outline",size:"default",Icon:t.jsx(B,{}),color:"gray",onClick:()=>n("ADD_STUDY_ROOM_TIME"),children:l!=null&&l.time_slots?"":"이용시간을 추가해주세요."}),(p=l==null?void 0:l.time_slots)==null?void 0:p.map(x=>t.jsx(ft,{setClickId:S,selectId:_,setSelectId:f,selectModal:n,prevId:x.id,timeSlot:x}))]}),t.jsx(At,{children:w==null?void 0:w.study_rooms.map(x=>t.jsx(O,{to:R.apply.studyRoom.deatail(x.id),state:{timeSlotId:_},children:t.jsx(ut,{...x})}))})]}),r.selectedModal==="SET_STUDY_ROOM_APPLY_TIME"&&t.jsx(H,{setApplicationTime:m,onChangeDropdown:u,close:e,startHour:o.startHour,startMin:o.startMin,endHour:o.endHour,endMin:o.endMin}),r.selectedModal==="ADD_STUDY_ROOM_TIME"&&t.jsx(k,{ModalType:"create",closeModal:e}),r.selectedModal==="DELETE_STUDY_ROOM_TIME"&&t.jsx(Ct,{timeSlotId:C,closeModal:e}),r.selectedModal==="EDIT_STUDY_ROOM_TIME"&&t.jsx(k,{initTimeSlots:l,closeModal:e,timeSlotId:C,ModalType:"edit"}),r.selectedModal==="PRINT_STUDY_ROOM_APPLY"&&t.jsx(St,{closeModal:e})]})}const vt=c.div`
  width: 990px;
  margin: 0 auto;
  padding: 100px 0;
`,Dt=c.div`
  display: flex;
  gap: 12px;
  margin-top: 40px;
  overflow: scroll;
`,At=c.ul`
  margin-top: 47px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px 75px;
`;c.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;
`;c.div`
  width: 1px;
  height: 26px;
  border: 1px solid #579aff;
  margin: 10px;
`;c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background-color: #2b7fff;
  border-radius: 50px;
`;export{Wt as StudyRoomList};
