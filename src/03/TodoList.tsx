import { FC } from 'react';
import s from './TodoList.module.css';

import { FilterValuesType, TaskType } from './AppTodoList';

import TodoListHeader from './TodoListHeader';
import AddItemForm from './AddItemForm';
import TodoListTasks from './TodoListTasks';
import ButtonsFilter from './ButtonsFilter';

type TodoListProps = {
  todoListID: string;
  title: string;
  tasks: Array<TaskType>;
  filter: FilterValuesType;
  addTask: (todoListID: string, title: string) => void;
  removeTask: (todoListID: string, taskID: string) => void;
  changeTaskTitle: (todoListID: string, taskID: string, title: string) => void;
  changeTaskStatus: (todoListID: string, taskID: string, status: boolean) => void;
  removeTodoList: (todoListID: string) => void;
  changeTodoListTitle: (todoListID: string, title: string) => void;
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
    changeTaskTitle,
    changeTaskStatus,
    removeTodoList,
    changeTodoListTitle,
    changeTodoListFilter,
  } = props;

  const addItem = (title: string): void => addTask(todoListID, title);

  return (
    <div className={s.container}>
      <AddItemForm addItem={addItem} />
      <TodoListHeader
        todoListID={todoListID}
        title={title}
        removeTodoList={removeTodoList}
        changeTodoListTitle={changeTodoListTitle}
      />
      {tasks.length ? (
        <TodoListTasks
          todoListID={todoListID}
          tasks={tasks}
          removeTask={removeTask}
          changeTaskTitle={changeTaskTitle}
          changeTaskStatus={changeTaskStatus}
        />
      ) : (
        <p>There are no tasks</p>
      )}
      <ButtonsFilter
        todoListID={todoListID}
        filter={filter}
        changeTodoListFilter={changeTodoListFilter}
      />
    </div>
  );
};

export default TodoList;
