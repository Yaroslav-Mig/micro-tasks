import { FC } from 'react';

type ButtonProps = {
  name: string;
  onClick: () => void;
};

export const Button: FC<ButtonProps> = (props) => {
	const { name, onClick } = props;
  const btnHandler = () => onClick();

  return <button onClick={btnHandler}>{name}</button>;
};
