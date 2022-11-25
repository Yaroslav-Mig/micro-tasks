import React, { useState } from 'react';
import './App.css';
import { Header } from './01/Header';
import { Body } from './01/Body';
import { Footer } from './01/Footer';
import { ButtonClick } from './01/ButtonClick';
import { UseState } from './01/UseState';
import { FullInput, MessagesType } from './02/FullInput';
import { Input } from './02/Input';
import { Button } from './02/Button';
import AppTodoList from './03/AppTodoList';

function App() {
  const [messages, setMessages] = useState<Array<MessagesType>>([
    { message: 'text 1' },
    { message: 'text 2' },
    { message: 'text 3' },
  ]);
  const [messages2, setMessages2] = useState<Array<MessagesType>>([
    { message: 'text 4' },
    { message: 'text 5' },
    { message: 'text 7' },
  ]);
	const [title, setTitle] = useState<string>('');

  const mappedMessages = messages.map((el, index) => {
    return <p key={index}>{el.message}</p>;
  });
  const mappedMessages2 = messages2.map((el, index) => {
    return <p key={index}>{el.message}</p>;
  });

  const BtnFunc_1 = (subcriber: string, age: number) => {
    console.log(`I\`m ${subcriber} ${age}`);
  };
  const BtnFunc_2 = (subcriber: string, age: number) => {
    console.log(`I\`m ${subcriber} ${age}`);
  };

  const addMessage = (message: string): void => {
    // const newMessage = {
    //   message: message,
    // };
    setMessages([...messages, { message }]);
  };
	const addMessage2 = (message: string): void => setMessages2([...messages2, { message }]);

	const onClickBtnHandler = () => {
		if (title.trim()) {
			addMessage2(title.trim());
			setTitle('');
		}
	};

  return (
    <div className='App'>
      <Header title='Hello world' />
      <hr />
      <Body title='Body' />
      <hr />
      <Footer title='Footer' />
      <hr />
      <ButtonClick name={'Btn1'} callBack={() => BtnFunc_1('Yar', 21)} />
      <ButtonClick name={'Btn2'} callBack={() => BtnFunc_2('Alex', 31)} />
      <hr />
      <UseState />
      <hr />
      <FullInput addMessage={addMessage} />
      <div>{mappedMessages}</div>
      <hr />
      <Input value={title} onChange={setTitle} />
      <Button name={'+'} addMessage={onClickBtnHandler} />
			<div>{mappedMessages2}</div>
			<hr />
			<AppTodoList/>
    </div>
  );
}

export default App;
