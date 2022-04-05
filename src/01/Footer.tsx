import React from 'react';

type FooterProps = {
  title: string;
};

export const Footer = (props: FooterProps) => {
  return <div>{props.title}</div>;
};
