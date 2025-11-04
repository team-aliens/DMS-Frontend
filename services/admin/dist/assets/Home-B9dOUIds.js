import{j as e,c as pt,C as me,T as p,t as R,M as V,I as H,B as _,d as se,e as ie,f as re,A as K,D as ge,O as J,g as xt,h as gt,i as ut}from"./design-system-R5PU-KJ5.js";import{H as i}from"./style-vendor-CCa_bSPe.js";import{r as u,d as ht}from"./react-vendor-DvN4Y5o0.js";import{S as mt,G as yt}from"./index-DHERFh5K.js";import{P as St,a as jt,u as I}from"./index-BhlJXPXA.js";import{c as qe,a as Z,b as ae,d as ft,e as bt,f as Tt}from"./useMangersApis-CoxZOvfK.js";import{u as U}from"./useForm-DVm8TY_W.js";import{g as _t}from"./decoder-D13FVXDo.js";import{i as $,u as q}from"./queryKeys-B7CxYHCA.js";import{f as Ct}from"./excel-vendor-CYB7cqj3.js";import{u as W,b as Y,c as ee}from"./query-vendor-CBGQWAC0.js";import{u as ue}from"./useDropDown-hVZVKMV4.js";import{D as Pt}from"./Divider-B-5WhTuS.js";import{f as Nt}from"./fade-C-aabg4w.js";import{S as Qe,a as Ke}from"./index-BYUM15lW.js";import{W as It}from"./WithNavigatorBar-BaUD9vuh.js";import{u as vt}from"./useObj-Bg0VYG3V.js";import{b as wt}from"./useSchoolsApi-kltzsy-n.js";import"./utils-vendor-Bc17E_qf.js";const ce=()=>{const t=u.useContext(St),o=u.useContext(jt),n=d=>{o({type:"SELECT_STUDENT",info:d})},s=d=>{o({type:"ADD_STUDENT",pointHistory:d||[]})},a=d=>{o({type:"ADD_POINT_TO_SELECTED_STUDENTS",point:d})},r=()=>{o({type:"RESET"})},l=d=>{o({type:"REMOVE",studentId:d})},x=t.pointHistoryList;return{state:t,updateRecentlyStudentInfo:n,addStudentPointHistory:s,addPointOptionToStudents:a,resetStudentLists:r,pointHistoryList:x,removeStudentId:l}};var le=(t=>(t["#F5F5F5"]="#595959",t["#FFF1F0"]="#CF1322",t["#FFF9DB"]="#874D00",t["#F5F9D6"]="#406407",t["#F5ECFB"]="#6A46A5",t["#ECF9FF"]="#0C408A",t))(le||{});const Ze=qe(t=>({deleteTagId:"",setDeleteTagId:o=>t(()=>({deleteTagId:o}))}));function ye({id:t,color:o,name:n,canHover:s=!1}){const[a,r]=u.useState(!1),{selectModal:l}=I(),[x]=Ze(c=>[c.setDeleteTagId]),d=()=>{r(!a)};return e.jsxs(kt,{canHover:s,color:o,onMouseEnter:d,onMouseLeave:d,children:[e.jsx(Et,{color:o}),n,s&&a&&e.jsx(Ot,{onClick:()=>{l("DELETE_STUDENT_TAG"),x(t)},children:e.jsx(pt,{color:le[o],size:16})})]})}const kt=i.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 26px;
  border-radius: 13px;
  padding: 10px;
  gap: 4px;
  background-color: ${({color:t})=>t};
  color: ${({color:t})=>le[t]};
  ${({theme:t})=>t.font.captionM};
  cursor: default;
  &:hover {
    ${({canHover:t})=>t&&"padding: 10px 30px 10px 10px;"}
    transition: 0.4s;
  }
`,Et=i.div`
  width: 7px;
  height: 7px;
  margin: 4px;
  border-radius: 50px;
  background-color: ${({color:t,theme:o})=>le[t]??o.color.gray10};
`,Ot=i.div`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;function At({studentInfo:t,onClickStudent:o,isSelected:n,mode:s}){var N;const a=u.useRef(null),[r,l,x,d]=Z(S=>[S.selectedStudentId,S.resetStudentId,S.appendStudentId,S.deleteStudentId]),[c,g,y]=ae(S=>[S.clickedStudentId,S.setClickedStudentId,S.resetClickedStudentId]);u.useEffect(()=>{var S;c.includes(t.id)&&((S=a.current)==null||S.scrollIntoView({behavior:"smooth",block:"center"}))},[c]),ce();const m=()=>{n?d(t.id):x(t.id)},h=S=>{S.stopPropagation()},f=()=>{t.id===c?y():t.id!==c&&g(t.id)};return e.jsxs($t,{isClick:c===t.id,ref:a,className:"studentBox",onClick:f,children:[e.jsx("div",{onClick:h,children:e.jsx(me,{status:n,onChange:m})}),e.jsx("img",{className:"studentBox",src:t.profile_image_url,alt:"프로필"}),e.jsx(p,{className:"studentBox",size:"bodyL",color:"gray10",margin:["left",16],children:t.name}),e.jsx(p,{className:"studentBox",margin:["left",16],size:"bodyL",color:"gray6",children:t.gcn}),e.jsxs(Mt,{children:[e.jsxs(Dt,{children:["+ ",t.bonus_point]}),e.jsx(Lt,{children:t.minus_point<0?`- (${t.minus_point})`:`- ${t.minus_point}`}),(N=t.tags)==null?void 0:N.map(S=>e.jsx(ye,{id:S.id,color:S.color,name:S.name},S.id))]}),e.jsxs(p,{className:"studentBox",size:"bodyL",color:"gray6",margin:["left","auto"],children:[t.room_number,"호"]})]})}const $t=i.li`
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
  height: 70px;
  background-color: ${({theme:t})=>t.color.gray1};
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 8px;
  padding: 17px 40px 17px 36px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: ${({theme:t,isClick:o})=>o&&`2px solid ${t.color.primary}`};
  > img {
    width: 36px;
    height: 36px;
    background-color: ${({theme:t})=>t.color.gray5};
    border-radius: 50%;
    margin-left: 24px;
  }
`,Mt=i.div`
  max-width: 45%;
  display: flex;
  align-items: center;
  margin-left: 24px;
  gap: 12px;
  white-space: nowrap;
  overflow: hidden;
  opacity: 1;
`,Dt=i.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 26px;
  border-radius: 13px;
  padding: 10px;
  gap: 4px;
  background-color: #ecf9ff;
  color: #0c408a;
  font-size: 14px;
`,Lt=i.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 26px;
  border-radius: 13px;
  padding: 10px;
  gap: 4px;
  background-color: #fff1f0;
  color: #cf1322;
  font-size: 14px;
`;function Bt({min:t,max:o,minVal:n,maxVal:s,state:a,setState:r}){const x=["-100+","-80","-60","-40","-20","0","20","40","60","80","100+"],d=m=>{const{value:h}=m.target;+s+100-(+h+100)>1?r({...a,startPoint:+h}):r({...a,startPoint:+s-1})},c=m=>{const{value:h}=m.target;+h+100-(+n+100)>1?r({...a,endPoint:+h}):r({...a,endPoint:+n+1})},g=((+n>t?+n:t)+100)/200*100,y=100-((+s<o?+s:o)+100)/200*100;return e.jsxs(e.Fragment,{children:[e.jsx(Ft,{children:x.map((m,h)=>e.jsx(p,{size:"captionM",color:+m.replace("+","")==100&&+s>100||+m.replace("+","")==-100&&+n<-100||+m.replace("+","")==+n||+m.replace("+","")==+s?"gray8":"gray4",children:m},h))}),e.jsxs(zt,{children:[e.jsx(Rt,{left:g,right:y}),e.jsx(Ne,{onChange:d,type:"range",min:t,max:o,value:n}),e.jsx(Ne,{onChange:c,type:"range",min:t,max:o,value:s})]})]})}const Ft=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  > * {
    display: flex;
    justify-content: center;
    width: 30px;
  }
`,zt=i.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 96%;
  margin: 0 auto;
  background-color: ${R.color.primaryLighten1};
  border-radius: 5px;
  height: 5px;
  input[type='range']::-webkit-slider-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50px;
    -webkit-appearance: none;
    pointer-events: auto;
    background-color: ${R.color.primaryDarken1};
  }
`,Rt=i.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: ${({left:t})=>`${t}%`};
  right: ${({right:t})=>`${t}%`};
  height: 5px;
  border-radius: 50px;
  background-color: ${R.color.primaryDarken1};
`,Ne=i.input`
  position: absolute;
  background: none;
  width: 100%;
  pointer-events: none;
  -webkit-appearance: none;
  cursor: pointer;
