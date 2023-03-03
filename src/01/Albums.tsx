import { useEffect, useState } from 'react';
import { Button } from '../02/Button';
import { Input } from '../02/Input';

type AlbumType = {
  userId: number;
  id: number;
  title: string;
};

export const Albums = () => {
  const [data, setData] = useState([] as Array<AlbumType>);
  const [title, setTitle] = useState<string>('');

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  useEffect(() => getData(), []);

  const showListHandler = () => getData();
  const cleanListHandler = () => setData([]);

  const addItem = () => {
    if (title.trim()) {
      const newItem = {
        userId: data[data.length - 1].userId + 1,
        id: Number(new Date()),
        title,
      } as AlbumType;

      setData([...data, newItem]);
      setTitle('');
    }
  };

  const mappedList = data.map((item) => {
    return <li key={item.id}>{item.title}</li>;
  });

  return (
    <div>
      <Button name='clean list' onClick={cleanListHandler} />
      <Button name='show list' onClick={showListHandler} />
      <Button name='add item' onClick={addItem} />
      <form>
        <Input value={title} onChange={setTitle} />
      </form>
      <ul>{mappedList}</ul>
    </div>
  );
};
