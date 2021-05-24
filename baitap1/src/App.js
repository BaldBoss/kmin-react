import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Basket from './Component/Basket';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div>
        <Main></Main>
        <Basket></Basket>
      </div>
    </div>
  );
}

export default App;
