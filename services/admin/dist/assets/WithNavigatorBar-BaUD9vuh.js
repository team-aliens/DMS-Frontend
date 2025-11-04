import{j as e,N as n}from"./design-system-R5PU-KJ5.js";import{H as m}from"./style-vendor-CCa_bSPe.js";import{u as p,r}from"./react-vendor-DvN4Y5o0.js";import{t as s,s as f}from"./queryKeys-B7CxYHCA.js";import{b as u}from"./useSchoolsApi-kltzsy-n.js";function g({children:t}){const a=p(),{data:o}=u();r.useEffect(()=>{s("service")||f(o)},[s("service")]);const i=r.useMemo(()=>(s("service")||"").split(",").filter(c=>c),[s("service"),s("access_token"),a]);return e.jsxs(v,{children:[e.jsx(n,{navList:i}),t]})}const v=m.div`
  display: flex;
`;export{g as W};
