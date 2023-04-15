import { FC, ReactNode } from 'react';

type ButtonProps = {
	name: string;
	styleCSS?: string;
	children?: ReactNode;
  onClick: () => void;
};

export const Button: FC<ButtonProps> = (props) => {
	const { name, styleCSS,  onClick } = props;
  const btnHandler = () => onClick();

  return <button className={styleCSS} onClick={btnHandler}>{name}</button>;
};
