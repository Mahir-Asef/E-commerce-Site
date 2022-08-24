import React from 'react';

const Cart = () => {
    return (
        <div>
            <div className="ms-4 mt-5">
                <h4>Selected Items:</h4>
                <h4>Total Price:</h4>
                <h4>Total Shipping Charge:</h4>
                <h4>Tax:</h4>
                <h4>Grand Total:</h4>
            </div>

            <div>
                <button className="bg-danger m-5 w-75 fs-3 text-light border rounded">Clean Cart</button><br/>
                <button className="bg-warning ms-5 w-75 fs-3 text-light border rounded">Review Button</button>
            </div>
        </div>
    );
};

export default Cart;