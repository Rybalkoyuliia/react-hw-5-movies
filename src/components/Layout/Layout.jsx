import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={s.header}>
        <span className={s.logo}>MovieFinder</span>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
