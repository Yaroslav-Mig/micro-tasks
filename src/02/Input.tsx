import React, { ChangeEvent } from 'react'

type InputProps = {
	value: string;
	onChange: (title: string) => void;
}

export const Input = (props: InputProps) => {
	const { value, onChange} = props;
	const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.currentTarget.value);
  };
	return (
		<input value={value} onChange={onChangeInputHandler}/>
	)
}
