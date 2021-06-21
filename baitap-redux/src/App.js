
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import data from './Data/data';
import { addTotalByAmount } from './features/addtotal/AddTotalSlice';

function App() {
  const {products} = data;
  const total = useSelector((state) => state.addTotal.total)
  const dispatch = useDispatch()
  return (
    <div className="App">
        {products.map((product) =>(
          <div key={product.id} className="productWrapper">
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
              
                <button onClick={() => dispatch(addTotalByAmount(product.price))}>Add to Cart</button>
            </div>
          </div>
        ))}
        <div className="total-wrapper">
            <h5>Total: ${total}</h5>
        </div>
    </div>
  );
}

export default App;
