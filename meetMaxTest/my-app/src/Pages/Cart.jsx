import { useContext } from "react";
import { MyContext } from "../Contexts/MyContext";
import { Trash, CartFill } from "react-bootstrap-icons"; 
import './index.css';

function Cart() {
  const {
    cartItems,
    removeFromCart,
    placeOrder,
    calculateTotalCost,
    isOrdering,
  } = useContext(MyContext);

 

  return (
    <div className="center">
      {cartItems.map((item) => (
        
        <div key={item.id} className="display">
            <div className="display">
          <img src={item.url} alt={item.name} className="img " /> 
          <p>{item.name}</p>
           
          <button onClick={() => removeFromCart(item)} disabled={isOrdering}>
            {isOrdering ? (
              <Trash /> // delete ka kaam baki hai
            ) : (
              <Trash /> 
            )}
          </button>
        </div></div>
      ))}
      <p>Total Cost: {calculateTotalCost()}</p>
      
      {cartItems.length > 0 && (
        <button onClick={placeOrder} disabled={isOrdering} className="btn" style={{ padding: "0.5em 1.5em", width: "300px", height: "70px"}}>
          {isOrdering ? "Ordering..." : <CartFill />} Place Order
        </button>
      )}
    </div>
  );
}

export default Cart;
