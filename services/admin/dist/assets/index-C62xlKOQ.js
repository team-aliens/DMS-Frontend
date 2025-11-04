import{j as t,k as m}from"./design-system-R5PU-KJ5.js";import{H as e}from"./style-vendor-CCa_bSPe.js";import{g as n,V as c}from"./Header-Cq8aUTn2.js";import{W as x}from"./WithNavigatorBar-BaUD9vuh.js";import{I as d}from"./InfoCard-BTQ2DZPQ.js";import{r}from"./react-vendor-DvN4Y5o0.js";import{o as f,e as g}from"./queryKeys-B7CxYHCA.js";import{b}from"./index-BhlJXPXA.js";import"./useSchoolsApi-kltzsy-n.js";import"./query-vendor-CBGQWAC0.js";import"./delete-ChCvswoC.js";import"./utils-vendor-Bc17E_qf.js";function K(){const[o,i]=r.useState([]);r.useEffect(()=>{n().then(a=>{i((a==null?void 0:a.volunteers)||[])})},[]);const p=a=>{i(s=>s.filter(l=>l.id!==a))};return t.jsx(t.Fragment,{children:t.jsx(x,{children:t.jsxs(h,{children:[t.jsx(m,{left:366,pathToKorean:b}),t.jsx(c,{}),t.jsx(j,{children:o.map(a=>t.jsx(d,{id:a.id,status:"icon",onDelete:p,availablePoint:a.score,availableOptionalScore:a.optional_score,availableMaxApplicants:a.max_applicants,name:a.name,availableContent:a.content,availableSex:g(a.available_sex),availableGrade:f(a.available_grade),currentApplicants:a.current_applicants,maxApplicants:a.max_applicants,detailPath:"/apply/volunteer/detail"},a.id))})]})})})}const h=e.div`
  margin: 0 auto;
  width: 1000px;
`,j=e.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 75px; 
  row-gap: 50px;
  align-items: start;
  margin-bottom: 50px;
`;export{K as Volunteer};
