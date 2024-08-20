// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Avatar from './components/Avatar';
import Counter from './components/Counter';
import List from './components/List';
import ImgList from './components/ImgList';
import Memo from './components/Memo';

import { levelContext } from './components/LevelContext';

function App() {
  const [first,setFirst] = useState(true)
  const change = () => {
    setFirst(!first)
  }
  return (
    <div className="App">
      <Avatar></Avatar>
      {/* 同一个花括号内的相同组件切换 被认为在渲染树中相同位置，数据会复用，但是，如果显示添加key属性，即使相同位置，数据也不会复用 */}
      {/* { first ? <Counter name='first'></Counter> : <Counter name='second'></Counter> } */}
      {/* 不同花括号内的相同组件切换 被认为在渲染树中不同位置，数据不会复用，state会重置 */}
      { first &&  <Counter name='first'></Counter>}
      { !first &&  <Counter name='second'></Counter>}
      <button onClick={change}>切换下一个</button>
      <levelContext.Provider value={10}>
        <List></List>
      </levelContext.Provider>
      <ImgList></ImgList>
      <Memo></Memo>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
