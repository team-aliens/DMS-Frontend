import{i as n}from"./react-vendor-DvN4Y5o0.js";import{j as e,O as p,E as c,T as d}from"./design-system-R5PU-KJ5.js";import{H as o}from"./style-vendor-CCa_bSPe.js";const f=({children:r})=>{const i=document.getElementById("side-bar");return n.createPortal(r,i)};function j({isOpened:r,title:i,children:s,close:t,button:a}){return e.jsx(p,{onOutsideClick:t,children:e.jsxs(l,{className:r&&"open",children:[e.jsx(x,{onClick:t,children:e.jsx(c,{size:24})}),e.jsxs(m,{children:[e.jsx(d,{color:"gray10",size:"titleL",margin:["top",50],children:i}),a]}),s]})})}const l=o.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 40px 40px 30px 40px;
  top: 0;
  right: -700px;
  min-width: 418px;
  height: 100%;
  z-index: 3;
  background-color: ${({theme:r})=>r.color.gray1};
  box-shadow: 0px 2px 20px 4px rgba(0, 0, 0, 0.16);
  transition: 1.2s;
  &.open {
    right: 0;
  }
`,x=o.div`
  height: 24px;
  cursor: pointer;
`,m=o.div`
  display: flex;
  justify-content: space-between;
`;export{f as S,j as a};
