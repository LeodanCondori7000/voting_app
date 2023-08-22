import './App.css';
import ProductList from './components/ProductList';
import TitleApp from './components/TitleApp';
import Seed from './seed';

function App() {
  return (
    <div className="App">
      <TitleApp />
      <ProductList Seed={Seed}/>
    </div>
  );
}

export default App;
