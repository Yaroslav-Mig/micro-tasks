import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import s from './TodoList.module.css';

import { Button } from '../02/Button';

type AddItemFormProps = {
  addItem: (title: string) => void;
};

const AddItemForm: FC<AddItemFormProps> = ({ addItem }) => {
  let [title, setTitle] = useState('');
  let [error, setError] = useState<string | null>(null);

  const addTitleHandler = (): void => {
    if (title.trim()) {
      addItem(title.trim());
      setTitle('');
    } else {
      setError('Title is required');
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		setTitle(e.currentTarget.value);
		setError(null);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
		e.ctrlKey && e.key === 'Enter' && addTitleHandler();
  };

  const inputClass = error ? `${s.error}` : '';

  return (
    <div>
      <input
        value={title}
        className={inputClass}
        onChange={onChangeHandler}
        onKeyDown={onKeyPressHandler}
      />
      <Button name='+' onClick={addTitleHandler}/>
      {error && <div className={s.error_message}>{error}</div>}
    </div>
  );
};

export default AddItemForm;
