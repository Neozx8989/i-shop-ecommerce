import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import ProductsPart3 from './ProductsPart3';
import productsData from '../data/products';
import { ToastContainer, toast } from "react-toastify";

function ProductsPart2(props) {

    const [rating, setRating] = useState(0)

    const style = { // container size
        width: "490px",
        height: "240px"
    }

    const notifyBasketAdd = () =>
        toast.success(props.title + "-г сагсанд амжилттай нэмлээ.! ", {
            icon: <i class="bi bi-cart-check"></i>,
        });

    const notifyBasketRemove = () =>
        toast.error(props.title + "-г сагснаас амжилттай устгалаа.! ", {
            icon: <i class="bi bi-trash3"></i>,
        });

    const products = productsData.map((data, index) => {
        if (index < 2) {
            return (
                <ProductsPart3
                    index={index}
                    id={data.id}
                    title={data.title}
                    imgUrl={data.imgUrl}
                    price={data.price}
                    rating={data.rating}
                    containerStyle={style}
                />
            )
        }
    })

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)

        // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)

    //  Сагсанд хийх function
    function basket(props) {
        console.log("added to Basket ---->  ID = " + props.id);
        let basketQty = props.basket.length;
        let isAdded = false;

        if (basketQty > 0) {
            props.basket.map((a, index) => {
                if (a.id == props.id) {
                    isAdded = true;
                }
            });
            if (isAdded) {
                notifyBasketRemove();
                props.setBasket(props.basket.filter((a) => a.id !== props.id));
            }
        }

        if (isAdded == false) {
            notifyBasketAdd();
            props.setBasket([
                ...props.basket,
                {
                    id: props.id,
                    title: props.title,
                    price: props.price,
                    imgUrl: props.imgUrl,
                    orderQty: 1,
                    selectedColor: props.color[0],
                    selectedSize: props.size[0],

                },
            ]);
        }
    }

    function inBasket(id) {
        let result = false;
        props.basket.map((a) => {
            if (a.id == id) {
                result = true;
            }
        });
        return result; // утгаа буцаая
    }


    return (
        <div className='d-flex'>
            <div className="product-card part2 d-flex flex-row" >
                <div className="product-img-container part2-img-container">
                    <img className='ms-3' src={props.imgUrl[0].original} alt="image" />
                </div>
                <div className="product-text">
                    <div className="title">{props.title}</div>
                    <div className="price">${props.price}</div>
                    <div className='product-ratings'>
                        <Rating
                            onClick={handleRating}
                            onPointerEnter={onPointerEnter}
                            onPointerLeave={onPointerLeave}
                            onPointerMove={onPointerMove}
                            initialValue={props.rating}
                            allowFraction={true}
                            size={15}
                        />
                    </div>


                    <button type='button' className={inBasket(props.id) ? "btn-basket added" : "btn-basket"} onClick={() => {
                        basket(props);
                    }}>
                        <div className="btn-text"> {inBasket(props.id) ? <span>Remove from cart</span> : <span>Add to cart</span>}
                        </div>
                        <div className="basket-icon2 text-center text-light">
                            <i class="bi bi-cart3"></i>

                        </div>
                    </button>



                </div>
            </div>

            <div className="product-cards-container">
                {products}
            </div>

        </div>

    )
}
export default ProductsPart2