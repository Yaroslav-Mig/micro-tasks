import { FC } from 'react';
import s from './TodoList.module.css';

import { FilterValuesType } from './AppTodoList';

type ButtonsFilterProps = {
  todoListID: string;
  filter: FilterValuesType;
  changeTodoListFilter: (todoListID: string, filter: FilterValuesType) => void;
};

const ButtonsFilter: FC<ButtonsFilterProps> = ({ todoListID, filter, changeTodoListFilter }) => {
  const onFilterHandler = (filter: FilterValuesType): void => {
    changeTodoListFilter(todoListID, filter);
  };

  const allBtnClass = filter === 'all' ? `${s.active_filter}` : '';
  const activeBtnClass = filter === 'active' ? `${s.active_filter}` : '';
  const completedBtnClass = filter === 'completed' ? `${s.active_filter}` : '';

  return (
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
  );
};

export default ButtonsFilter;
