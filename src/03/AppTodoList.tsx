import { useState } from 'react';
import { v1 } from 'uuid';
import s from './TodoList.module.css';

import TodoList from './TodoList';
import AddItemForm from './AddItemForm';

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

  //TODO: functions for todoList
  const addTodoList = (title: string): void => {
    const todoListID = v1();
    const newTodoList: TodoListType = {
      id: todoListID,
      title,
      filter: 'all',
    };
    setTodoLists([newTodoList, ...todoLists]);
    setTasks({ [todoListID]: [], ...tasks });
  };

  const removeTodoList = (id: string): void => {
    const filteredTodoLists = todoLists.filter((tl) => tl.id !== id);
    setTodoLists(filteredTodoLists);
    const { [id]: removeTask, ...restTasks } = tasks;
    setTasks(restTasks);
  };

  const changeTodoListTitle = (id: string, title: string) => {
    const updatedTodoLists = todoLists.map((tl) => (tl.id === id ? { ...tl, title } : tl));
    setTodoLists(updatedTodoLists);
  };

  const changeTodoListFilter = (id: string, filter: FilterValuesType): void => {
    const updatedTodoLists = todoLists.map((tl) => (tl.id === id ? { ...tl, filter } : tl));
    setTodoLists(updatedTodoLists);
  };

  //TODO: functions for task
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

  const changeTaskTitle = (todoListID: string, id: string, title: string) => {
    const updatedTasks = tasks[todoListID].map((task) =>
      task.id === id ? { ...task, title } : task
    );
    setTasks({ ...tasks, [todoListID]: updatedTasks });
  };

  const mappedTodoLists = todoLists.map((tl: TodoListType): JSX.Element => {
    let filteredTasks = getFilteredTasks(tasks[tl.id], tl.filter);

    return (
      <TodoList
        key={tl.id}
        todoListID={tl.id}
        title={tl.title}
        tasks={filteredTasks}
        filter={tl.filter}
        addTask={addTask}
        removeTask={removeTask}
        changeTaskTitle={changeTaskTitle}
        changeTaskStatus={changeTaskStatus}
        removeTodoList={removeTodoList}
        changeTodoListTitle={changeTodoListTitle}
        changeTodoListFilter={changeTodoListFilter}
      />
    );
  });

  return (
    <div className={s.App}>
      <AddItemForm addItem={addTodoList} />
      {mappedTodoLists}
    </div>
  );
};

export default AppTodoList;
