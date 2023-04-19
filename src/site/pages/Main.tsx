import { Navigate, useParams } from 'react-router-dom';
import { DataStateType } from '../Site';

const MainPage = ({ pages }: DataStateType): JSX.Element => {
  const { id } = useParams();
  const index = Number(id);

  return index < pages.length && index >= 0 ? (
    <section>
      <h4>{pages[index].title}</h4>
      <p>{pages[index].about}</p>
    </section>
  ) : (
    <Navigate to='/error' />
  );
};

export default MainPage;
