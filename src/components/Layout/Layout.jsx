import Navigation from 'components/Navigation/Navigation';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <header className={s.header}>
        <span className={s.logo}>MovieFinder</span>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
