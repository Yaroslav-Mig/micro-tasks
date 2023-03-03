import { FC } from 'react';

type ButtonProps = {
	name: string;
	styleCSS?: string;
  onClick: () => void;
};

export const Button: FC<ButtonProps> = (props) => {
	const { name, styleCSS,  onClick } = props;
  const btnHandler = () => onClick();

  return <button className={styleCSS} onClick={btnHandler}>{name}</button>;
};
