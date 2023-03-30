import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'


function ProductsPart3(props) {

    const [basket, setBasket] = useState(0)
    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)

    function addToBasket(props) {
        console.log("added to basket ---->  ID = " + props.id);
        setBasket(basket + 1)
        console.log('Basket size = ' + basket);
    }


    return (
        <div className="product-card part2 d-flex flex-row" style={props.containerStyle} key={props.index}>
            <div className="product-img-container part2-img-container" style={{ height: "120px" }}>
                <img src={props.imgUrl[0].original} alt="image" />
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

            </div>
        </div>

    )
}
export default ProductsPart3