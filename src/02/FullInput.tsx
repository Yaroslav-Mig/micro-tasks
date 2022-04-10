import React, { ChangeEvent, useState } from 'react';
import styles from './Input.module.css';

export type MessagesType = {
  message: string;
};

type FullInputProps = {
  addMessage: (message: string) => void;
};

export const FullInput = (props: FullInputProps) => {
  const { addMessage } = props;

  const [title, setTitle] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setError(null);
    setTitle(e.currentTarget.value);
  };

  const onClickBtnHandler = (): void => {
    if (title.trim()) {
      addMessage(title.trim());
      setTitle('');
    } else {
      setError('Text is required');
    }
  };
  return (
    <>
      <div>
        <input
          className={error ? styles.input_error : ''}
          type='text'
          value={title}
          onChange={onChangeInputHandler}
        />
        <button onClick={onClickBtnHandler}>+</button>
      </div>
      {error && <span className={error ? styles.message_error : ''}>{error}</span>}
    </>
  );
};
