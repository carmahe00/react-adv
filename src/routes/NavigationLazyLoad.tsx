import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
/* import { LazyPage1, LazyPage3, LazyPage2 } from '../01-lazyload/pages'; */

import logo from '../logo.svg'
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                routes.map(route =>
                  <li key={route.to} >
                    <NavLink to={route.to} className={({ isActive }) => isActive ? 'nav-active' : ''} >{route.name}</NavLink>
                  </li>)
              }

            </ul>
          </nav>


          <Routes>
            {
              routes.map(({ to, path, Component }) => <Route key={to} path={path} element={<Component />} />)
            }

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>

        </div>
      </BrowserRouter>
    </Suspense>
  )
}