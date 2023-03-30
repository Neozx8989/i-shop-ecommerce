import { useEffect } from "react";
import { useState } from "react";

export default function CartDetail(props) {
  let product = props;
  // useEffect(() => {
  //     props.letTotalSum(props.totalSum + (product.price * product.orderQty));
  // }, [])

  //   const [orderQty, setOrderQty] = useState(product.orderQty);
  return (
    <tr>
      <td scope="row">{product.counter + 1}</td>
      <td className="d-flex">
        <div className="d-flex gap-4">
          <div className="img">
            <img src={product.imgUrl[0].original} alt="myWishList.title" />
          </div>
          <div className="d-flex flex-column">
            <div className="title">{product.title}</div>
            <div id="color">Color: {product.selectedColor}</div>
            <div id="size">Size: {product.selectedSize}</div>
          </div>
        </div>
      </td>
      <td>${product.price}</td>
      <td className="order-qty">
        <button
          onClick={() => {
            // setOrderQty(orderQty - 1);
            product.addQty(product.id, "minus");
          }}
        >
          -
        </button>
        <span className="orderQty space"> {product.orderQty} </span>
        <button
          onClick={() => {
            // setOrderQty(orderQty + 1);
            product.addQty(product.id, "add");
          }}
        >
          +
        </button>
      </td>
      <td>${parseFloat(product.price * product.orderQty).toFixed(2)}</td>
      <td>
        <div>
          <a
            onClick={() => product.removeFromBasket(product.id, product.title)}
          >
            <i className="bi bi-x-circle-fill"> </i>
          </a>
        </div>
      </td>
    </tr>
  );
}