`,Q="/points";var te=(t=>(t.ALL="전체",t.BONUS="상점",t.MINUS="벌점",t))(te||{});const Ht=async(t,o,n)=>{const{data:s}=await $.get(`${Q}/history/students/${t}`);return s},Ut=async(t,o,n)=>{if(t){const{data:s}=await $.get(`${Q}/history/students/${t}/recent`);return s}},Wt=async()=>{const{data:t}=await $.get(`${Q}/options`);return t},Gt=async t=>{const{data:o}=await $.get(`${Q}/history?type=${t}`);return o},Vt=async t=>{await $.put(`${Q}/history/${t}`)},qt=(t,o,n)=>{const s={point_option_id:t,student_id_list:o};return W(async()=>$.post(`${Q}/history`,s),{...n})},Je=(t,o,n)=>{const a={type:n==="상점"?"BONUS":"MINUS",score:t,name:o},{toastDispatch:r}=q(),l=Y();return W(async()=>$.post(`${Q}/options`,a),{onSuccess:()=>{l.invalidateQueries(["usePointList"]),r({toastType:"SUCCESS",actionType:"APPEND_TOAST",message:"상/벌점 항목이 추가되었습니다."})},onError:()=>{r({toastType:"ERROR",actionType:"APPEND_TOAST",message:"상/벌점 항목 추가를 실패했습니다."})}})},Qt=(t,o,n,s)=>{const a=s==="상점"?"BONUS":"MINUS",{toastDispatch:r}=q(),l={type:a,score:Number(o),name:n},x=Y();return W(async()=>$.patch(`${Q}/options/${t}`,l),{onSuccess:()=>{x.invalidateQueries(["usePointList"]),r({toastType:"SUCCESS",actionType:"APPEND_TOAST",message:"상/벌점 항목이 수정되었습니다."})},onError:()=>{r({toastType:"ERROR",actionType:"APPEND_TOAST",message:"상/벌점 항목 수정을 실패했습니다."})}})},Kt=(t,o)=>(ht(),q(),W(async()=>await $.delete(`${Q}/options/${t}`),{...o})),Zt=()=>W(async()=>await $.get(`${Q}/history/excel`,{responseType:"blob"}),{onSuccess:t=>{const o=new Blob([t.data],{type:t.headers["content-type"]}),n=t.headers["content-disposition"];Ct.saveAs(o,_t(n))}}),Jt=["ALL","BONUS","MINUS"];function Xt({filterType:t,minPoint:o,maxPoint:n,onChangeFilterType:s,onChangeLimitPoint:a}){const[r,l]=u.useState(t),{state:x,onHandleChange:d,setState:c}=U({startPoint:o,endPoint:n}),{startPoint:g,endPoint:y}=x,{closeModal:m}=I(),h=()=>{s(r),a(g??0,y??0),m()};return e.jsxs(V,{buttonList:[e.jsx(_,{kind:"contained",onClick:h,children:"적용"})],close:m,title:"필터",children:[e.jsx(Yt,{children:Jt.map(f=>e.jsx(to,{onClick:()=>l(f),isClicked:f===r,children:te[f]},f))}),e.jsx(p,{margin:[40,0],size:"bodyM",children:"점수 범위"}),e.jsx(Bt,{state:x,min:-100,max:100,minVal:g,maxVal:y,setState:c}),e.jsxs(eo,{children:[e.jsx(H,{width:96,label:"시작 점수",name:"startPoint",value:g,onChange:d,limit:y,type:"number"}),e.jsx("p",{children:"~"}),e.jsx(H,{width:96,label:"끝 점수",name:"endPoint",value:y,onChange:d,type:"number"})]})]})}const Yt=i.div`
  display: flex;
  gap: 10px;
`,eo=i.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
  > p {
    margin: 30px 20px 0 20px;
  }
`,to=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 16px;
  border-radius: 4px;
  border: 1px solid ${({theme:t})=>t.color.gray4};
  background-color: ${({isClicked:t,theme:o})=>t?o.color.gray3:o.color.gray1};
  ${({theme:t})=>t.font.BtnM};
  color: ${({theme:t})=>t.color.gray6};
  cursor: pointer;
`;function oo({onClick:t}){const{closeModal:o}=I(),n=()=>{t(),o()};return e.jsx(V,{className:"modalButton",close:o,content:"상/벌점 내역을 취소 하시겠습니까?",buttonList:[e.jsx(_,{className:"modalButton",onClick:o,kind:"outline",color:"gray",children:"취소"}),e.jsx(_,{className:"modalButton",onClick:n,kind:"contained",color:"error",children:"확인"})]})}const no=t=>ee(["getAllPointHistory",t],()=>Gt(t),{refetchOnWindowFocus:!0}),so=(t,o,n,s)=>{const{addStudentPointHistory:a}=ce();return ee(["getStudentPointHistory",t],()=>Ht(t),{refetchOnWindowFocus:!0,onSuccess:r=>{a(r==null?void 0:r.point_histories)},enabled:!!t&&o})},io=(t,o,n,s)=>ee(["getRecentStudentPointHistory",t],()=>Ut(t),{refetchOnWindowFocus:!0,enabled:o}),ro=()=>ee(["usePointList"],()=>Wt(),{refetchOnWindowFocus:!0}),ao=(t,o)=>{const{toastDispatch:n}=q(),{closeModal:s}=I(),a=Y();return W(()=>Vt(t),{...o,onSuccess:()=>{a.invalidateQueries(["getAllPointHistory"]),a.invalidateQueries(["getStudentPointHistory"]),a.invalidateQueries(["getStudentDetail"]),n({actionType:"APPEND_TOAST",toastType:"SUCCESS",message:"상/벌점 내역이 취소 되었습니다"}),s()}})};function co({onClick:t}){const{closeModal:o}=I();return e.jsx(V,{content:"학생을 삭제 하시겠습니까?",close:o,buttonList:[e.jsx(_,{onClick:o,kind:"outline",color:"gray",children:"취소"}),e.jsx(_,{className:"modalButton",color:"error",onClick:t,children:"확인"})]})}const de=qe(t=>({pointHistoryId:"",setPointHistoryId:o=>t(()=>({pointHistoryId:o}))}));function Xe({isDeleteListOption:t=!1,canDelete:o=!1,canClick:n=!1,onClick:s,OptionSelected:a,point_history_id:r,name:l,score:x,type:d}){const{selectModal:c}=I(),[g]=de(h=>[h.setPointHistoryId]),y=()=>{c("DELETE_POINT_LIST"),g(r)},m=()=>{c("DELETE_POINT_OPTION")};return e.jsxs(Ye,{className:"grantPoint",canClick:n,type:d,onClick:()=>s&&s(r,l,x,d),OptionSelected:a===r,children:[n&&a===r?e.jsx(p,{className:"grantPoint",margin:[0,20],color:d==="BONUS"?"primary":"error",size:"BtnM",children:l}):e.jsx(p,{className:"grantPoint",margin:[0,20],color:"gray6",size:"BtnM",children:l}),e.jsx(uo,{className:"grantPoint",margin:["left","auto"],color:d==="BONUS"?"primary":"error",size:"bodyS",children:te[d]}),e.jsx(ne,{className:"grantPoint"}),n&&a===r?e.jsx(p,{className:"grantPoint",margin:[0,30],color:d==="BONUS"?"primary":"error",children:x}):e.jsx(p,{className:"grantPoint",margin:[0,30],color:"gray6",children:x}),o&&e.jsxs(e.Fragment,{children:[e.jsx(ne,{}),e.jsx(Se,{onClick:t?m:y,children:e.jsx(se,{colorKey:"gray5"})})]})]})}function lo({studentId:t}){const{data:o}=io(t);return e.jsxs(ho,{children:[e.jsxs(e.Fragment,{children:[e.jsx(p,{children:o==null?void 0:o.student_name}),e.jsx(p,{children:o==null?void 0:o.student_gcn})]}),e.jsx(yo,{}),e.jsxs(e.Fragment,{children:[e.jsx(mo,{width:80,children:e.jsx(p,{color:o!=null&&o.point_name?"gray10":"gray5",children:(o==null?void 0:o.point_name)||"내역 없음"})}),e.jsx(p,{color:(o==null?void 0:o.point_type)==="BONUS"?"primary":"error",children:o==null?void 0:o.point_score})]})]})}function po({isDeleteListOption:t=!1,canDelete:o=!1,canClick:n=!1,onClick:s,OptionSelected:a,point_history_id:r,date:l,name:x,score:d,type:c}){const{selectModal:g}=I(),[y]=de(S=>[S.setPointHistoryId]),m=()=>{g("DELETE_POINT_LIST"),y(r)},h=()=>{g("DELETE_POINT_OPTION")},[f,N]=u.useState(!1);return e.jsxs(Ye,{onMouseOver:()=>{N(!0)},onMouseOut:()=>{N(!1)},className:"grantPoint",canClick:n,type:c,onClick:()=>s&&s(r,x,d,c),OptionSelected:a===r,children:[e.jsx(p,{className:"grantPoint",margin:[0,20],color:"gray6",size:"BtnM",children:x}),e.jsx(et,{className:"grantPoint",margin:["left","auto"],color:"gray6",size:"bodyS",children:l}),e.jsx(ne,{className:"grantPoint"}),f?e.jsx(Se,{onClick:t?h:m,children:e.jsx(se,{colorKey:"gray5"})}):e.jsx(p,{className:"grantPoint",margin:[0,30],color:c==="BONUS"?"primary":"error",children:d}),o]})}function xo({point_history_id:t,student_name:o,student_gcn:n,point_name:s,point_score:a,point_type:r}){const{selectModal:l}=I(),[x,d]=de(m=>[m.pointHistoryId,m.setPointHistoryId]),c=()=>{l("DELETE_POINT_LIST"),d(t)},[g,y]=u.useState(!1);return e.jsxs(go,{onMouseOver:()=>{y(!0)},onMouseOut:()=>{y(!1)},children:[e.jsx(p,{margin:[0,16,0,30],color:"gray10",size:"bodyM",children:o}),e.jsx(p,{margin:["right","auto"],color:"gray6",size:"bodyM",children:n}),e.jsx(p,{margin:[0,30],color:"gray6",size:"BtnM",children:s}),e.jsx(ne,{}),g?e.jsx(Se,{onClick:c,children:e.jsx(se,{colorKey:"gray5"})}):e.jsx(p,{margin:[0,30],color:r==="BONUS"?"primary":"error",size:"bodyM",children:a})]})}const Ye=i.div`
  display: flex;
  cursor: ${({canClick:t})=>t?"pointer":"default"};
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${({theme:t})=>t.color.gray2};
  border: 2px solid
    ${({OptionSelected:t,type:o,canClick:n})=>n&&t?o==="BONUS"?"#3D8AFF":"#FF4646":"#EEEEEE"};
  border-radius: 4px;
