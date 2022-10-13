import { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';

export const apiKey = 'd2d0dc24-cb8f-4d93-acca-55a975291bc0'
function App() {
  const [modal, setModal] = useState(false)
  useEffect(() => {
    setModal(true)
  },[])
  
  return (
    <div className="App" id='app'>
      <Header />
      {modal ? <Modal setModal={setModal} /> : <Content />} 
    </div>
  );
}

export default App;
