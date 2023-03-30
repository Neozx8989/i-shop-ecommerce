// import { AiFillCaretRight } from "react-icons/ai";
export default function ProductReview({ reviews }) {

    console.log(reviews, "reviews")

    const productReviews = reviews.map((r, index) => {
        // console.log("review", r.review);
        return (
            <div key={index} id="review">
                <b>
                    <i>{r.customer}</i>:<span className="space"></span>
                </b>
                {r.review}
            </div>
        );
    });

    return (

        <div className="reviews-container container d-flex flex-column">
            <div className="header">Customer reviews</div>
            <div className="reviews-txt">
                {productReviews != "" ? (
                    <span className="space"> {productReviews} </span>
                ) : (
                    <span className="space">No reviews</span>
                )}

            </div>
            <button className="write-review-btn">Write a review</button>
        </div>
    )

}