`,go=i.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${({theme:t})=>t.color.gray1};
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0px 1px 20px rgba(238, 238, 238, 0.8);
`,ne=i.div`
  width: 1px;
  height: 30px;
  background-color: #eeeeee;
`,et=i(p)`
  margin-right: 20px;
`,uo=i(et)``,Se=i.div`
  margin: 0 26px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({theme:t})=>t.color.gray2};
  border-radius: 50%;
`,ho=i.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 57px;
  background-color: #f9f9f9;
  margin-bottom: 8px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  padding: 0 28px;
`,mo=i.div`
  div {
    width: ${({width:t})=>t}px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,yo=i.div`
  position: absolute;
  top: 50%;
  left: 47%;
  transform: translate(-50%, -50%);
  width: 1px;
  height: 28px;
  background-color: ${({theme:t})=>t.color.gray3};
`,So=!0;function jo({allPointOptions:t}){const[o,n]=u.useState(!0),[s,a]=Z(P=>[P.selectedStudentId,P.resetStudentId]),[r,l]=u.useState({id:"",type:"ALL"}),{toastDispatch:x}=q(),{onDropDownChange:d,sort:c}=ue(""),{state:g,onHandleChange:y}=U({point_option_name:""}),{state:m,onHandleChange:h}=U({score:0,name:""}),{score:f,name:N}=m,S=()=>{n(!o)},E=(P,w,F,k)=>{l({id:P,type:k}),r||n(!0)},{addPointOptionToStudents:L}=ce(),A=qt(r.id,s.filter(P=>P),{onSuccess:()=>{L(t.point_options.find(P=>P.point_option_id===r.id)),x({actionType:"APPEND_TOAST",toastType:"SUCCESS",message:`${te[r.type]}이 부여되었습니다.`}),a(),l({id:"",type:"ALL"}),b()},onError:()=>{x({actionType:"APPEND_TOAST",toastType:"ERROR",message:"잠시 후 다시 시도해 주세요."})}}),z=Je(f,N,c),{isLoading:G}=A,{closeModal:b}=I();return e.jsxs(V,{className:"grantPoint",title:"상/벌점 항목을 선택해주세요.",content:"",close:b,buttonList:[e.jsx(_,{className:"grantPoint",margin:o&&[-40,0,0,0],disabled:o?!(r.id&&s&&!G):!(f&&N&&c),onClick:o?A.mutate:z.mutate,children:o?"부여":"추가"})],children:[e.jsxs(fo,{className:"grantPoint",children:[e.jsx(ie,{className:"Search"}),e.jsx(bo,{className:"grantPoint",type:"text",placeholder:"ex) 봉사활동",name:"point_option_name",value:g.point_option_name,onChange:y})]}),e.jsx(_o,{className:"grantPoint",children:t==null?void 0:t.point_options.filter(P=>P.name.includes(g.point_option_name)).map(P=>{const{point_option_id:w,name:F,type:k,score:C}=P;return e.jsx(Xe,{point_history_id:w,name:F,type:k,score:C,canClick:So,onClick:E,OptionSelected:r.id},w)})}),e.jsxs(To,{className:"grantPoint",onClick:S,newItem:o,children:[o?e.jsx(re,{className:"addImg"}):e.jsx(K,{direction:"top",className:"addImg"}),o?e.jsx(Ie,{className:"grantPoint",children:"항목 추가"}):e.jsx(Ie,{className:"grantPoint",children:"항목 닫기"})]}),e.jsxs(Co,{className:"grantPoint",children:[!o&&e.jsx(H,{className:"grantPoint",width:478,label:"이름",type:"text",placeholder:"ex) 무단 외출",name:"name",value:N,onChange:h}),e.jsxs(Po,{className:"grantPoint",children:[!o&&e.jsx(H,{className:"grantPoint",width:243,label:"점수",type:"number",placeholder:"ex) 12 (숫자만 입력)",name:"score",value:f,onChange:h}),!o&&e.jsx(ge,{className:"grantPoint",width:216,label:"타입",placeholder:"상/벌점",items:["상점","벌점"],value:c,onChange:d})]})]})]})}const fo=i.div`
  position: relative;
  margin-bottom: 20px;
  .Search {
    position: absolute;
    top: 8px;
  }
`,bo=i.input`
  width: 202px;
  height: 40px;
  border-bottom: 1px solid #dddddd;
  padding: 0px 0px 0px 30px;
  font-size: 16px;
`,To=i.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
  cursor: pointer;
  width: 85px;
  margin-bottom: ${({newItem:t})=>t?"-20px":"20px"};
  .addImg {
    width: 17px;
    margin-right: 10px;
  }
`,Ie=i.div`
  font-size: 14px;
  font-weight: 700;
  color: #555555;
`,_o=i.div`
  overflow: scroll;
  height: 22vh;
  > div {
    margin-bottom: 9px;
  }
`,Co=i.div`
  display: flex;
  flex-direction: column;
`,Po=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;function No({selectedPointOption:t,setSelectedPointOption:o,allPointOptions:n}){const[s,a]=u.useState(!0),r=!0,{closeModal:l}=I(),{onDropDownChange:x,sort:d}=ue(""),{onDropDownChange:c,sort:g}=ue(""),{state:y,onHandleChange:m}=U({score:0,name:""}),{state:h,setState:f,onHandleChange:N}=U({score_:0,name_:""}),S=()=>{a(k=>!k)},{score:E,name:L}=y,{score_:A,name_:z}=h,G=(k,C,v,B)=>{f({score_:v,name_:C}),c(B),o(T=>T!==k?k:"")},{state:b,onHandleChange:P}=U({point_option_name:""}),w=Je(E,L,d),F=Qt(t,A,z,g);return e.jsxs(V,{title:"상/벌점 항목",content:"",close:()=>{l(),o("")},buttonList:[t?e.jsx(_,{disabled:t?!(h.score_&&h.name_&&g):!(E&&L&&d),onClick:t?F.mutate:w.mutate,children:"수정"}):!s&&e.jsx(_,{disabled:!(E&&L&&d),onClick:w.mutate,children:"추가"})],children:[e.jsxs(Io,{children:[e.jsx(ie,{className:"Search"}),e.jsx(vo,{type:"text",placeholder:"ex) 봉사활동",name:"point_option_name",value:b.point_option_name,onChange:P})]}),e.jsx(wo,{children:n==null?void 0:n.point_options.filter(k=>k.name.includes(b.point_option_name)).map(k=>{const{point_option_id:C,name:v,type:B,score:T}=k;return e.jsx(Xe,{point_history_id:C,name:v,type:B,score:T,canDelete:r,canClick:r,isDeleteListOption:r,onClick:G,OptionSelected:t},C)})}),t?e.jsxs(e.Fragment,{children:[e.jsx(ve,{newItem:s,children:e.jsx(pe,{children:"항목 수정"})}),e.jsxs(we,{children:[e.jsx(H,{margin:s?[50,0,0,0]:[0,0,0,0],width:478,label:"이름",type:"text",placeholder:"ex) 무단 외출",name:"name_",value:z,onChange:N}),e.jsxs(ke,{children:[e.jsx(H,{width:243,label:"점수",type:"number",placeholder:"ex) 12 (숫자만 입력)",name:"score_",value:A,onChange:N}),e.jsx(ge,{width:216,disable:r,label:"타입",placeholder:"상/벌점",items:["상점","벌점"],value:g==="BONUS"?"상점":"벌점",onChange:c})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ve,{onClick:S,newItem:s,children:[s?e.jsx(re,{className:"addImg"}):e.jsx(K,{direction:"top",className:"addImg"}),s?e.jsx(pe,{className:"grantPoint",children:"항목 추가"}):e.jsx(pe,{className:"grantPoint",children:"항목 닫기"})]}),e.jsxs(we,{children:[!s&&e.jsx(H,{className:"grantPoint",width:478,label:"이름",type:"text",placeholder:"ex) 무단 외출",name:"name",value:L,onChange:m}),e.jsxs(ke,{children:[!s&&e.jsx(H,{className:"grantPoint",width:243,label:"점수",type:"number",placeholder:"ex) 12 (숫자만 입력)",name:"score",value:E,onChange:m}),!s&&e.jsx(ge,{className:"grantPoint",width:216,label:"타입",placeholder:"상/벌점",items:["상점","벌점"],value:d,onChange:x})]})]})]})]})}const Io=i.div`
  position: relative;
  margin-bottom: 20px;
  .Search {
    position: absolute;
    top: 8px;
  }
`,vo=i.input`
  width: 202px;
  height: 40px;
  border-bottom: 1px solid #dddddd;
  padding: 0px 0px 0px 30px;
  font-size: 16px;
`,ve=i.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
  cursor: pointer;
  width: 85px;
  margin-bottom: ${({newItem:t})=>t?"-20px":"20px"};
  .addImg {
    width: 17px;
    margin-right: 10px;
  }
`,pe=i.div`
  font-size: 14px;
  font-weight: 700;
  color: #555555;
`,wo=i.div`
  overflow: scroll;
  height: 22vh;
  > div {
    margin-bottom: 9px;
  }
`,we=i.div`
  display: flex;
  flex-direction: column;
`,ke=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;function ko({onClick:t,setSelectedOption:o}){const{selectModal:n,closeModal:s}=I(),a=()=>{n("POINT_OPTIONS"),o("")};return e.jsx(V,{close:s,content:"상/벌점 항목을 삭제 하시겠습니까?",buttonList:[e.jsx(_,{onClick:a,kind:"outline",color:"gray",children:"취소"}),e.jsx(_,{onClick:t,kind:"contained",color:"error",children:"확인"})]})}const X="/tags",Eo=async(t,o)=>{await $.delete(`${X}/students?student_id=${t}&tag_id=${o}`)},Oo=async()=>{const{data:t}=await $.get(`${X}`);return t},Ao=(t,o)=>{const n={tag_id:t,student_ids:o},{toastDispatch:s}=q(),{closeModal:a}=I(),[r]=Z(l=>[l.resetStudentId]);return W(async()=>$.post(`${X}/students`,n),{onSuccess:()=>{s({actionType:"APPEND_TOAST",toastType:"SUCCESS",message:"태그가 부여되었습니다."}),r(),a()},onError:l=>{if(l.request.status)switch(l.request.status){case 500:return s({actionType:"APPEND_TOAST",toastType:"ERROR",message:"관리자에게 문의해주세요."});default:s({actionType:"APPEND_TOAST",toastType:"ERROR",message:"태그 부여를 실패했습니다."})}else s({actionType:"APPEND_TOAST",toastType:"SUCCESS",message:"인터넷 연결을 확인해주세요."})}})},tt=(t,o,n)=>{const s={name:t,color:o};return W(async()=>$.post(`${X}`,s),{...n})},$o=(t,o,n,s)=>{const a={name:o,color:n};return W(async()=>$.patch(`${X}/${t}`,a),{...s})},Mo=(t,o)=>W(async()=>await $.delete(`${X}/${t}`),{...o}),ot=()=>ee(["tags"],Oo),Do=(t,o)=>{const{toastDispatch:n}=q(),s=Y();return W(()=>Eo(t,o),{onSuccess:()=>{n({actionType:"APPEND_TOAST",message:"태그가 삭제되었습니다.",toastType:"SUCCESS"}),s.invalidateQueries(["studentList"]),s.invalidateQueries(["getStudentDetail",t])},onError:()=>{n({actionType:"APPEND_TOAST",message:"태그 삭제에 실패하였습니다.",toastType:"ERROR"})}})};function Lo({refetchSearchStudents:t,checkedTagList:o,setCheckedTagList:n}){var d;const[s,a]=u.useState(!1),{data:r}=ot(),l=u.useMemo(()=>s?{text:e.jsx(K,{size:18,colorKey:"gray6",direction:"top"}),color:"gray"}:o.length>0?{text:" "+o.length,color:"primary"}:{text:e.jsx(K,{size:18,colorKey:"gray6",direction:"bottom"}),color:"gray"},[s]),x=(c,g)=>{n(c?o.filter(y=>y!==g):[...o,g])};return e.jsx(J,{onOutsideClick:()=>{a(!1),t()},children:e.jsxs(Bo,{children:[e.jsx(_,{onClick:()=>a(!s),color:l.color,kind:"outline",children:e.jsxs(e.Fragment,{children:["학생 태그",l.text]})}),s&&e.jsx(Fo,{children:(d=r==null?void 0:r.tags)==null?void 0:d.map(c=>e.jsxs(zo,{children:[e.jsx(me,{size:18,status:o.includes(c),onChange:()=>x(o.includes(c),c)}),e.jsx(ye,{id:c.id,name:c.name,color:c.color})]},c.id))})]})})}const Bo=i.div`
  position: relative;
`,Fo=i.div`
  position: absolute;
  top: 58px;
  width: 240px;
  max-height: 138px;
  background-color: ${({theme:t})=>t.color.gray1};
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 101;
  overflow-y: scroll;
`,zo=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 8px;
  height: 46px;
  border-bottom: 1px solid ${({theme:t})=>t.color.gray3};
`;function Ro({onClick:t}){const{closeModal:o}=I(),n=()=>{t(),o()};return e.jsx(V,{content:"해당 학생 태그를 삭제 하시겠습니까?",close,buttonList:[e.jsx(_,{onClick:o,kind:"outline",color:"gray",children:"취소"}),e.jsx(_,{className:"modalButton",color:"error",onClick:n,children:"확인"})]})}const he="data:image/svg+xml,%3csvg%20width='8'%20height='5'%20viewBox='0%200%208%205'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.30026%204.3L0.700256%201.7C0.383589%201.38333%200.312923%201.021%200.488256%200.613C0.662923%200.204333%200.975257%200%201.42526%200H6.57526C7.02526%200%207.33759%200.204333%207.51226%200.613C7.68759%201.021%207.61692%201.38333%207.30026%201.7L4.70026%204.3C4.60026%204.4%204.49192%204.475%204.37526%204.525C4.25859%204.575%204.13359%204.6%204.00026%204.6C3.86692%204.6%203.74192%204.575%203.62526%204.525C3.50859%204.475%203.40026%204.4%203.30026%204.3Z'%20fill='black'/%3e%3c/svg%3e";function nt({tag_id:t,tag_name:o,tag_color:n,OptionSelected:s,onClick:a}){const{selectModal:r}=I(),l=()=>{r("DELETE_TAG")};return e.jsxs(Ho,{className:"grantPoint",onClick:()=>a(t,o,n),OptionSelectedCheck:s===t,children:[e.jsxs(Ee,{children:[e.jsx(Uo,{BackColor:n}),s===t?e.jsx(p,{className:"grantPoint",margin:[0,10],color:"primary",size:"BtnM",children:o}):e.jsx(p,{className:"grantPoint",margin:[0,10],color:"gray6",size:"BtnM",children:o})]}),e.jsxs(Ee,{children:[e.jsx(Wo,{}),e.jsx(Go,{onClick:l,children:e.jsx(se,{colorKey:"gray5"})})]})]})}const Ho=i.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: ${({theme:t})=>t.color.gray2};
  border: 2px solid
    ${({OptionSelectedCheck:t})=>t?"#3D8AFF":"#EEEEEE"};
  border-radius: 4px;
`,Ee=i.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;i.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${({theme:t})=>t.color.gray1};
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0px 1px 20px rgba(238, 238, 238, 0.8);
`;const Uo=i.div`
  width: 16px;
  height: 16px;
  border: 1px Solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  background-color: ${({BackColor:t})=>t};
  margin-left: 14px;
`,Wo=i.div`
  width: 1px;
  height: 30px;
  background-color: #eeeeee;
`,Go=i.div`
  margin: 0 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;function Vo({allTags:t,refetchSearchStudents:o,selectedTag:n,setSelectedTag:s,setTagModal:a}){const[r]=Z(C=>[C.selectedStudentId]),[l,x]=u.useState(!0),[d,c]=u.useState(!1),[g,y]=u.useState(""),m=[{backColor:"#F5F5F5",title:"회색",line:!0},{backColor:"#FFF1F0",title:"빨간색",line:!0},{backColor:"#FFF9DB",title:"노란색",line:!0},{backColor:"#F5F9D6",title:"초록색",line:!0},{backColor:"#F5ECFB",title:"보라색",line:!0},{backColor:"#ECF9FF",title:"파란색",line:!1}],{toastDispatch:h}=q(),{state:f,onHandleChange:N}=U({searchTagName:""}),{state:S,onHandleChange:E,setState:L}=U({addTagName:""}),{closeModal:A}=I(),z=()=>{n&&s(""),x(!l)},G=C=>{s(n===C?"":C),n||x(!0)},b=()=>{c(!1)},P=Ao(n,r),w=tt(S.addTagName,g,{onSuccess:()=>{o(),y(""),L({addTagName:""}),x(!0),h({toastType:"SUCCESS",actionType:"APPEND_TOAST",message:"태그가 추가되었습니다."})},onError:C=>{if(C.request.status)switch(C.request.status){case 400:return h({actionType:"APPEND_TOAST",toastType:"ERROR",message:"태그 이름은 10자 이하여야 합니다."});case 500:return h({actionType:"APPEND_TOAST",toastType:"ERROR",message:"관리자에게 문의해주세요."});default:h({toastType:"ERROR",actionType:"APPEND_TOAST",message:"태그 추가를 실패했습니다."})}else h({actionType:"APPEND_TOAST",toastType:"SUCCESS",message:"인터넷 연결을 확인해주세요."})}}),{isLoading:F}=P,k=l?P.mutate:w.mutate;return u.useEffect(()=>{a("GIVE_TAG_OPTIONS")},[]),e.jsxs(V,{title:"학생 태그",content:"",close:()=>{s(""),A()},buttonList:[e.jsx(_,{margin:l&&[-40,0,0,0],disabled:l?!n:!(S.addTagName&&g&&!F),onClick:k,children:l?"부여":"추가"})],children:[e.jsxs(qo,{children:[e.jsx(ie,{className:"Search"}),e.jsx(Qo,{type:"text",placeholder:"ex) 봉사활동",value:f.searchTagName,name:"searchTagNames",onChange:N})]}),e.jsx(Zo,{children:t==null?void 0:t.tags.filter(C=>C.name.includes(f.searchTagName)).map(C=>{const{color:v,name:B,id:T}=C;return e.jsx(nt,{onClick:G,OptionSelected:n,tag_name:B,tag_color:v,tag_id:T},T)})}),e.jsxs(Ko,{onClick:z,newItem:l,children:[l?e.jsx(re,{}):e.jsx(K,{direction:"top"}),l?e.jsx(Oe,{children:"항목 추가"}):e.jsx(Oe,{children:"항목 닫기"})]}),e.jsx(Jo,{children:!l&&e.jsxs(e.Fragment,{children:[e.jsx(H,{width:478,label:"이름",type:"text",placeholder:"ex) 뉴미디어 디자인과",name:"addTagName",value:S.addTagName,onChange:E}),e.jsxs(nn,{children:[e.jsx(p,{size:"bodyS",color:"gray6",children:"색상"}),e.jsx(J,{onOutsideClick:b,children:e.jsxs(tn,{onClick:()=>c(!d),children:[e.jsx(Xo,{backColor:g}),e.jsx("img",{src:he,alt:"삼각형"}),d&&e.jsx(sn,{children:m.map(C=>{const{title:v,backColor:B,line:T}=C;return e.jsxs("div",{children:[e.jsxs(on,{onClick:()=>{y(B),b()},children:[e.jsx(Yo,{backColor:B}),e.jsx(p,{size:"bodyS",children:v})]}),T&&e.jsx(en,{})]},v)})})]})})]})]})})]})}const qo=i.div`
  position: relative;
  margin-bottom: 20px;
  .Search {
    position: absolute;
    top: 8px;
  }
`,Qo=i.input`
  width: 202px;
  height: 40px;
  border-bottom: 1px solid #dddddd;
  padding: 0px 0px 0px 30px;
  font-size: 16px;
`,Ko=i.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
  cursor: pointer;
  width: 85px;
  margin-bottom: ${({newItem:t})=>t?"-20px":"20px"};
  .addImg {
    width: 17px;
    margin-right: 10px;
  }
`,Oe=i.div`
  font-size: 14px;
  font-weight: 700;
  color: #555555;
`,Zo=i.div`
  overflow: scroll;
  height: 22vh;
  > div {
    margin-bottom: 9px;
  }
`,Jo=i.div`
  display: flex;
  flex-direction: column;
`,Xo=i.div`
  width: 30px;
  height: 30px;
  border: 2px Solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  background-color: ${({backColor:t})=>t};
  margin-right: 15px;
`,Yo=i.div`
  width: 13px;
  height: 13px;
  border: 1px Solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  background-color: ${({backColor:t})=>t};
  margin-right: 15px;
  margin-left: 7px;
`,en=i.div`
  width: 110px;
  height: 0px;
  border: 1px solid #eeeeee;
`,tn=i.div`
  display: flex;
  cursor: pointer;
`,on=i.div`
  height: 44.3px;
  width: 110px;
  display: flex;
  align-items: center;
  cursor: pointer;
`,nn=i.div`
  margin-top: 20px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`,sn=i.div`
  width: 132px;
  height: 280px;
  border: 2px solid #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: absolute;
  margin-left: 70px;
  margin-top: -248px;
  border-radius: 5px;
  z-index: 99;
`;function rn({onClick:t,setSelectedOption:o,tagModal:n}){const{selectModal:s,closeModal:a}=I(),r=()=>{s(n==="GIVE_TAG_OPTIONS"?"GIVE_TAG_OPTIONS":"VIEW_TAG_OPTIONS"),o("")};return e.jsx(V,{close:a,content:"태그를 삭제 하시겠습니까?",buttonList:[e.jsx(_,{onClick:r,kind:"outline",color:"gray",children:"취소"}),e.jsx(_,{onClick:t,kind:"contained",color:"error",children:"확인"})]})}function an({selectedTag:t,setSelectedTag:o,allTags:n,refetchAllTags:s,setTagModal:a}){const[r,l]=u.useState(!0),{closeModal:x}=I(),[d,c]=u.useState(!1),[g,y]=u.useState("#F5F9D6"),[m,h]=u.useState(!1),[f,N]=u.useState("#F5F9D6"),S=[{backColor:"#F5F5F5",title:"회색",line:!0},{backColor:"#FFF1F0",title:"빨간색",line:!0},{backColor:"#FFF9DB",title:"노란색",line:!0},{backColor:"#F5F9D6",title:"초록색",line:!0},{backColor:"#F5ECFB",title:"보라색",line:!0},{backColor:"#ECF9FF",title:"파란색",line:!1}],{state:E,onHandleChange:L}=U({searchTagName:""}),{state:A,onHandleChange:z,setState:G}=U({addTagName:""}),{state:b,setState:P,onHandleChange:w}=U({editTagName:""}),F=()=>{l(!r)},k=(T,M,j)=>{P({editTagName:M}),y(j),o(()=>T!==t?T:"")},C=tt(A.addTagName,f,{onSuccess:()=>{s(),N(""),G({addTagName:""}),l(!0),v({toastType:"SUCCESS",actionType:"APPEND_TOAST",message:"태그가 추가되었습니다."})},onError:T=>{if(T.request.status)switch(T.request.status){case 400:return v({actionType:"APPEND_TOAST",toastType:"ERROR",message:"태그 이름은 10자 이하여야 합니다."});case 500:return v({actionType:"APPEND_TOAST",toastType:"ERROR",message:"관리자에게 문의해주세요."});default:v({toastType:"ERROR",actionType:"APPEND_TOAST",message:"태그 추가를 실패했습니다."})}else v({actionType:"APPEND_TOAST",toastType:"SUCCESS",message:"인터넷 연결을 확인해주세요."})}}),{toastDispatch:v}=q(),B=$o(t,b.editTagName,g,{onSuccess:()=>{s(),v({toastType:"SUCCESS",actionType:"APPEND_TOAST",message:"태그가 수정되었습니다."})},onError:()=>{v({toastType:"ERROR",actionType:"APPEND_TOAST",message:"태그 수정을 실패했습니다."})}});return u.useEffect(()=>{a("VIEW_TAG_OPTIONS")},[]),e.jsxs(V,{title:"학생 태그",content:"",close:()=>{o(""),x()},buttonList:[t?e.jsx(_,{disabled:!(g&&b.editTagName),onClick:B.mutate,children:"수정"}):!r&&e.jsx(_,{disabled:!(A.addTagName&&f),onClick:C.mutate,children:"추가"})],children:[e.jsxs(cn,{children:[e.jsx(ie,{className:"Search"}),e.jsx(ln,{type:"text",placeholder:"ex) 봉사활동",name:"searchTagName",value:E.searchTagName,onChange:L})]}),e.jsx(xn,{children:n==null?void 0:n.tags.filter(T=>T.name.includes(E.searchTagName)).map(T=>{const{color:M,name:j,id:D}=T;return e.jsx(nt,{onClick:k,OptionSelected:t,tag_name:j,tag_color:M,tag_id:D},D)})}),t?e.jsxs(e.Fragment,{children:[e.jsx(pn,{children:e.jsx(xe,{children:"항목 수정"})}),e.jsxs(e.Fragment,{children:[e.jsx(H,{width:478,label:"이름",type:"text",placeholder:"ex) 뉴미디어 디자인과",name:"editTagName",value:b.editTagName,onChange:w}),e.jsxs(Be,{children:[e.jsx(p,{size:"bodyS",color:"gray6",children:"색상"}),e.jsx(J,{onOutsideClick:()=>{c(!1)},children:e.jsxs(De,{onClick:()=>c(!d),children:[e.jsx(Ae,{backColor:g}),e.jsx("img",{src:he,alt:"삼각형"}),d&&e.jsx(Fe,{children:S.map(T=>{const{title:M,backColor:j,line:D}=T;return e.jsxs("div",{children:[e.jsxs(Le,{onClick:()=>{y(j),c(!1)},children:[e.jsx($e,{backColor:j}),e.jsx(p,{size:"bodyS",children:M})]}),D&&e.jsx(Me,{})]},M)})})]})})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(dn,{onClick:F,newItem:r,children:[r?e.jsx(re,{className:"addImg"}):e.jsx(K,{direction:"top",className:"addImg"}),r?e.jsx(xe,{className:"grantPoint",children:"항목 추가"}):e.jsx(xe,{className:"grantPoint",children:"항목 닫기"})]}),!r&&e.jsxs(e.Fragment,{children:[e.jsx(H,{width:478,label:"이름",type:"text",placeholder:"ex) 뉴미디어 디자인과",name:"addTagName",value:A.addTagName,onChange:z}),e.jsxs(Be,{children:[e.jsx(p,{size:"bodyS",color:"gray6",children:"색상"}),e.jsx(J,{onOutsideClick:()=>{h(!1)},children:e.jsxs(De,{onClick:()=>h(!m),children:[e.jsx(Ae,{backColor:f}),e.jsx("img",{src:he,alt:"삼각형"}),m&&e.jsx(Fe,{children:S.map(T=>{const{title:M,backColor:j,line:D}=T;return e.jsxs("div",{children:[e.jsxs(Le,{onClick:()=>{N(j),h(!1)},children:[e.jsx($e,{backColor:j}),e.jsx(p,{size:"bodyS",children:M})]}),D&&e.jsx(Me,{})]},M)})})]})})]})]})]})]})}const cn=i.div`
  position: relative;
  margin-bottom: 20px;
  .Search {
    position: absolute;
    top: 8px;
  }
`,ln=i.input`
  width: 202px;
  height: 40px;
  border-bottom: 1px solid #dddddd;
  padding: 0px 0px 0px 30px;
  font-size: 16px;
`,dn=i.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
  cursor: pointer;
  width: 85px;
  margin-bottom: ${({newItem:t})=>t?"-20px":"20px"};
  .addImg {
    width: 17px;
    margin-right: 10px;
  }
`,pn=i.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
  cursor: pointer;
  width: 85px;
  margin-bottom: 20px;
`,xe=i.div`
  font-size: 14px;
  font-weight: 700;
  color: #555555;
`,xn=i.div`
  overflow: scroll;
  height: 22vh;
  > div {
    margin-bottom: 9px;
  }
`,Ae=i.div`
  width: 30px;
  height: 30px;
  border: 2px Solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  background-color: ${({backColor:t})=>t};
  margin-right: 15px;
`,$e=i.div`
  width: 13px;
  height: 13px;
  border: 1px Solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  background-color: ${({backColor:t})=>t};
  margin-right: 15px;
  margin-left: 7px;
`,Me=i.div`
  width: 110px;
  height: 0px;
  border: 1px solid #eeeeee;
`,De=i.div`
  display: flex;
  cursor: pointer;
`,Le=i.div`
  height: 44.3px;
  width: 110px;
  display: flex;
  align-items: center;
  cursor: pointer;
`,Be=i.div`
  margin-top: 20px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`,Fe=i.div`
  width: 132px;
  height: 280px;
  border: 2px solid #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: absolute;
  margin-left: 70px;
  margin-top: -248px;
  border-radius: 5px;
  z-index: 99;
`;function gn(){const[t,o]=u.useState(!1),{selectModal:n}=I(),s=u.useMemo(()=>t?{text:e.jsx(K,{size:18,colorKey:"gray6",direction:"top"}),color:"gray"}:{text:e.jsx(K,{size:18,colorKey:"gray6",direction:"bottom"}),color:"gray"},[t]),a=()=>{o(!1)},r=()=>{a(),n("POINT_OPTIONS")},l=()=>{a(),n("VIEW_TAG_OPTIONS")};return e.jsx(J,{onOutsideClick:()=>{o(!1)},children:e.jsxs(un,{children:[e.jsx(_,{onClick:()=>o(!t),color:s.color,kind:"outline",children:e.jsxs(e.Fragment,{children:["항목보기",s.text]})}),t&&e.jsxs(hn,{children:[e.jsx(ze,{onClick:r,children:e.jsx(p,{color:"gray5",size:"captionM",cursor:"pointer",children:"상/벌점 항목 보기"})}),e.jsx(ze,{onClick:l,children:e.jsx(p,{color:"gray5",size:"captionM",cursor:"pointer",children:"학생 태그 항목 보기"})})]})]})})}const un=i.div`
  position: relative;
`,hn=i.div`
  position: absolute;
  top: 58px;
  width: 132px;
  right: -15px;
  max-height: 138px;
  background-color: ${({theme:t})=>t.color.gray1};
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 101;
  overflow-y: scroll;
`,ze=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 0 8px;
  height: 46px;
  border-bottom: 1px solid ${({theme:t})=>t.color.gray3};
`;function mn(){const[t]=Z(a=>[a.selectedStudentId,a.resetStudentId,a.appendStudentId,a.deleteStudentId]),[o,n]=u.useState(!1),{selectModal:s}=I();return e.jsx(J,{onOutsideClick:()=>n(!1),children:e.jsxs(yn,{children:[e.jsxs(Sn,{children:[e.jsx(p,{color:"gray6",margin:["left",5],children:"기본정보"}),e.jsx(p,{color:"gray6",margin:[0,80,0,5],children:"최근 부여 항목"})]}),e.jsx(jn,{children:t.map(a=>e.jsx(lo,{studentId:a}))}),e.jsxs(fn,{children:[e.jsxs(p,{size:"BtnM",children:[t.length,"명이 선택되었습니다."]}),e.jsxs(bn,{children:[o&&e.jsxs(Tn,{children:[e.jsx(Re,{onClick:()=>s("GIVE_POINT"),children:e.jsx(p,{color:"gray5",size:"captionM",cursor:"pointer",children:"상/벌점"})}),e.jsx(Re,{onClick:()=>s("GIVE_TAG_OPTIONS"),children:e.jsx(p,{color:"gray5",size:"captionM",cursor:"pointer",children:"학생 태그"})})]}),e.jsx(_,{onClick:()=>n(!o),children:"부여"})]})]})]})})}const yn=i.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 32px;
  right: 28px;
  background-color: white;
  width: 418px;
  height: 448px;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  z-index: 2;
  padding: 36px 40px 23px;
  /* animation: ${Nt} 0.3s; */
`,Sn=i.div`
  display: flex;
  justify-content: space-between;
`,jn=i.div`
  width: 338px;
  height: 285px;
  margin-bottom: 30px;
  position: relative;
  overflow-y: scroll;
  margin-top: 10px;
`,fn=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,bn=i.div`
  display: flex;
  position: relative;
`,Tn=i.div`
  position: absolute;
  width: 132px;
  max-height: 138px;
  left: -137px;
  top: -46px;
  background-color: ${({theme:t})=>t.color.gray1};
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 3;
  overflow-y: scroll;
`,Re=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 0 8px;
  height: 46px;
  border-bottom: 1px solid ${({theme:t})=>t.color.gray3};
`;function st({isOpened:t}){const{data:o,refetch:n}=no("ALL");return u.useEffect(()=>{n()},[t]),e.jsx(_n,{children:(o==null?void 0:o.point_histories)&&o.point_histories.map((s,a)=>{var h;const{point_history_id:r,student_name:l,student_gcn:x,point_name:d,point_score:c,point_type:g,date:y}=s,m=s.date===((h=o==null?void 0:o.point_histories[a-1])==null?void 0:h.date);return e.jsxs(e.Fragment,{children:[!m&&e.jsx(p,{margin:[30,0,9,0],color:"gray6",size:"bodyL",children:y}),e.jsx(xo,{point_history_id:r,student_name:l,student_gcn:x,point_name:d,point_score:c,point_type:g},r)]})})})}const _n=i.div`
  width: 418px;
`;function Cn({mode:t,studentList:o,name:n,sort:s,filterType:a,startPoint:r,endPoint:l,checkedTagList:x,setCheckedTagList:d,onChangeSearchName:c,onChangeSortType:g,onClickStudent:y,onChangeFilterType:m,onChangeLimitPoint:h,refetchSearchStudents:f,availableFeature:N}){const[S,E,L]=Z(O=>[O.selectedStudentId,O.resetStudentId,O.appendStudentId]),[A]=ae(O=>[O.clickedStudentId]),[z]=de(O=>[O.pointHistoryId]),[G]=Ze(O=>[O.deleteTagId]),{modalState:b,selectModal:P}=I();u.useEffect(()=>{f()},[b]);const[w,F]=u.useState(!1),k=()=>P("POINT_FILTER"),C=ao(z),v=ft(A),B=Zt(),[T,M]=u.useState(""),[j,D]=u.useState(""),[it,je]=u.useState(""),{data:fe}=ro(),{data:be,refetch:Te}=ot(),{toastDispatch:oe}=q(),_e=Y(),rt=Kt(T,{onSuccess:()=>{P("POINT_OPTIONS"),_e.invalidateQueries(["usePointList"]),M(""),oe({toastType:"SUCCESS",actionType:"APPEND_TOAST",message:"상/벌점 항목이 삭제되었습니다."})},onError:()=>{oe({toastType:"ERROR",actionType:"APPEND_TOAST",message:"상/벌점 항목 삭제를 실패했습니다."})}}),at=Mo(j,{onSuccess:()=>{Te(),_e.invalidateQueries(["studentList"]),D(""),oe({toastType:"SUCCESS",actionType:"APPEND_TOAST",message:"태그가 삭제되었습니다."}),P("VIEW_TAG_OPTIONS")},onError:()=>{oe({toastType:"ERROR",actionType:"APPEND_TOAST",message:"태그 삭제를 실패했습니다."})}}),Ce=u.useMemo(()=>r===-100&&l===100&&a==="ALL"?{text:"상/벌점",color:"gray"}:{text:`${te[a]} / ${r}~${l}점`,color:"primary"},[r,l,a]),[Pe,ct]=u.useState(!1),lt=()=>{Pe?E():o.forEach(O=>{L(O.id)}),ct(O=>!O)},dt=Do(A,G);return e.jsxs(Pn,{children:[e.jsxs(Nn,{className:"filter",children:[e.jsx(xt,{className:"searchBox",value:n,onChange:c}),e.jsxs(He,{children:[e.jsx(gn,{}),(N==null?void 0:N.point_service)&&e.jsx(_,{color:Ce.color,kind:"outline",onClick:k,children:Ce.text}),e.jsx(Lo,{refetchSearchStudents:f,checkedTagList:x,setCheckedTagList:d}),e.jsxs(_,{kind:"outline",color:"gray",onClick:g,Icon:e.jsx(gt,{}),className:"filterButton",children:[mt[s],"순"]}),e.jsx(Pt,{width:2,height:47,margin:"0 16px 0 16px"}),e.jsx(_,{kind:"outline",color:"gray",onClick:()=>{F(!0)},className:"filterButton",children:"상/벌점 내역"})]})]}),e.jsxs(He,{children:[e.jsx(me,{status:Pe,onChange:lt}),e.jsx(p,{cursor:"pointer",children:"전체 선택"})]}),e.jsx(In,{children:o.map(O=>e.jsx(At,{mode:t,studentInfo:O,onClickStudent:y,isSelected:S.includes(O.id)},O.id))}),b.selectedModal==="POINT_FILTER"&&e.jsx(Xt,{filterType:a,minPoint:r,maxPoint:l,onChangeLimitPoint:h,onChangeFilterType:m}),b.selectedModal==="DELETE_POINT_LIST"&&e.jsx(oo,{onClick:C.mutate}),b.selectedModal==="DELETE_STUDENT"&&e.jsx(co,{onClick:v.mutate}),b.selectedModal==="POINT_OPTIONS"&&e.jsx(No,{selectedPointOption:T,setSelectedPointOption:M,allPointOptions:fe}),b.selectedModal==="GIVE_POINT"&&e.jsx(jo,{allPointOptions:fe}),b.selectedModal==="DELETE_POINT_OPTION"&&e.jsx(ko,{setSelectedOption:M,onClick:rt.mutate}),b.selectedModal==="DELETE_STUDENT_TAG"&&e.jsx(Ro,{onClick:()=>{dt.mutate()}}),b.selectedModal==="GIVE_TAG_OPTIONS"&&e.jsx(Vo,{selectedStudentId:S,refetchSearchStudents:f,allTags:be,selectedTag:j,setSelectedTag:D,setTagModal:je}),b.selectedModal==="VIEW_TAG_OPTIONS"&&e.jsx(an,{selectedTag:j,setSelectedTag:D,allTags:be,refetchAllTags:Te,setTagModal:je}),b.selectedModal==="DELETE_TAG"&&e.jsx(rn,{setSelectedOption:D,onClick:at.mutate,tagModal:it}),!!S.length&&e.jsx(mn,{}),e.jsx(Qe,{children:e.jsx(Ke,{isOpened:w,title:"상/벌점 내역",close:()=>{F(!1)},button:e.jsx(_,{margin:["top",50],onClick:B.mutate,children:"엑셀 출력하기"}),children:e.jsx(st,{isOpened:w})})})]})}const Pn=i.div`
  width: 1030px;
  transition: width 0.7s ease-in-out;
  margin-bottom: 150px;
`,Nn=i.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 52px 0;
  > button {
    > svg > path {
      fill: ${({theme:t})=>t.color.gray6};
    }
  }
`,In=i.ul`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`,He=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 36px;
`;i.div`
  position: relative;
`;i.div`
  z-index: 99;
  margin-left: -48px;
  margin-top: 8px;
  position: absolute;
  width: 132px;
  max-height: 92px;
  background: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${({theme:t})=>t.color.gray3};
`;i.div`
  font-weight: 400;
  font-size: 12px;
  height: 46px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;i.div`
  width: 110px;
  height: 1px;
  border: 1px solid ${({theme:t})=>t.color.gray3};
`;const vn=()=>{const t=u.useRef(null);return{debounce:(n,s)=>{t.current&&clearTimeout(t.current),t.current=setTimeout(()=>{n(),t.current=null},s)}}};function wn({student_id:t,name:o,gcn:n,sex:s,room_number:a,profile_image_url:r}){const[l,x]=u.useState(!1),{selectModal:d}=I(),c=()=>d("DELETE_STUDENT"),g=()=>{x(!l)};return e.jsxs(kn,{children:[e.jsx("img",{src:r,alt:"프로필"}),e.jsxs(En,{children:[e.jsxs(On,{children:[e.jsx(p,{size:"headlineS",color:"gray10",children:o}),e.jsx(p,{size:"headlineS",color:"gray6",margin:["left",16],children:n}),e.jsx(Mn,{onClick:g,children:e.jsx(ut,{size:24,colorKey:"gray5"})}),l&&e.jsx(J,{onOutsideClick:()=>{x(!1)},children:e.jsx(An,{onClick:c,children:"학생 삭제"})})]}),e.jsxs($n,{children:[e.jsxs(p,{size:"bodyL",color:"gray6",margin:["top",12],children:[a,"호"]}),e.jsx(Dn,{sex:s,children:yt[s]})]})]})]})}const kn=i.div`
  display: flex;
  > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 24px;
    background-color: gray;
  }
