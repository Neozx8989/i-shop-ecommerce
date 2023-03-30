import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import CartDetail from "./CartDetail";

function Cart({ basket, setBasket }) {
  console.log("product = ");
  console.log(basket);
  // const [totalSum, letTotalSum] = useState(0);

  function removeFromBasket(id) {
    console.log("--------To remove from Basket ");
    console.log("Basket remove ID = " + id);
    console.log(basket);
    setBasket(basket.filter((a) => a.id !== id));
  }

  function clearCart() {
    setBasket([]);
  }

  function addQty(id, operation) {
    let remove = false;
    console.log("product add qty is clicked" + " id = " + id);
    let updatedProduct = basket.map((product) => {
      if (product.id === id) {
        console.log("Order QTY = " + product.orderQty);
        if (operation == "add") {
          product.orderQty++;
        } else {
          product.orderQty--;
        }

        console.log("Order QTY Added = " + product.orderQty);
      }
      return product;
    });

    updatedProduct = basket.map((product) => {
      if (product.orderQty < 1) {
        console.log("QTY zero ---> remove from Basket");
        remove = true;
      }
      return product;
    });
    setBasket(updatedProduct);
    if (remove) {
      setBasket(basket.filter((a) => a.id !== id));
    }

    console.log("updatedProduct =");
    console.log(updatedProduct);
    if (updatedProduct) {
    }
    console.log("After removing from array");
  }

  const subtotal = basket.reduce(
    (prevValue, currentValue) =>
      prevValue + currentValue.orderQty * currentValue.price,
    0
  );

  const items = basket.map((product, index) => {
    return (
      <CartDetail
        counter={index}
        id={product.id}
        title={product.title}
        price={product.price}
        imgUrl={product.imgUrl}
        orderQty={product.orderQty}
        selectedColor={product.selectedColor}
        selectedSize={product.selectedSize}
        removeFromBasket={removeFromBasket}
        addQty={addQty}
      // removeQty={removeQty}

      // totalSum={totalSum}
      // letTotalSum={letTotalSum}
      />
    );
  });

  return (
    <div>
      <div className="cart container gap-3">
        <div className="cart-details-container col-8 border">
          <table class="table">
            <thead>
              <tr className="cart-header">
                <td scope="col">#</td>
                <td scope="col" className="text-center">
                  {" "}
                  Product
                </td>
                <td scope="col">Price</td>
                <td scope="col">Quantity</td>
                <td scope="col">Subtotal</td>
                <td scope="col"></td>
              </tr>
            </thead>
            <tbody>
              {/* {console.log("items =" + items)} */}
              {items}
            </tbody>
          </table>
          <div className="d-flex justify-content-between py-4">
            <button className="btn btn-warning rounded-5 px-4 py-3 text-white continue-shopping">

              <Link to={"/"}>
                Continue shopping
              </Link>
            </button>
            <button className="btn btn-outline-secondary rounded-5 px-5 py-3 ">
              Update cart
            </button>
            <button
              className="btn btn-outline-danger rounded-5 px-5 py-3 "
              onClick={() => clearCart()}
            >
              Clear cart
            </button>
          </div>
        </div>

        <div className="cart-total-container col-4 border">
          <div className="cart-header">Cart total</div>
          <div className="p-4">
            <div className="d-flex justify-content-between" id="subtotal">
              <p>Subtotal</p>
              <p> ${parseFloat(subtotal).toFixed(2)}</p>

              {/* <p>{totalSum}</p> */}
            </div>
            <hr />
            <div>
              <input type="text" placeholder="Enter coupon code" />
            </div>
            <hr />
            <select name="" id="country">
              <option value="">Country</option>
              <option value="">Country</option>
            </select>
            <div className="d-flex justify-content-between py-4" id="subtotal">
              <p>Total amount</p>
              <p> ${parseFloat(subtotal).toFixed(2)}</p>
            </div>
            <div className="text-center">
              <button className="btn btn-warning rounded-5 px-4 py-3 text-white">
                Proceed to ckeckout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
