import { ChangeEvent, FC } from 'react';
import s from './TodoList.module.css';

import { TaskType } from './AppTodoList';
import EditableSpan from './EditableSpan';

type TodoListTasksProps = {
  todoListID: string;
  tasks: TaskType[];
  removeTask: (todoListID: string, taskID: string) => void;
  changeTaskTitle: (todoListID: string, taskID: string, title: string) => void;
  changeTaskStatus: (todoListID: string, taskID: string, status: boolean) => void;
};

const TodoListTasks: FC<TodoListTasksProps> = (props) => {
  const { todoListID, tasks, removeTask, changeTaskTitle, changeTaskStatus } = props;

  const mappedTasks = tasks.map((task) => {
    const onRemoveHandler = () => removeTask(todoListID, task.id);
    const onStatusHandler = (e: ChangeEvent<HTMLInputElement>) =>
      changeTaskStatus(todoListID, task.id, e.currentTarget.checked);

    const changeTitleHandler = (title: string) => changeTaskTitle(todoListID, task.id, title);

    const taskStatusClass = task.isDone ? `${s.is_done}` : '';

    return (
      <li key={task.id} className={taskStatusClass}>
        <input type='checkbox' checked={task.isDone} onChange={onStatusHandler} />
        <EditableSpan title={task.title} setNewTitle={changeTitleHandler} />
        <button onClick={onRemoveHandler}>x</button>
      </li>
    );
  });

  return <ul className={s.tasks_box}>{mappedTasks}</ul>;
};

export default TodoListTasks;
