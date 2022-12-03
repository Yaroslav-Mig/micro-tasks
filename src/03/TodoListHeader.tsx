import { FC } from 'react';

type TodoListHeaderProps = {
	title: string;
}

const TodoListHeader: FC<TodoListHeaderProps> = ({title}) => {
	return (
		<h3>{title}</h3>
	)
}

export default TodoListHeader