import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';

export const apiKey = 'd2d0dc24-cb8f-4d93-acca-55a975291bc0'
function App() {
 
  return (
    <div className="App" id='app'>
      <Header />
      <Content />

    </div>
  );
}

export default App;
