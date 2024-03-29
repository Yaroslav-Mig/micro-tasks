import { useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './Site.module.css';

import { useWindowSize } from './hooks/useWindowSize';
import { useToggle } from './hooks/useToggle';

import { DataStateType } from './Site';
import Burger from './components/Burger';

export const Layout = ({ pages }: DataStateType) => {
	const [menu, setMenu] = useToggle(true) as [boolean, () => void];

	const { width } = useWindowSize() as { width: number };
	const resolution = 768;

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

  useEffect(() => {
    if (!menu && width > resolution) {
      setMenu();
    }
    if (menu && width < resolution) {
      setMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  return (
    <div>
      <header className={css.header}>
        <h1 className={css.heading}>Header</h1>
        {width > resolution ? null : <Burger toggle={menu} setToggle={setMenu} />}
      </header>
      <div className={css.wrapper}>
        {menu && (
          <aside className={css['nav-box']}>
            <ul className={css['nav-list']}>{linkList}</ul>
          </aside>
        )}
        <main className={css.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
