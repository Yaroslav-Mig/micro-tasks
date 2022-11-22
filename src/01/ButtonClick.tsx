import React, { MouseEvent } from 'react';

type ButtonProps = {
  name: string;
  callBack: () => void;
};

export const ButtonClick = ({ name, callBack }: ButtonProps) => {
  const onBtnHandler = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('Hello Vas');
  };
  const onBtnHandler2 = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('Hello Gas');
  };
  const onClickHandler = () => {
    callBack();
  };

  return (
    <>
      {/* <button onClick={onBtnHandler}>MyYouTubeChanel-1</button>
      <button onClick={onBtnHandler2}>MyYouTubeChanel-2</button>
			<button onClick={() => { onClickHandler('Yar')}}>MyYouTubeChanel-3</button> */}
      <button onClick={onClickHandler}>{name}</button>
    </>
  );
};
