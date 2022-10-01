import React from 'react';

export default function Basket(props) {
  const { cartItems,onAdd, onRemove} = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside style={{flex:'1',padding:"1rem",margin:"0.5rem",borderRadius:"0.5rem",backgroundColor:'#e0e0e0'}}>
      <h2>Cart Items</h2>
      <div>
      {cartItems.length === 0 && <div>Cart is empty</div>} 
      {cartItems.map((item) => (
          <div key={item.id} syle={{display:'flex',justifycontent:'space-between'}}>
            <div style={{flex:'2'}}>{item.description}</div>
            <div style={{flex:'2'}}>
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>
            <div style={{flex:'2',textAlign:'right'}}>
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div style={{display:'flex',justifyContent:'space-betweeen'}}>
              <div style={{flex:'2'}}>Items Price</div>
              <div style={{flex:'1',textalign:'right'}} >${itemsPrice.toFixed(2)}</div>
            </div>
            <div style={{display:'flex',justifyContent:'space-betweeen'}}>
              <div style={{flex:'2'}}>Tax Price</div>
              <div style={{flex:'1',textalign:'right'}}>${taxPrice.toFixed(2)}</div>
            </div>
            <div style={{display:'flex',justifyContent:'space-betweeen'}}>
              <div style={{flex:'2'}}>Shipping Price</div>
              <div style={{flex:'1',textalign:'right'}}>
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div style={{display:'flex',flexwrap:'wrap',justifyContent:'space-betweeen'}}>
              <div style={{flex:'2'}}>
                <strong>Total Price</strong>
              </div>
              <div style={{flex:'1',textalign:'right'}}>
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div style={{display:'flex',justifyContent:'space-betweeen'}}>
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
            
          </>
        )}
      
                   
      </div>
    </aside>
  );
}
