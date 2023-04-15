import { Outlet, NavLink } from 'react-router-dom';
import css from './Site.module.css';

import { DataStateType } from './Site';

export const Layout = ({ pages }: DataStateType) => {

  const classNavLink = ({ isActive }: { isActive: boolean }): string | undefined => {
    return isActive ? `${css['nav-list__item']} ${css.active}` : `${css['nav-list__item']}`;
  };

  const linkList: JSX.Element[] = pages.map((page, inx) => {
    return (
      <NavLink key={inx} to={`/page/${inx}`} className={classNavLink}>
        {page.title}
      </NavLink>
    );
  });

  return (
    <div>
      <header className={css.header}>
        <h1>HEADER</h1>
      </header>
      <div className={css.wrapper}>
        <aside className={css['nav-box']}>
          <ul className={css['nav-list']}>
            {linkList}
          </ul>
        </aside>
        <main className={css.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
