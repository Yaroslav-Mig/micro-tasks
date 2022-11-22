import React from 'react';

type ButtonProps = {
  name: string;
  addMessage: () => void;
};

export const Button = (props: ButtonProps) => {
  const { name, addMessage } = props;
  const onClickBtnHandler = () => addMessage();

  return <button onClick={onClickBtnHandler}>{name}</button>;
};
