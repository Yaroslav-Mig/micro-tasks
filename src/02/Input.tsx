import { ChangeEvent, FC } from 'react'

type InputProps = {
	value: string;
	onChange: (title: string) => void;
}

export const Input: FC<InputProps> = (props: InputProps) => {
	const { value, onChange } = props;

	const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.currentTarget.value.trim());
	};

	return (
		<input value={value} onChange={onChangeInputHandler}/>
	)
}
