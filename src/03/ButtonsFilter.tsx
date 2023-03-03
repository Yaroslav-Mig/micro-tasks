import { FC } from 'react';
import s from './TodoList.module.css';

import { FilterValuesType } from './AppTodoList';
import { Button } from '../02/Button';

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
      <Button styleCSS={allBtnClass} name='All' onClick={() => onFilterHandler('all')}/>
      <Button styleCSS={activeBtnClass} name='Active' onClick={() => onFilterHandler('active')}/>
      <Button styleCSS={completedBtnClass} name='Completed' onClick={() => onFilterHandler('completed')}/>
    </div>
  );
};

export default ButtonsFilter;
