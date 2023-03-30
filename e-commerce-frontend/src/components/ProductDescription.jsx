import { AiFillCaretRight } from "react-icons/ai";
export default function ProductDescription({ description }) {

    console.log(description, "description")
    return (
        <div className="reviews-container container d-flex flex-column">
            <div className="header">Product Description</div>
            <div className="reviews-txt">
                {description.map((content, index) => {
                    return (
                        <div id="review" key={index}>
                            <p>{content}</p>
                        </div>
                    );
                })}
            </div>
        </div>

    )

}
