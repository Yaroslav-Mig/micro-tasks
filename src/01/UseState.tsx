import React, { useState } from 'react';

export const UseState = () => {
  let [number, setNumber] = useState<number>(0);

  const onClickHandler = (): void => {
    number++;
    setNumber(number);
	};

	const onResetHandler = (): void => {
		setNumber(0);
	}

  return (
    <div>
      <h1>{number}</h1>
			<button onClick={onClickHandler}>rise</button>
			<button type="reset" onClick={onResetHandler}>reset</button>
    </div>
  );
};
