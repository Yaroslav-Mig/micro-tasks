import { useState } from 'react';

type MoneyType = {
  banknote: CurrencyType;
  value: number;
  number: string;
};
type CurrencyType = 'Dollar' | 'Euro';
type MoneyFilterType = 'all' | CurrencyType;
type FuncType = () => void;

const filterMoney = (array: Array<MoneyType>, filter: MoneyFilterType) => {
  switch (filter) {
    case 'Euro':
    case 'Dollar':
      return array.filter((el) => el.banknote === filter);
    case 'all':
      return array;
  }
};

export const Currency = () => {
  const money: Array<MoneyType> = [
    { banknote: 'Dollar', value: 100, number: ' a1234567890' },
    { banknote: 'Dollar', value: 50, number: ' z1234567890' },
    { banknote: 'Euro', value: 100, number: ' w1234567890' },
    { banknote: 'Dollar', value: 100, number: ' e1234567890' },
    { banknote: 'Dollar', value: 50, number: ' c1234567890' },
    { banknote: 'Euro', value: 100, number: ' r1234567890' },
    { banknote: 'Dollar', value: 50, number: ' x1234567890' },
    { banknote: 'Euro', value: 50, number: ' v1234567890' },
  ];

  const [filter, setFilter] = useState<MoneyFilterType>('all');
  const filteredMoney = filterMoney(money, filter);

  const mappedMoney = filteredMoney.map((el) => {
    return (
      <li key={el.number}>
        <span>{`${el.value} - ${el.banknote}`}</span>
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
      <button onClick={onClickFilterHandler('Dollar')}>Dollars</button>
      <button onClick={onClickFilterHandler('Euro')}>Euro</button>
    </>
  );
};
