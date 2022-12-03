import { FC } from 'react';

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
    changeTaskStatus,
    changeTodoListFilter,
  } = props;

  const addItem = (title: string): void => addTask(todoListID, title);

  return (
    <div>
      <AddItemForm addItem={addItem} />
      <TodoListHeader title={title} />
      <TodoListTasks
        todoListID={todoListID}
        tasks={tasks}
        removeTask={removeTask}
        changeTaskStatus={changeTaskStatus}
      />
      <ButtonsFilter
        todoListID={todoListID}
        filter={filter}
        changeTodoListFilter={changeTodoListFilter}
      />
    </div>
  );
};

export default TodoList;
