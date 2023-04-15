import { Navigate, useParams } from 'react-router-dom';
import { DataStateType } from '../Site';
import { Error404 } from './Error404';

const MainPage = ({ pages }: DataStateType): JSX.Element => {
  const { id } = useParams();
  const index = Number(id);

  return (
    <>
      {index < pages.length && index > -1 ? (
        <section>
          <h3>{pages[index].title}</h3>
          <p>{pages[index].about}</p>
        </section>
      ) : (
        <Navigate to='/error' />
      )}
    </>
  );
};

export default MainPage;
