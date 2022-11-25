import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import s from './TodoList.module.css';
import { FilterValuesType, TaskType } from './AppTodoList';

type TodoListProps = {
  todoListID: string;
  title: string;
  tasks: Array<TaskType>;
  filter: FilterValuesType;
  addTask: (todoListID: string, title: string) => void;
  removeTask: (todoListID: string, taskID: string) => void;
  changeTaskStatus: (todoListID: string, taskID: string, status: boolean) => void;
  changeTodoListFilter: (todoListID: string, filter: FilterValuesType) => void;
};

const TodoList: FC<TodoListProps> = (props) => {
  const {
    todoListID,
    title,
    tasks,
    filter,
    addTask,
    removeTask,
    changeTodoListFilter,
    changeTaskStatus,
  } = props;

  let [taskTitle, setTaskTitle] = useState('');
  let [error, setError] = useState<string | null>(null);

  const addTaskHandler = () => {
    if (taskTitle.trim()) {
      addTask(todoListID, taskTitle.trim());
      setTaskTitle('');
    } else {
      setError('Title is required');
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    e.ctrlKey && e.key === 'Enter' && addTaskHandler();
  };
  const onFilterHandler = (filter: FilterValuesType): void => {
    changeTodoListFilter(todoListID, filter);
  };

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

  const inputClass = error ? `${s.error}` : '';
  const allBtnClass = filter === 'all' ? `${s.active_filter}` : '';
  const activeBtnClass = filter === 'active' ? `${s.active_filter}` : '';
  const completedBtnClass = filter === 'completed' ? `${s.active_filter}` : '';

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          value={taskTitle}
          className={inputClass}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
        />
        <button onClick={addTaskHandler}>+</button>
        {error && <div className={s.error_message}>{error}</div>}
      </div>
      <ul>{mappedTasks}</ul>
      <div>
        <button className={allBtnClass} onClick={() => onFilterHandler('all')}>
          All
        </button>
        <button className={activeBtnClass} onClick={() => onFilterHandler('active')}>
          Active
        </button>
        <button className={completedBtnClass} onClick={() => onFilterHandler('completed')}>
          Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
