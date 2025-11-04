import{j as t,k as l,T as c}from"./design-system-R5PU-KJ5.js";import{W as m}from"./WithNavigatorBar-BaUD9vuh.js";import{H as r}from"./style-vendor-CCa_bSPe.js";import{c as x,V as C,e as g}from"./Header-Cq8aUTn2.js";import{I as f}from"./InfoCard-BTQ2DZPQ.js";import{r as o}from"./react-vendor-DvN4Y5o0.js";import{u as h,e as v,o as u}from"./queryKeys-B7CxYHCA.js";import{b as y}from"./index-BhlJXPXA.js";import"./useSchoolsApi-kltzsy-n.js";import"./query-vendor-CBGQWAC0.js";import"./delete-ChCvswoC.js";import"./utils-vendor-Bc17E_qf.js";const T="data:image/svg+xml,%3csvg%20width='16'%20height='18'%20viewBox='0%200%2016%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.54381%2017.5162H11.4671C12.6272%2017.5162%2013.373%2016.8156%2013.4333%2015.6554L13.9381%204.8072H14.7667C15.1509%204.8072%2015.4448%204.50586%2015.4448%204.12919C15.4448%203.75251%2015.1434%203.46624%2014.7667%203.46624H11.4219V2.33622C11.4219%201.17606%2010.6836%200.498047%209.4255%200.498047H6.56278C5.30469%200.498047%204.56641%201.17606%204.56641%202.33622V3.46624H1.23661C0.859933%203.46624%200.558594%203.76004%200.558594%204.12919C0.558594%204.51339%200.859933%204.8072%201.23661%204.8072H2.06529L2.57003%2015.6554C2.6303%2016.8231%203.36858%2017.5162%204.54381%2017.5162ZM5.97517%202.40402C5.97517%202.01981%206.24637%201.77121%206.66071%201.77121H9.32757C9.74191%201.77121%2010.0131%202.01981%2010.0131%202.40402V3.46624H5.97517V2.40402ZM4.69448%2016.1677C4.28013%2016.1677%203.97879%2015.8588%203.95619%2015.4143L3.45145%204.8072H12.5293L12.0396%2015.4143C12.0246%2015.8664%2011.7307%2016.1677%2011.3013%2016.1677H4.69448ZM5.7793%2014.9548C6.10324%2014.9548%206.30664%2014.7514%206.29911%2014.4501L6.0731%206.57003C6.06557%206.26869%205.85463%206.07282%205.54576%206.07282C5.22935%206.07282%205.02595%206.27623%205.03348%206.57757L5.25949%2014.4576C5.26702%2014.7589%205.47796%2014.9548%205.7793%2014.9548ZM8.00167%2014.9548C8.31808%2014.9548%208.53655%2014.7589%208.53655%2014.4576V6.57757C8.53655%206.27623%208.31808%206.07282%208.00167%206.07282C7.68527%206.07282%207.47433%206.27623%207.47433%206.57757V14.4576C7.47433%2014.7589%207.68527%2014.9548%208.00167%2014.9548ZM10.2241%2014.9623C10.5254%2014.9623%2010.7363%2014.7589%2010.7439%2014.4576L10.9699%206.57757C10.9774%206.27623%2010.774%206.08036%2010.4576%206.08036C10.1487%206.08036%209.93778%206.27623%209.93025%206.57757L9.70424%2014.4576C9.69671%2014.7514%209.90011%2014.9623%2010.2241%2014.9623Z'%20fill='%233D8AFF'/%3e%3c/svg%3e";function R(){const[p,n]=o.useState([]),{toastDispatch:s}=h();o.useEffect(()=>{x().then(a=>{n((a==null?void 0:a.volunteers)||[])})},[]);const d=async a=>{try{await g(a),s({actionType:"APPEND_TOAST",toastType:"SUCCESS",message:"봉사 활동에서 성공적으로 제외했습니다."}),window.location.reload()}catch{s({actionType:"APPEND_TOAST",toastType:"ERROR",message:"봉사 활동에서 제외에 실패했습니다."})}};return t.jsx(m,{children:t.jsxs(j,{children:[t.jsx(l,{left:366,pathToKorean:y}),t.jsx(C,{}),t.jsx(H,{children:p.map(a=>{var i;return t.jsxs("div",{children:[t.jsx(f,{id:a.id,name:a.name,availableGrade:u(a.available_grade),availableSex:v(a.available_sex),status:"noneIcon",maxApplicants:a.max_applicants,currentApplicants:a.current_applicants,detailPath:"/apply/volunteer/current/detail"}),t.jsx(w,{children:(i=a.applicants)==null?void 0:i.map(e=>t.jsxs("div",{children:[t.jsx("img",{onClick:()=>d(e.id),style:{cursor:"pointer"},src:T}),t.jsxs(c,{size:"bodyS",color:"primary",children:[e.gcd," ",e.name]})]},e.id))})]},a.id)})})]})})}const j=r.div`
  margin: 0 auto;
  width: 1000px;
`,H=r.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-bottom: 100px;
  > div {
    display: flex;
    gap: 59px;
  }
`,w=r.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 34px;
  > div {
    border-radius: 8px;
    background-color: #f5f9ff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    min-width: 120px;
    height: 40px;
    padding: 8px;
    gap: 9px;
  }
`;export{R as VolunteerApplication};
