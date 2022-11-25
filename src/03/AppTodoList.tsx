import React, { useState } from 'react';
import { v1 } from 'uuid';
import s from './TodoList.module.css';
import TodoList from './TodoList';

export type FilterValuesType = 'all' | 'active' | 'completed';

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type TasksStateType = {
  [key: string]: Array<TaskType>;
};

type TodoListType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

const getFilteredTasks = (tasks: TaskType[], filter: FilterValuesType): TaskType[] => {
  switch (filter) {
    case 'active':
      return tasks.filter((task) => task.isDone === false);

    case 'completed':
      return tasks.filter((task) => task.isDone === true);

    default:
      return tasks;
  }
};

const AppTodoList = (): JSX.Element | null => {
  let todoListID_1 = v1();
  let todoListID_2 = v1();

  let [todoLists, setTodoLists] = useState<Array<TodoListType>>([
    { id: todoListID_1, title: 'What to learn', filter: 'all' },
    { id: todoListID_2, title: 'What to buy', filter: 'all' },
  ]);

  let [tasks, setTasks] = useState<TasksStateType>({
    [todoListID_1]: [
      { id: v1(), title: 'HTML&CSS', isDone: true },
      { id: v1(), title: 'JS', isDone: true },
      { id: v1(), title: 'ReactJS', isDone: false },
      { id: v1(), title: 'Rest API', isDone: false },
      { id: v1(), title: 'GraphQL', isDone: false },
    ],
    [todoListID_2]: [
      { id: v1(), title: 'HTML&CSS2', isDone: true },
      { id: v1(), title: 'JS2', isDone: true },
      { id: v1(), title: 'ReactJS2', isDone: false },
      { id: v1(), title: 'Rest API2', isDone: false },
      { id: v1(), title: 'GraphQL2', isDone: false },
    ],
  });

  function changeTodoListFilter(id: string, filter: FilterValuesType) {
    const updatedTodoLists = todoLists.map((tl) => (tl.id === id ? { ...tl, filter } : tl));
    setTodoLists(updatedTodoLists);
  }

  //TODO: functions for tasks

  const addTask = (todoListID: string, title: string): void => {
    const newTask = {
      id: v1(),
      title,
      isDone: false,
    };
    const kitTasks = [newTask, ...tasks[todoListID]];
    setTasks({ ...tasks, [todoListID]: kitTasks });
  };

  const removeTask = (todoListID: string, id: string): void => {
    let filteredTasks = tasks[todoListID].filter((task) => task.id !== id);
    setTasks({ ...tasks, [todoListID]: filteredTasks });
  };

  const changeTaskStatus = (todoListID: string, id: string, isDone: boolean): void => {
    const updatedTasks = tasks[todoListID].map((task) =>
      task.id === id ? { ...task, isDone } : task
    );
    setTasks({ ...tasks, [todoListID]: updatedTasks });
  };

  const mappedTodoLists = todoLists.map((tl: TodoListType): JSX.Element => {
    let filteredTasks = getFilteredTasks(tasks[tl.id], tl.filter);

    return (
      <TodoList
        todoListID={tl.id}
        title={tl.title}
        tasks={filteredTasks}
        filter={tl.filter}
        addTask={addTask}
        removeTask={removeTask}
        changeTaskStatus={changeTaskStatus}
        changeTodoListFilter={changeTodoListFilter}
      />
    );
  });

  return <div className={s.App}>{mappedTodoLists}</div>;
};

export default AppTodoList;