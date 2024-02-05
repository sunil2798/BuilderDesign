import {
  Typography,
} from "@material-ui/core";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./multiCarasoul.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const data = [
  {
    image:
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    productName: "Keyboard h548",
    itemAvailabal: "20 item",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    productName: "Laptop",
    itemAvailabal: "10 item",
  },
  {
    image:
      "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    productName: "Wallet",
    itemAvailabal: "30 item",
  },
  {
    image:
      "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    productName: "Bag",
    itemAvailabal: "15 item",
  },
  {
    image:
      "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    productName: "Samsung S24",
    itemAvailabal: "27 item",
  },
  {
    image:
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    productName: "Camera D750",
    itemAvailabal: "24 item",
  },
  {
    image:
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    productName: "Keyboard h548",
    itemAvailabal: "20 item",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    productName: "Laptop",
    itemAvailabal: "10 item",
  },
  {
    image:
      "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    productName: "Wallet",
    itemAvailabal: "30 item",
  },
  {
    image:
      "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    productName: "Bag",
    itemAvailabal: "15 item",
  },
  {
    image:
      "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    productName: "Samsung S24",
    itemAvailabal: "27 item",
  },
  {
    image:
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    productName: "Camera D750",
    itemAvailabal: "24 item",
  },
  {
    image:
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    productName: "Keyboard h548",
    itemAvailabal: "20 item",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    productName: "Laptop",
    itemAvailabal: "10 item",
  },
  {
    image:
      "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    productName: "Wallet",
    itemAvailabal: "30 item",
  },
  {
    image:
      "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    productName: "Bag",
    itemAvailabal: "15 item",
  },
  {
    image:
      "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    productName: "Samsung S24",
    itemAvailabal: "27 item",
  },
  {
    image:
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    productName: "Camera D750",
    itemAvailabal: "24 item",
  },
  {
    image:
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    productName: "Keyboard h548",
    itemAvailabal: "20 item",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    productName: "Laptop",
    itemAvailabal: "10 item",
  },
  {
    image:
      "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    productName: "Wallet",
    itemAvailabal: "30 item",
  },
  {
    image:
      "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    productName: "Bag",
    itemAvailabal: "15 item",
  },
  {
    image:
      "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    productName: "Samsung S24",
    itemAvailabal: "27 item",
  },
  {
    image:
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    productName: "Camera D750",
    itemAvailabal: "24 item",
  },
];

export default function MultiCarasoul() {
  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        centerMode={true}
        // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        // infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        transitionDuration={800}
        focusOnSelect={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((value, id) => (
          <div
            key={id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "156px",
              height: "194px",
              borderRadius: "5px",
              backgroundColor: "#FEEFEA",
              padding: "19px 28px 19px 28px",
            }}
          >
            <img
              src={value.image}
              alt="productIcon"
              style={{ height: "93px", width: "93px" }}
            />
            <Typography style={{ whiteSpace: "nowrap", textWrap: "nowrap" }}>
              {value.productName}
            </Typography>
            <Typography>{value.itemAvailabal}</Typography>
          </div>
        ))}
      </Carousel>
    </>
  );
}
