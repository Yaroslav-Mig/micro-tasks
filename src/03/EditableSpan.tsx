import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import s from './TodoList.module.css';

type EditableSpanProps = {
  title: string;
  setNewTitle: (title: string) => void;
};

const EditableSpan: FC<EditableSpanProps> = ({ title, setNewTitle }) => {
  const [editTitle, setEditTitle] = useState<string>(title);
  const [editMode, setEditMode] = useState<boolean>(false);

  const onEditModeHandler = (): void => setEditMode(true);

  const offEditModeHandler = (): void => {
    if (editTitle.trim()) {
      setNewTitle(editTitle.trim());
      setEditMode(false);
    }
    setEditMode(false);
  };

  const changeEditTitleHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setEditTitle(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    e.ctrlKey && e.key === 'Enter' && offEditModeHandler();
  };

  return editMode ? (
    <input
      className={s.editInput}
      type='text'
      autoFocus
      value={editTitle}
      onBlur={offEditModeHandler}
      onKeyUp={onKeyPressHandler}
      onChange={changeEditTitleHandler}
    />
  ) : (
    <span onDoubleClick={onEditModeHandler}>{editTitle}</span>
  );
};

export default EditableSpan;
