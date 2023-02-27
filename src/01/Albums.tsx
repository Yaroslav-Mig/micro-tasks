import { useEffect, useState } from 'react';
import { Button } from '../02/Button';

type AlbumType = {
  userId: number;
  id: number;
  title: string;
};

export const Albums = () => {
  const [data, setData] = useState([] as Array<AlbumType>);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const cleanListHandler = () => setData([]);

  const mappedList = data.map((item) => {
    return <li key={item.id}>{item.title}</li>;
  });

  return (
    <div>
      <ul>{mappedList}</ul>
      <Button name='clean list' onClick={cleanListHandler} />
    </div>
  );
};
