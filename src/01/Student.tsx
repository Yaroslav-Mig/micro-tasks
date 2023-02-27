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

export const Students = () => {
	const students = [
    { id: 1, name: 'James', age: 8 },
    { id: 2, name: 'Robert', age: 18 },
    { id: 3, name: 'John', age: 28 },
    { id: 4, name: 'Michael', age: 38 },
    { id: 5, name: 'William', age: 48 },
    { id: 6, name: 'David', age: 58 },
    { id: 7, name: 'Richard', age: 68 },
    { id: 8, name: 'Joseph', age: 78 },
    { id: 9, name: 'Thomas', age: 88 },
    { id: 10, name: 'Charles', age: 98 },
    { id: 11, name: 'Christopher', age: 100 },
  ];

  const cars = [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' },
  ];

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
