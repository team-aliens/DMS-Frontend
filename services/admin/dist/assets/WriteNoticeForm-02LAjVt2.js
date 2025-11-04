import{j as t,k as c,l as i,B as p}from"./design-system-R5PU-KJ5.js";import{H as o}from"./style-vendor-CCa_bSPe.js";import{W as u}from"./WithNavigatorBar-BaUD9vuh.js";function f({title:r,content:e,onClick:n,onChange:a,pathToKorean:s}){const l=m=>{m.preventDefault()};return t.jsx(u,{children:t.jsx(d,{children:t.jsxs(x,{onSubmit:l,children:[t.jsx(c,{left:366,pathToKorean:s}),t.jsx(i,{limit:100,height:46,className:"title",onChange:a,value:r,placeholder:"제목을 입력해주세요.",name:"title"}),t.jsx(i,{limit:1e3,height:240,className:"content",onChange:a,value:e,placeholder:"내용을 입력해주세요.",name:"content"}),t.jsx(p,{className:"submitButton",kind:"contained",onClick:n,color:"primary",size:"large",disabled:!(r&&e),children:"게시하기"})]})})})}const d=o.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({theme:r})=>r.color.gray2};
`,x=o.form`
  margin: 0 auto;
  width: 1030px;
  margin-top: 160px;
  > .title {
    margin-top: 52px;
  }
  > .content {
    margin-top: 40px;
  }
  > .submitButton {
    margin-top: 60px;
  }
`;export{f as W};
