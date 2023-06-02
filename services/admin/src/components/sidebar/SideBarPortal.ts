import reactDom from 'react-dom';
import React from 'react';

const SideBarPortal = ({ children }: { children: React.ReactNode }) => {
  const el = document.getElementById('side-bar') as HTMLDivElement;
  return reactDom.createPortal(children, el as HTMLDivElement);
};

export default SideBarPortal;
