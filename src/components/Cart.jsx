import React from "react";

const Cart = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const totalPrice = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.quantity} x ${item.price}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div className="col-2">Total Price</div>
            <div className="col-1 text-right">{totalPrice}</div>
          </div>
        </>
      )}
    </aside>
  );
};

export default Cart;
