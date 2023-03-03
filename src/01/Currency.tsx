import { useState } from 'react';
import styled from 'styled-components';

type MoneyType = {
  banknote: CurrencyType;
  value: number;
  number: string;
};
type CurrencyType = 'Dollar' | 'Euro';
type MoneyFilterType = 'all' | CurrencyType;
type FuncType = () => void;

interface BanknoteProps {
  $color?: string;
}

const Banknote = styled.li<BanknoteProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 150px;
  min-height: 100px;
  background-color: ${(props) => `hsl(${props.$color || '0, 0%, 90%'})`};

  & span {
    font: 1.5rem Arial, Helvetica, sans-serif;
  }
`;

const BoxList = styled.ul`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  gap: 10px;
  list-style: none;
`;

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
    const banknoteColor: string = el.banknote === 'Dollar' ? '150, 100%, 40%' : '60, 100%, 85%';

    return (
      <Banknote key={el.number} $color={banknoteColor}>
        <span>{`${el.value} - ${el.banknote}`}</span>
      </Banknote>
    );
  });

  const onClickFilterHandler = (filter: MoneyFilterType): FuncType => {
    return () => setFilter(filter);
  };

  return (
    <>
      <BoxList>{mappedMoney}</BoxList>
      <div>
        <button onClick={onClickFilterHandler('all')}>All</button>
        <button onClick={onClickFilterHandler('Dollar')}>Dollars</button>
        <button onClick={onClickFilterHandler('Euro')}>Euro</button>
      </div>
    </>
  );
};
