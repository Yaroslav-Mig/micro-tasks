import { FC } from 'react';
import EditableSpan from './EditableSpan';
import s from './TodoList.module.css';

type TodoListHeaderProps = {
  todoListID: string;
  title: string;
  removeTodoList: (todoListID: string) => void;
  changeTodoListTitle: (todoListID: string, title: string) => void;
};

const TodoListHeader: FC<TodoListHeaderProps> = (props) => {
  const { todoListID, title, removeTodoList, changeTodoListTitle } = props;

  const removeHandler = (): void => removeTodoList(todoListID);
  const changeTitleHandler = (title: string): void => changeTodoListTitle(todoListID, title);

  return (
    <div className={s.header_box}>
      <h3>
        <EditableSpan title={title} setNewTitle={changeTitleHandler} />
      </h3>
      <button onClick={removeHandler}>X</button>
    </div>
  );
};

export default TodoListHeader;
