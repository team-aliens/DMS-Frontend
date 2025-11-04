import{j as e,T as c,B as u,M as w,k as b,n as v}from"./design-system-R5PU-KJ5.js";import{H as s}from"./style-vendor-CCa_bSPe.js";import{W as E}from"./WithNavigatorBar-BaUD9vuh.js";import{L as T,h as _,r as f,u as R}from"./react-vendor-DvN4Y5o0.js";import{m as S,n as k,j as M}from"./index-D4m5LYf9.js";import{e as D,g as L}from"./queryKeys-B7CxYHCA.js";import{p as N,u as $,b as A}from"./index-BhlJXPXA.js";import{u as C}from"./useStudyRoom-BGqrPZyW.js";import{t as m}from"./time-qVz9ajGy.js";import{u as F}from"./useForm-DVm8TY_W.js";import"./useSchoolsApi-kltzsy-n.js";import"./query-vendor-CBGQWAC0.js";import"./excel-vendor-CYB7cqj3.js";import"./decoder-D13FVXDo.js";import"./utils-vendor-Bc17E_qf.js";const B=[{name:"자습실 층",value:"floor",func:t=>`${t}층`},{name:"자습실 이름",value:"name",func:t=>t},{name:"이용 가능한 자리",value:"total_available_seat",func:t=>t},{name:"신청 가능 성별",value:"available_sex",func:t=>D(t)},{name:"신청 가능 학년",value:"available_grade",func:t=>L(t)}];function z({detail:t,id:o,selectModal:a,timeSlotId:i}){return e.jsxs(O,{children:[B.map(r=>{if(t)return e.jsx(W,{children:e.jsxs(e.Fragment,{children:[e.jsx(c,{size:"BtnM",margin:["bottom",12],children:r.name}),r.func(t[r.value])]})})}),e.jsx(T,{to:N.apply.studyRoom.patch(o),state:{timeSlotId:i},children:e.jsx(u,{color:"primary",kind:"rounded",children:"수정하기"})}),e.jsx(u,{color:"error",kind:"rounded",margin:["left",10],onClick:a,children:"삭제하기"})]})}const O=s.div`
  display: flex;
  > a {
    margin-left: auto;
  }
`,W=s.div`
  margin-right: 48px;
`;function I({close:t,deleteStudyRoom:o}){return e.jsx(w,{content:`삭제된 자습실은 복구가 불가능합니다.
해당 자습실을 삭제하시겠습니까?`,buttonList:[e.jsx(u,{kind:"outline",color:"primary",onClick:t,children:"취소"}),e.jsx(u,{kind:"contained",color:"error",onClick:o,children:"삭제"})],close:t})}function K({seatTypes:t}){return e.jsx(H,{children:t.map(o=>e.jsxs(P,{color:o.color,children:[e.jsx("div",{className:"color"}),e.jsx(c,{margin:["left",9],className:"colorName",children:o.name})]}))})}const H=s.ul`
  width: 360px;
  height: 40px;
  display: flow;
  overflow-x: scroll;
`,P=s.li`
  display: flex;
  align-items: center;
  margin-right: 16px;
  :last-of-type {
    margin-right: 0;
  }
  > .color {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({color:t})=>t};
  }
  > .colorName {
    color: ${({color:t})=>t};
  }
`,U=["프로필 사진","번호","자리 종류","학번 & 이름"];function V({studentList:t}){return e.jsxs(Y,{children:[e.jsx(c,{size:"titleS",color:"primary",children:"사용중인 학생"}),e.jsx(q,{children:U.map(o=>e.jsx(G,{color:"gray4",size:"captionM",children:o}))}),e.jsx(J,{}),e.jsx(Q,{children:t.map(o=>{var a,i,r,n,d;return(o==null?void 0:o.student)&&e.jsxs(X,{color:(a=o.type)==null?void 0:a.color,children:[e.jsx("img",{src:((i=o.student)==null?void 0:i.profile_image_url)||"https://image-dms.s3.ap-northeast-2.amazonaws.com/59fd0067-93ef-4bcb-8722-5bc8786c5156%7C%7C%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.png",alt:"프로필",width:60,height:60}),e.jsxs(c,{size:"captionM",color:"gray10",children:[o.number,"번"]}),e.jsx(c,{size:"captionM",color:"gray10",className:"typeName",children:(r=o.type)==null?void 0:r.name}),e.jsxs(c,{size:"captionM",color:"gray10",children:[(n=o.student)==null?void 0:n.gcn,e.jsx("br",{}),(d=o.student)==null?void 0:d.name]})]})})})]})}const Y=s.div`
  width: 360px;
  height: 600px;
  border: 3px solid ${({theme:t})=>t.color.primary};
  border-radius: 10px;
  overflow: scroll;
  padding: 20px;
`,q=s.div`
  display: flex;
  width: 100%;
  margin-top: 22px;
  justify-content: space-evenly;
`,G=s(c)`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`,J=s.hr`
  width: 100%;
  height: 1px;
  background-color: ${({theme:t})=>t.color.gray4};
  margin-top: 10px;
`,Q=s.ul`
  width: 100%;
`,X=s.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 12px;
  > div {
    width: 60px;
    text-align: center;
  }
  > img {
    border-radius: 50%;
  }
  > .typeName {
    color: ${({color:t})=>t};
  }
