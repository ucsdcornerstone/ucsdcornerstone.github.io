import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function PageWrapper({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '110px' }}>{children}</div>
      <Footer />
    </>
  );
}

export default PageWrapper;
