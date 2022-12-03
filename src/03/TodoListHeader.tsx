import { FC } from 'react';
import s from './TodoList.module.css';

type TodoListHeaderProps = {
  todoListID: string;
  title: string;
  removeTodoList: (todoListID: string) => void;
};

const TodoListHeader: FC<TodoListHeaderProps> = ({ todoListID, title, removeTodoList }) => {
  const removeHandler = (): void => removeTodoList(todoListID);

  return (
    <div className={s.header_box}>
      <h3>{title}</h3>
      <button onClick={removeHandler}>X</button>
    </div>
  );
};

export default TodoListHeader;
