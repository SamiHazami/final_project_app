import React from 'react';

export default function Basket() {
  
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        

        
              <div className="col-2">Items Price</div>
              
        
            <div className="row">
              <div className="col-2">Tax Price</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>              
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button>Checkout</button>
            </div>   

      </div>
    </aside>
  );
}
