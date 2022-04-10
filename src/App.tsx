import React, { useState } from 'react';
import './App.css';
import { Header } from './01/Header';
import { Body } from './01/Body';
import { Footer } from './01/Footer';
import { Button } from './01/Button';
import { UseState } from './01/UseState';
import { FullInput, MessagesType } from './02/FullInput';

function App() {
  const [messages, setMessages] = useState<Array<MessagesType>>([
    { message: 'text 1' },
    { message: 'text 2' },
    { message: 'text 3' },
  ]);

  const mappedMessages = messages.map((el, index) => {
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
    //   message,
    // };
    setMessages([...messages, { message }]);
  };

  return (
    <div className='App'>
      <Header title='Hello world' />
      <hr />
      <Body title='Body' />
      <hr />
      <Footer title='Footer' />
      <hr />
      <Button name={'Btn1'} callBack={() => BtnFunc_1('Yar', 21)} />
      <Button name={'Btn2'} callBack={() => BtnFunc_2('Alex', 31)} />
      <hr />
      <UseState />
      <hr />
      <FullInput addMessage={addMessage} />
      <div>{mappedMessages}</div>
    </div>
  );
}

export default App;
