import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import ProductList from './Components/ProductList';
import Basket from './Components/Basket';

function App() {
  return (
    <Provider store={store}>
      <div className='main'>
        <ProductList />
        <Basket />
      </div>
    </Provider>
  );
}

export default App;
