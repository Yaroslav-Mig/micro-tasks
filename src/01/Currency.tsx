import React from 'react';

type CurrencyProps = {
  money: Array<MoneyType>;
  setFilter: (filter: MoneyFilterType) => void;
};

export type MoneyType = {
  banknots: string;
  value: number;
  number: string;
};

type CurrencyType = 'Dollars' | 'RUBLS';

export type MoneyFilterType = 'all' | CurrencyType;

type FuncType = () => void;

export const Currency = (props: CurrencyProps) => {
  const { money, setFilter } = props;
  const mappedMoney = money.map((el) => {
    return (
      <li key={el.number}>
        <span>{`${el.value} - ${el.banknots}`}</span>
      </li>
    );
  });

  const onClickFilterHandler = (filter: MoneyFilterType): FuncType => {
    return () => setFilter(filter);
  };

  return (
    <>
      <ul>{mappedMoney}</ul>
      <button onClick={onClickFilterHandler('all')}>All</button>
      <button onClick={onClickFilterHandler('Dollars')}>Dollars</button>
      <button onClick={onClickFilterHandler('RUBLS')}>Rubles</button>
    </>
  );
};
