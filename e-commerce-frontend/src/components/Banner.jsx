
import bannerData from '../data/banner-items'
import AliceCarousel from 'react-alice-carousel'

export default function Banner() {

  const bannerItems = bannerData.map(data => {
    return (
      <div
        id="banner"
        className="row banner-container flex-lg-row flex-column-reverse"
      >
        <div className="col-lg-5 d-flex flex-column text-center banner-text">
          <div className="text1">{data.title}</div>
          <div className="text-short">{data.shortMessage}</div>
          <div className="button1">
            <button type="button" className="btn btn-warning text-white">
              Shop Now
            </button>
            <button
              type="button"
              className="btn btn-outline-light text-dark border"
            >
              View More
            </button>
          </div>
        </div>

        <div className="col-lg-1"></div>

        <div className="col-lg-5 promotion" style={{ position: "relative" }}>
          <div className="promotion-price">
            Only
            <br /> ${data.price}
          </div>
          <div className="banner-img-container img-fluid">
            <img src={data.imgUrl}></img>
          </div>
        </div>
      </div>
    )
  })



  return (
    <AliceCarousel autoPlay autoPlayInterval="3000"
      disableButtonsControls
      mouseTracking
      infinite={true}
    >

      {bannerItems}

    </AliceCarousel>
  );
}
