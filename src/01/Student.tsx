import React from 'react';

type StudentsProps = {
  students: Array<StudentType>;
  cars: Array<CarsType>;
};

type StudentType = {
  id: number;
  name: string;
  age: number;
};

type CarsType = {
  manufacturer: string;
  model: string;
};

const CarsStyle: Object = {
  fontFamily: '"Lucida Sans Unicode", "Lucida Grande", Sans-Serif',
  fontSize: '14px',
  borderCollapse: 'separate',
  textAlign: 'center',
  borderRadius: '20px',
  borderSpacing: '5px',
  border: '16px solid #ECE9E0',
  background: '#ECE9E0',
  color: '#656665',
};

export const Students = (props: StudentsProps) => {
  const { students, cars } = props;

  const studentsList = students.map((el: StudentType) => {
    return (
      <li key={el.id}>
        <span>{el.name}</span> - <span>{`${el.age} years old`}</span>
      </li>
    );
  });

  const carsList = cars.map((el: CarsType, index: number) => {
    return (
      <tr key={index + 1}>
        <td style={{ background: '#F5D7BF' }}>{el.manufacturer}</td>
        <td style={{ background: '#F5D7BF' }}>{el.model}</td>
      </tr>
    );
  });

  const [brand, model] = Object.keys(cars[0]) as Array<string>;

  return (
    <>
			<ul>{studentsList}</ul>
			<hr/>
      <table style={CarsStyle}>
        <thead>
          <tr>
            <th>{brand}</th>
            <th>{model}</th>
          </tr>
        </thead>
        <tbody>{carsList}</tbody>
      </table>
    </>
  );
};
