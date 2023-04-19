import { ChangeEvent } from 'react';
import css from './Burger.module.css';

type BurgerProps = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
};

const Burger = (props: BurgerProps): JSX.Element => {
  const { toggle, setToggle } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setToggle(e.currentTarget.checked);
  };

  return (
    <div className={css.box}>
      <input
        id='menu-burger'
        className={css.input}
        type='checkbox'
        checked={toggle}
        onChange={onChangeHandler}
      />
      <label htmlFor='menu-burger' className={css['wrapper-lines']}>
        <span className={css.line}></span>
        <span className={css.line}></span>
        <span className={css.line}></span>
      </label>
    </div>
  );
};

export default Burger;
