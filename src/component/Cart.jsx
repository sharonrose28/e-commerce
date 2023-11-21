import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import "./Cart.css";
const Cart = () => {
  const cartItems = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  if (!cartItems || cartItems.length === 0) {
    return <h1 >Your cart is empty.</h1>;
  }

  // Initialize total price
  let totalPrice = 0;

  const handleButton = (operation, product) => {
    if (operation === "remove") {
      dispatch(delCart(product));
    } else if (operation === "add") {
      dispatch(addCart(product));
    }
  };

  return (
    <>
      <div>
        {cartItems.map((product) => {
          // Update total price for each product
          totalPrice += product.qty * product.price;

          return (
            <>
            <div key={product.id} className="cart-item">
              <div className="row">
                <div className="col-md-3 mb-4">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.title}
                      height="200px"
                      width="180px"
                    />
                  )}
                </div>

                <div className="col-md-4">
                  <h3>{product.title}</h3>
                  <p className="lead fw-bold">
                    {product.qty} X ${product.price} = ${product.qty * product.price}
                  </p>
                  <button
                    className="btn btn-outline-dark me-4"
                    onClick={() => handleButton("remove", product)}
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  <button
                    className="btn btn-outline-dark me-4"
                    onClick={() => handleButton("add", product)}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <hr /> {/* Add a horizontal line between each product */}

            </>
          );
        })}
        {/* Display the total price outside the map function */}
        <div>
          <p className="lead2 fw-bold ">Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
