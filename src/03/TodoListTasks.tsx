import { ChangeEvent, FC } from 'react';
import s from './TodoList.module.css';

import { TaskType } from './AppTodoList';

type TodoListTasksProps = {
  todoListID: string;
  tasks: TaskType[];
  removeTask: (todoListID: string, taskID: string) => void;
  changeTaskStatus: (todoListID: string, taskID: string, status: boolean) => void;
};

const TodoListTasks: FC<TodoListTasksProps> = (props) => {
  const { todoListID, tasks, removeTask, changeTaskStatus } = props;

  const mappedTasks = tasks.map((task) => {
    const onRemoveHandler = () => removeTask(todoListID, task.id);
    const onStatusHandler = (e: ChangeEvent<HTMLInputElement>) =>
      changeTaskStatus(todoListID, task.id, e.currentTarget.checked);

    const statusTaskClass = task.isDone ? `${s.is_done}` : '';

    return (
      <li key={task.id} className={statusTaskClass}>
        <input type='checkbox' checked={task.isDone} onChange={onStatusHandler} />
        <span>{task.title}</span>
        <button onClick={onRemoveHandler}>x</button>
      </li>
    );
  });

  return <ul>{mappedTasks}</ul>;
};

export default TodoListTasks;