`;function Z({timeSlotId:t,setTimeSlotState:o,refetch:a}){const{id:i}=_(),{data:r}=S(i,t),{initalValue:n,studyRoomState:d}=C(),{time_slots:g,seat:y,...j}=d,[x,p]=f.useState(t),h=async l=>{p(l),await o(l),a()};return f.useEffect(()=>{n(r)},[r]),e.jsxs(tt,{children:[e.jsx(et,{children:"자습실 이용 시간"}),e.jsx(ot,{children:r==null?void 0:r.time_slots.map(l=>e.jsxs(st,{isSelect:x===l.id,onClick:()=>h(l.id),children:[m(l).start_hour,":",m(l).start_min," ~"," ",m(l).end_hour,":",m(l).end_min]}))})]})}const tt=s.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`,et=s.p`
  font-weight: 700;
  font-size: 14px;
  white-space: nowrap;
`,ot=s.div`
  display: flex;
  gap: 12px;
  margin-left: 16px;
  white-space: nowrap;
  overflow-x: scroll;
`,st=s.button`
  display: flex;
  flex: none;
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 30px;
  background: ${({isSelect:t})=>t?"#F5F9FF":"#ffffff"};
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: ${({isSelect:t})=>t?"#3D8AFF":"black"};
  border: ${({isSelect:t})=>t?"1px solid #3D8AFF":"black"};
  cursor: pointer;
  white-space: nowrap;
`;function St(){const{id:t}=_();let a=R().state.timeSlotId;const{state:i,setState:r}=F(a),{data:n,refetch:d}=S(t,i),{selectModal:g,closeModal:y,modalState:j}=$(),x=k(t),{data:p}=M(t);return f.useEffect(()=>{a=i},[i]),e.jsxs(E,{children:[j.selectedModal==="DELETE_STUDY_ROOM"&&e.jsx(I,{close:y,deleteStudyRoom:x.mutate}),e.jsxs(rt,{children:[e.jsx(b,{top:46,left:351,pathToKorean:A}),e.jsx(z,{detail:n,id:t,selectModal:()=>g("DELETE_STUDY_ROOM"),timeSlotId:a}),e.jsx(Z,{timeSlotId:a,setTimeSlotState:r,refetch:d}),e.jsxs(at,{children:[n&&e.jsx(v,{...n}),e.jsxs("section",{children:[e.jsx(K,{seatTypes:(p==null?void 0:p.types)||[]}),e.jsx(V,{studentList:(n==null?void 0:n.seats.filter(h=>h.status==="AVAILABLE"))||[]})]})]})]})]})}const rt=s.section`
  width: 1060px;
  margin: 0 auto;
  padding: 110px 0 50px 0;
`,at=s.div`
  display: flex;
  margin-top: 52px;
  > section {
    margin-left: 16px;
  }
`;export{St as StudyRoomDetail};