`,En=i.div`
  margin-top: 13px;
`,On=i.div`
  display: flex;
`,An=i.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:t})=>t.color.error};
  ${({theme:t})=>t.font.bodyM};
  top: 114px;
  right: 40px;
  width: 160px;
  height: 56px;
  box-shadow: 0px 1px 20px rgba(238, 238, 238, 0.8);
  background-color: ${({theme:t})=>t.color.gray1};
  border-radius: 6px;
  cursor: pointer;
  z-index: 2;
`,$n=i.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,Mn=i.div`
  position: absolute;
  cursor: pointer;
  right: 45px;
  top: 75px;
`,Dn=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
  background-color: ${({theme:t,sex:o})=>o==="MALE"?t.color.primaryLighten2:t.color.errorLighten2};
  border-radius: 24px;
  color: ${({theme:t,sex:o})=>o==="MALE"?t.color.primary:t.color.error};
  margin-top: 12px;
  ${({theme:t})=>t.font.BtnM};
  z-index: 1;
`;function Ue({currentPointType:t,setCurrentPointType:o,pointType:n,point:s}){const a=n===t,r=()=>{o(a?"ALL":n)};return e.jsxs(Ln,{isCurrent:a||t==="ALL",onClick:r,color:n,children:[n==="BONUS"&&e.jsxs(e.Fragment,{children:[e.jsx(We,{size:"bodyS",color:t==="BONUS"||t==="ALL"?"primary":"gray3",children:n==="BONUS"?"상점":"벌점"}),e.jsx(Ge,{size:"bodyL",color:t==="BONUS"||t==="ALL"?"primary":"gray3",children:s})]}),n==="MINUS"&&e.jsxs(e.Fragment,{children:[e.jsx(We,{size:"bodyS",color:t==="MINUS"||t==="ALL"?"error":"gray3",children:n==="MINUS"?"벌점":"상점"}),e.jsx(Ge,{size:"bodyL",color:t==="MINUS"||t==="ALL"?"error":"gray3",children:s})]})]})}const Ln=i.div`
  width: 172px;
  height: 47px;
  display: flex;
  background-color: ${({color:t,isCurrent:o})=>{switch(t){case"BONUS":return o?R.color.primaryLighten2:R.color.gray2;case"MINUS":return o?R.color.errorLighten2:R.color.gray2;default:return""}}};
  border: 1px solid
    ${({color:t,isCurrent:o})=>{switch(t){case"BONUS":return o?R.color.primary:R.color.gray3;case"MINUS":return o?R.color.error:R.color.gray3;default:return""}}};
  padding: 8px 0;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
