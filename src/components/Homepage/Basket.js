import React from 'react';

export default function Basket(props) {
  const { cartItems,onAdd, onRemove} = props;
  return (
    <aside style={{flex:'1',padding:"1rem",margin:"0.5rem",borderRadius:"0.5rem",backgroundColor:'#e0e0e0'}}>
      <h2>Cart Items</h2>
      <div>
      {cartItems.length === 0 && <div>Cart is empty</div>} 
      {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.description}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
      
                   
      </div>
    </aside>
  );
}
