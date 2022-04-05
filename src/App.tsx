import React from 'react';
import './App.css';
import { Header } from './01/Header';
import { Body } from './01/Body';
import { Footer } from './01/Footer';
import { Button } from './01/Button';
import { UseState } from './01/UseState';

function App() {

	const BtnFunc_1 = (subcriber: string, age: number) => {
		console.log(`I\`m ${subcriber} ${age}`);

	}
	const BtnFunc_2 = (subcriber: string, age: number) => {
		console.log(`I\`m ${subcriber} ${age}`);
	}


  return (
    <div className='App'>
      <Header title='Hello world' />
      <Body title='Body' />
      <Footer title='Footer' />
			<Button name={'Btn1'} callBack={() => BtnFunc_1('Yar', 21)}/>
			<Button name={'Btn2'} callBack={() => BtnFunc_2('Alex', 31)} />
			<UseState/>
    </div>
  );
}

export default App;