`,We=i(p)`
  width: 50%;
  border-right: 1px solid #eeeeee;
  text-align: center;
`,Ge=i(p)`
  width: 50%;
  text-align: center;
`,Bn=!0;function Fn({studentPointHistory:t,studentDetail:o,availableFeature:n}){var d;const[s,a]=u.useState("ALL"),[r]=Z(c=>[c.selectedStudentId]),[l,x]=ae(c=>[c.clickedStudentId,c.setClickedStudentId]);return e.jsx(e.Fragment,{children:e.jsxs(zn,{children:[e.jsx(wn,{student_id:r[0],name:o==null?void 0:o.name,gcn:o==null?void 0:o.gcn,sex:o==null?void 0:o.sex,room_number:o==null?void 0:o.room_number,profile_image_url:o==null?void 0:o.profile_image_url}),(n==null?void 0:n.point_service)&&e.jsxs(Rn,{children:[e.jsx(Ue,{currentPointType:s,setCurrentPointType:a,pointType:"BONUS",point:o==null?void 0:o.bonus_point}),e.jsx(Ue,{currentPointType:s,setCurrentPointType:a,pointType:"MINUS",point:o==null?void 0:o.minus_point})]}),e.jsx(p,{size:"bodyS",color:"gray6",margin:["top",40],children:"동일 호실 학생"}),e.jsx(Ve,{children:o==null?void 0:o.room_mates.map(c=>e.jsx(_,{kind:"outline",onClick:()=>x(c.id),color:"gray",children:c.name},c.id))}),e.jsx(p,{size:"bodyS",color:"gray6",margin:["top",40],children:"학생 태그"}),e.jsx(Ve,{children:(d=o==null?void 0:o.tags)==null?void 0:d.map(c=>e.jsx(ye,{id:c.id,name:c.name,color:c.color,canHover:!0},c.id))}),(n==null?void 0:n.point_service)&&e.jsxs(e.Fragment,{children:[e.jsx(p,{size:"bodyS",color:"gray6",margin:["top",40],children:"상/벌점"}),e.jsx(Hn,{children:(t==null?void 0:t.point_histories)&&t.point_histories.filter(c=>c.type===s||s==="ALL").map(c=>{const{point_history_id:g,name:y,type:m,score:h,date:f}=c;return e.jsx(po,{point_history_id:g,name:y,date:f,type:m,score:h,canDelete:Bn},g)})})]})]})})}const zn=i.div`
  position: relative;
  margin-top: 43px;
  padding: 60px 40px;
  width: 436px;
  min-height: 485px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 20px rgba(238, 238, 238, 0.8);
  border-radius: 4px;
  overflow: scroll;
