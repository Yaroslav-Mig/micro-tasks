import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { Error404 } from './pages/Error404';
import MainPage from './pages/Main';

export type DataStateType = {
  pages: Array<PagesType>;
};
export type PagesType = {
  title: string;
  about: string;
};
export const dataState: DataStateType = {
  pages: [
    { title: 'while', about: 'about while' },
    { title: 'for', about: 'about for' },
    { title: 'switch', about: 'about switch' },
  ],
};

export const Site = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout pages={dataState.pages}/>}>
          <Route path='/' element={<Navigate to='page/0' replace />} />
          <Route path='page' element={<Navigate to='0' replace />} />
          <Route path='page/:id' element={<MainPage pages={dataState.pages} />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
