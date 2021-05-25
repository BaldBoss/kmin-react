import React from 'react'

export default function Basket(props){
    const {cartItems, onAdd, onRemove} = props
    const itemsPrice = cartItems.reduce((a,c)=> a + c.price * c.qty,0);
    const taxPrice = itemsPrice * 0.10;
    const totalPrice = itemsPrice + taxPrice;
    return (
        <aside className="block f-1">
            <h2>Cart Items</h2>
            <div>
                {cartItems.length ===0 && <div>Cart is Empty</div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="f-2">{item.name}</div>
                    <div className="f-2">
                        <button onClick={()=>onAdd(item)} className="add">+</button>
                        <button onClick={()=>onRemove(item)} className="remove">-</button>
                    </div>
                    <div className="f-2 text-right">
                        {item.qty} X ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !==0 && (
                <>
                <hr></hr>
                <div className="row">
                    <div className="col-2">Item Price</div>
                    <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2">Tax</div>
                    <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2">Total</div>
                    <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
                </div>
                <hr></hr>
                <div className="row">
                    <button onClick={() => alert('Checkout!') ? "" : window.location.reload()}>Checkout</button>
                </div>

                </>
            )}
        </aside>
    
        );
}