`,Rn=i.div`
  display: flex;
  margin-top: 40px;
  > div {
    :last-child {
      margin-left: auto;
    }
  }
`,Ve=i.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 8px;
`,Hn=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;function ls(){const{debounce:t}=vn();ce();const{obj:o,changeObjectValue:n}=vt({name:"",sort:"GCN",filterType:"ALL"}),[s,a]=u.useState({startPoint:-100,endPoint:100}),[r,l]=u.useState([]),[x,d]=u.useState(o.name),[c,g,y,m]=Z(j=>[j.selectedStudentId,j.resetStudentId,j.appendStudentId,j.deleteStudentId]),[h,f]=u.useState({type:"GENERAL",text:"부여"}),[N,S]=u.useState("POINTS"),[E,L]=ae(j=>[j.clickedStudentId,j.resetClickedStudentId]),{modalState:A}=I(),{data:z,refetch:G}=bt(E),{data:b,refetch:P}=Tt({name:x,sort:o.sort,filter_type:o.filterType,min_point:s.startPoint,max_point:s.endPoint,tag_id:r}),{data:w}=wt(),{data:F,refetch:k}=so(E,w==null?void 0:w.point_service),C=()=>{const j=o.sort==="GCN"?"NAME":"GCN";n("sort",j)},v=j=>{n("filterType",j)},B=(j,D)=>{a({startPoint:j,endPoint:D})},T=j=>{n("name",j.target.value),t(()=>d(j.target.value),200)},M=(j,D)=>{D==="POINTS"?c.includes(j)?m(j):y(j):c[0]===j?g():(g(),y(j))};return e.jsxs(It,{children:[e.jsx(Un,{children:N==="POINTS"?e.jsx(e.Fragment,{children:e.jsx(Cn,{mode:h.type,studentList:(b==null?void 0:b.students)||[],name:o.name,sort:o.sort,filterType:o.filterType,startPoint:s.startPoint,endPoint:s.endPoint,checkedTagList:r,setCheckedTagList:l,availableFeature:w,onChangeSearchName:T,onChangeSortType:C,onClickStudent:M,onChangeLimitPoint:B,onChangeFilterType:v,refetchSearchStudents:P})}):e.jsx(st,{})}),e.jsx(Qe,{children:e.jsx(Ke,{isOpened:!!E,title:"학생 상세 정보",close:()=>{A.selectedModal===""&&L()},children:E&&e.jsx(Fn,{studentPointHistory:F,studentDetail:z,availableFeature:w})})})]})}const Un=i.div`
  display: flex;
  margin: 70px auto 0 auto;
  overflow-y: scroll;
`;i(_)`
  position: absolute;
  top: 50px;
  margin-left: 20px;
`;i(_)`
  position: fixed;
  top: 50px;
  right: 60px;
`;export{ls as Home};
