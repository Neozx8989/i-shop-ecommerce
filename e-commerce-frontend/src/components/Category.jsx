import categoryData from "../data/categories";
import AliceCarousel from "react-alice-carousel";

function Category() {
  const categories = categoryData.map((data, index) => {
    return (
      <div className="carousel-container">
        <div className="category-card d-flex">
          <div className="card-img-container">
            <img src={data.imgUrl} alt="image" />
          </div>
          <div className="category-text text-center">
            <div className="title">{data.title}</div>
            <div className="item text-center">({data.items} items)</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval="3000"
      mouseTracking
      items={categories}
      responsive={{ 0: { items: 3 } }}
    />
  );
}

export default Category;
