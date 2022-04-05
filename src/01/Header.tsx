import React from 'react';

type HeaderProps = {
  title: string;
};

export const Header = (props: HeaderProps) => {
	return <h1>{props.title }</h1>;
};
