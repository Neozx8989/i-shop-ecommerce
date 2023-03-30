// ,
// {
//     original: '',
//     thumbnail: ''
// }

const products = [
  {
    id: 1,
    title: "Camera",
    description: [
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "4K Motion JPEG video (DCI cinema-type 4096 x 2160) at 30p or 24p; in-camera still frame grab* of 4K 8.8-Megapixel images; multiple video options include Full HD up to 60p, and HD up to 120p.",
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "4K Motion JPEG video (DCI cinema-type 4096 x 2160) at 30p or 24p; in-camera still frame grab* of 4K 8.8-Megapixel images; multiple video options include Full HD up to 60p, and HD up to 120p.",
    ],
    imgUrl: [
      {
        original: "https://s7d1.scene7.com/is/image/canon/1483C082_eos-5d-mark-iv-with-canon-log_3?fmt=webp-alpha&wid=600",
        thumbnail: "https://s7d1.scene7.com/is/image/canon/1483C082_eos-5d-mark-iv-with-canon-log_3?fmt=webp-alpha&wid=200",
      },
      {
        original: 'https://s7d1.scene7.com/is/image/canon/1483C082_eos-5d-mark-iv-with-canon-log_primary?fmt=webp-alpha&wid=600',
        thumbnail: 'https://s7d1.scene7.com/is/image/canon/1483C082_eos-5d-mark-iv-with-canon-log_primary?fmt=webp-alpha&wid=200'
      },
      ,
      {
        original: 'https://s7d1.scene7.com/is/image/canon/1483C082_eos-5d-mark-iv-with-canon-log_2?fmt=webp-alpha&wid=600',
        thumbnail: 'https://s7d1.scene7.com/is/image/canon/1483C082_eos-5d-mark-iv-with-canon-log_2?fmt=webp-alpha&wid=200'
      },
    ],
    price: 2599,
    rating: 5,
    reviews: [
      {
        customer: "Mary",
        review: "This product is really well",
      },
      {
        customer: "Kevin",
        review: "I bought a brand new Canon 5D Mark IV with Canon Log and after a month of using it the body is now dead. It does not turn on. So frustrated and disappointed.",
      },
      {
        customer: "Jonny",
        review: `Big Upgrade!!
        I'm not a photographer nor a videographer but when googling the best camera for shooting music videos, the 5D4 Mark IV immediately popped up. Without having any prior knowledge or experience on this camera, I began doing my very intensive research on this product.
        As a current owner of a Canon XA10, the 5D4 is a great upgrade!
        I've only been interested in recording great cinematic videos & had no knowledge of the little things that you should take account of when seeking to produce great quality videos using this camera.`,
      },
    ],
    quantity: 4,
    color: ["black"],
    size: [`10"`],
  },
  {
    id: 2,
    title: "Wireless headphones",
    description: [
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "4K Motion JPEG video (DCI cinema-type 4096 x 2160) at 30p or 24p; in-camera still frame grab* of 4K 8.8-Megapixel images; multiple video options include Full HD up to 60p, and HD up to 120p.",
    ],
    imgUrl: [
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/IZgoiSEITyqxGYys91X6",
        thumbnail:
          "https://media.graphassets.com/resize=w:200,fit:crop/quality=value:65/auto_image/compress/IZgoiSEITyqxGYys91X6",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/Prkm0Ae7TRqvTC174ItE",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/Prkm0Ae7TRqvTC174ItE",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/OiToBMx5Tfyz1uWdBD21",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/OiToBMx5Tfyz1uWdBD21",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/IRyDpzTfRRWesXxEl0Sb",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/IRyDpzTfRRWesXxEl0Sb",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/PEpG5xXlRAuuZw4T5DUp",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/PEpG5xXlRAuuZw4T5DUp",
      },

      // {
      //     original: '',
      //     thumbnail: ''
      // }
    ],
    price: 11.7,
    rating: 3,
    reviews: [
      {
        customer: "Mary",
        review: "This product is really well",
      },
      {
        customer: "Kevin",
        review: "Loved this product",
      },
    ],
    quantity: 0,
    color: ["black", "brown", "white"],
    size: [`2"`, `4"`, `8"`, `15"`],
  },
  {
    id: 3,
    title: "Macbook Air",
    description: [
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "4K Motion JPEG video (DCI cinema-type 4096 x 2160) at 30p or 24p; in-camera still frame grab* of 4K 8.8-Megapixel images; multiple video options include Full HD up to 60p, and HD up to 120p.",
    ],
    imgUrl: [
      {
        original: "../image/macbook5.png",
        thumbnail: "../image/macbook5.png",
      },
    ],
    price: 11.7,
    rating: 2,
    reviews: [],
    quantity: 0,
    color: ["black", "brown", "white"],
    size: [2, 4, 8, 15],
  },
  {
    id: 4,
    title: "Play game",
    description: [
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "4K Motion JPEG video (DCI cinema-type 4096 x 2160) at 30p or 24p; in-camera still frame grab* of 4K 8.8-Megapixel images; multiple video options include Full HD up to 60p, and HD up to 120p.",
    ],
    imgUrl: [
      {
        original: "../image/play-green.png",
        thumbnail: "../image/play-green.png",
      },
      {
        original: "../image/play.png",
        thumbnail: "../image/play.png",
      },
    ],
    price: 11.7,
    rating: 3.5,
    reviews: [
      {
        customer: "Mary",
        review: "This product is really well",
      },
      {
        customer: "Kevin",
        review: "Loved this product",
      },
    ],
    quantity: 9,
    color: ["#000000", "#67001a", "#03c03c"],
    size: [2, 4, 8, 15],
  },
  {
    id: 5,
    title: "iWatch",
    description: [
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "4K Motion JPEG video (DCI cinema-type 4096 x 2160) at 30p or 24p; in-camera still frame grab* of 4K 8.8-Megapixel images; multiple video options include Full HD up to 60p, and HD up to 120p.",
    ],
    imgUrl: [
      {
        original: "../image/iwatch.jpg",
        thumbnail: "../image/iwatch.jpg",
      },
    ],
    price: 11.7,
    rating: 1,
    reviews: [],
    quantity: 0,
    color: ["black", "brown", "white"],
    size: [2, 4, 8, 15],
  },
  {
    id: 6,
    title: "Tablet as a laptop",
    description: [
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "4K Motion JPEG video (DCI cinema-type 4096 x 2160) at 30p or 24p; in-camera still frame grab* of 4K 8.8-Megapixel images; multiple video options include Full HD up to 60p, and HD up to 120p.",
    ],
    imgUrl: [
      {
        original: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWGDb8?ver=3633&q=90&m=6&h=460&w=818&b=%23FFFFFFFF&l=f&o=t&aim=true",
        thumbnail: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWGDb8?ver=3633&q=90&m=6&h=460&w=818&b=%23FFFFFFFF&l=f&o=t&aim=true",
      },
    ],
    price: 11.7,
    rating: 5,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
    size: [2, 4, 8, 15],
  },
  {
    id: 7,
    title: "Wireless headphones SBD500",
    description: [
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "4K Motion JPEG video (DCI cinema-type 4096 x 2160) at 30p or 24p; in-camera still frame grab* of 4K 8.8-Megapixel images; multiple video options include Full HD up to 60p, and HD up to 120p.",
    ],
    imgUrl: [
      {
        original:
          "https://www.klarna.com/sac/product/640x640/3000073278/Sennheiser-HD-450BT.jpg",
        thumbnail:
          "https://www.klarna.com/sac/product/640x640/3000073278/Sennheiser-HD-450BT.jpg",
      },
      {
        original:
          "https://www.klarna.com/sac/product/640x640/3006200844/Sennheiser-HD-450BT.jpg",
        thumbnail:
          "https://www.klarna.com/sac/product/640x640/3006200844/Sennheiser-HD-450BT.jpg",
      },
      {
        original:
          "https://www.klarna.com/sac/product/640x640/3000073282/Sennheiser-HD-450BT.jpg",
        thumbnail:
          "https://www.klarna.com/sac/product/640x640/3000073282/Sennheiser-HD-450BT.jpg",
      },
      {
        original:
          "https://www.klarna.com/sac/product/640x640/3000073279/Sennheiser-HD-450BT.jpg",
        thumbnail:
          "https://www.klarna.com/sac/product/640x640/3000073279/Sennheiser-HD-450BT.jpg",
      },
      {
        original:
          "https://www.klarna.com/sac/product/640x640/3006200845/Sennheiser-HD-450BT.jpg",
        thumbnail:
          "https://www.klarna.com/sac/product/640x640/3006200845/Sennheiser-HD-450BT.jpg",
      },
    ],
    price: 11.7,
    rating: 5,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
    size: [2, 4, 8, 15],
  },
  {
    id: 8,
    title: "MOMENTUM True Wireless 3",
    description: [
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "4K Motion JPEG video (DCI cinema-type 4096 x 2160) at 30p or 24p; in-camera still frame grab* of 4K 8.8-Megapixel images; multiple video options include Full HD up to 60p, and HD up to 120p.",
    ],
    imgUrl: [
      {
        original:
          "https://media.graphassets.com/resize=w:600,fit:crop/quality=value:65/auto_image/compress/YNhCcxj0TICKRgBCCcHj",
        thumbnail:
          "https://media.graphassets.com/resize=w:200,fit:crop/quality=value:65/auto_image/compress/YNhCcxj0TICKRgBCCcHj",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/PJG7oNoRyeZNyW4AVQGw",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/PJG7oNoRyeZNyW4AVQGw",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/ix5lCyqpTnKvNdTXpnPb",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/ix5lCyqpTnKvNdTXpnPb",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/3bCEoXRSOa6olX9rMjlv",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/3bCEoXRSOa6olX9rMjlv",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/zhJ9Z3y6RRieFwevrifG",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/zhJ9Z3y6RRieFwevrifG",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/qAXmwxzFSkGOaMNoOrUW",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/qAXmwxzFSkGOaMNoOrUW",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/RgMns1gQLibEVNLrvGgZ",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/RgMns1gQLibEVNLrvGgZ",
      },
    ],
    price: 11.7,
    rating: 3,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
    size: [2, 4, 8, 15],
  },
  {
    id: 9,
    title: "Macbook Air",
    description: [
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "4K Motion JPEG video (DCI cinema-type 4096 x 2160) at 30p or 24p; in-camera still frame grab* of 4K 8.8-Megapixel images; multiple video options include Full HD up to 60p, and HD up to 120p.",
    ],
    imgUrl: [
      {
        original: "../image/macbook5.png",
        thumbnail: "../image/macbook5.jpg",
      },
    ],
    price: 1111,
    rating: 5,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
    size: [2, 4, 8, 15],
  },

  {
    id: 10,
    title: "Camera",
    description: [
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "4K Motion JPEG video (DCI cinema-type 4096 x 2160) at 30p or 24p; in-camera still frame grab* of 4K 8.8-Megapixel images; multiple video options include Full HD up to 60p, and HD up to 120p.",
    ],
    imgUrl: [
      {
        original: "../image/camera3.png",
        thumbnail: "../image/camera3.png",
      },
    ],
    price: 11.7,
    rating: 5,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
    size: [2, 4, 8, 15],
  },
  {
    id: 11,
    title: "iWatch",
    description: [
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "4K Motion JPEG video (DCI cinema-type 4096 x 2160) at 30p or 24p; in-camera still frame grab* of 4K 8.8-Megapixel images; multiple video options include Full HD up to 60p, and HD up to 120p.",
    ],
    imgUrl: [
      {
        original: "../image/iwatch.jpg",
        thumbnail: "../image/iwatch.jpg",
      },
    ],
    price: 299,
    rating: 2,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
    size: [2, 4, 8, 15],
  },
  {
    id: 12,
    title: "Play game",
    description: [
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "4K Motion JPEG video (DCI cinema-type 4096 x 2160) at 30p or 24p; in-camera still frame grab* of 4K 8.8-Megapixel images; multiple video options include Full HD up to 60p, and HD up to 120p.",
    ],
    imgUrl: [
      {
        original: "https://blog.playstation.com/tachyon/2053/01/2bc04c3f8d548a11ef6b82562ffd8cebfdd32219-scaled.jpg?resize=1088%2C612&crop_strategy=smart&zoom=1.5",
        thumbnail: "https://blog.playstation.com/tachyon/2053/01/2bc04c3f8d548a11ef6b82562ffd8cebfdd32219-scaled.jpg?resize=1088%2C612&crop_strategy=smart&zoom=0.8",
      },
      {
        original: "https://blog.playstation.com/tachyon/2022/12/9807b7362d4d47f8a6669e2fbb8dcaf2d8737936-scaled.jpg?resize=1088%2C612&crop_strategy=smart&zoom=1.5",
        thumbnail: "https://blog.playstation.com/tachyon/2022/12/9807b7362d4d47f8a6669e2fbb8dcaf2d8737936-scaled.jpg?resize=1088%2C612&crop_strategy=smart&zoom=0.8",
      },
      {
        original: "",
        thumbnail: "",
      },
    ],
    price: 11.7,
    rating: 3.5,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
    size: [2, 4, 8, 15],
  },
  {
    id: 13,
    title: "Wireless headphones",
    description: [
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "4K Motion JPEG video (DCI cinema-type 4096 x 2160) at 30p or 24p; in-camera still frame grab* of 4K 8.8-Megapixel images; multiple video options include Full HD up to 60p, and HD up to 120p.",
    ],
    imgUrl: [
      {
        original: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX412?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420170758",
        thumbnail: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX412?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420170758",
      },
    ],
    price: 11.7,
    rating: 1,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
    size: [2, 4, 8, 15],
  },
  {
    id: 14,
    title: "Tablet as a laptop",
    description: [
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "4K Motion JPEG video (DCI cinema-type 4096 x 2160) at 30p or 24p; in-camera still frame grab* of 4K 8.8-Megapixel images; multiple video options include Full HD up to 60p, and HD up to 120p.",
    ],
    imgUrl: [
      {
        original: "https://media.takealot.com/covers_images/73526d01f0af47ab9742eb782201f909/s-zoom.file",
        thumbnail: "https://media.takealot.com/covers_images/73526d01f0af47ab9742eb782201f909/s-zoom.file",
      },
      {
        original: "https://media.takealot.com/covers_images/07917d409e2b4326a9a9769716501bf3/s-zoom.file",
        thumbnail: "https://media.takealot.com/covers_images/07917d409e2b4326a9a9769716501bf3/s-zoom.file",
      },
      {
        original: "https://media.takealot.com/covers_images/054d6cd4a8de459e999cd6f55186ae10/s-zoom.file",
        thumbnail: "https://media.takealot.com/covers_images/054d6cd4a8de459e999cd6f55186ae10/s-zoom.file",
      },
    ],
    price: 11.7,
    rating: 5,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
    size: [2, 4, 8, 15],
  },
  {
    id: 15,
    title: "Wireless headphones",
    description: [
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "4K Motion JPEG video (DCI cinema-type 4096 x 2160) at 30p or 24p; in-camera still frame grab* of 4K 8.8-Megapixel images; multiple video options include Full HD up to 60p, and HD up to 120p.",
    ],
    imgUrl: [
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/kSXO4Z6SHCbU6YtFvX6A",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/kSXO4Z6SHCbU6YtFvX6A",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/mCcQ05JvT3epCnvCQa2d",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/mCcQ05JvT3epCnvCQa2d",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/cKpW65AXTdyLXjlY0540",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/cKpW65AXTdyLXjlY0540",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:260,fit:crop/quality=value:65/auto_image/compress/ElYgKeLMQhaO1VAZJuwM",
        thumbnail:
          "https://media.graphassets.com/resize=w:260,fit:crop/quality=value:65/auto_image/compress/ElYgKeLMQhaO1VAZJuwM",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:760,fit:crop/quality=value:65/auto_image/compress/ElYgKeLMQhaO1VAZJuwM",
        thumbnail:
          "https://media.graphassets.com/resize=w:760,fit:crop/quality=value:65/auto_image/compress/ElYgKeLMQhaO1VAZJuwM",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/xteaaB9ASb26BChkc8xt",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/xteaaB9ASb26BChkc8xt",
      },
    ],
    price: 11.7,
    rating: 5,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
    size: [2, 4, 8, 15],
  },
  {
    id: 16,
    title: "Wireless headphones",
    description: [
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "4K Motion JPEG video (DCI cinema-type 4096 x 2160) at 30p or 24p; in-camera still frame grab* of 4K 8.8-Megapixel images; multiple video options include Full HD up to 60p, and HD up to 120p.",
    ],
    imgUrl: [
      {
        original: "https://images.philips.com/is/image/PhilipsConsumer/TAH4205BL_00-IMS-en_IQ?wid=420&hei=360&$jpglarge$",
        thumbnail: "https://images.philips.com/is/image/PhilipsConsumer/TAH4205BL_00-IMS-en_IQ?wid=420&hei=360&$jpglarge$",
      },
    ],
    price: 11.7,
    rating: 5,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
    size: [2, 4, 8, 15],
  },
  {
    id: 17,
    title: "iWatch Ultra 2040",
    description: [
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "New 30.4 Megapixel full-frame CMOS sensor for versatile shooting in nearly any light, with ISO range 100-32000; expandable up to 50-102400 (equivalent ISO).",
      "4K Motion JPEG video (DCI cinema-type 4096 x 2160) at 30p or 24p; in-camera still frame grab* of 4K 8.8-Megapixel images; multiple video options include Full HD up to 60p, and HD up to 120p.",
    ],
    imgUrl: [
      {
        original: "../image/iwatch.jpg",
        thumbnail: "../image/iwatch.jpg",
      },
    ],
    price: 11.7,
    rating: 5,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
    size: [2, 4, 8, 15],
  },
];

export default products;
