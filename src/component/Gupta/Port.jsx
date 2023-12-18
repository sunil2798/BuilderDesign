import React, { Component } from "react";
import "./port.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";

export default class Port extends Component {
  constructor() {
    super();
    this.state = {
      expandedIndex: -1,
      
    };
  }

  handleTextShow = (index) => {
    this.setState({ expandedIndex: index });
  };

  user = [
    {
      img: img1,
      heading: "Into the forest: Katy Evening Dress",
      dateOfEvent: "Fashion- January 11, 2020",
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesettin , industrbut also the leap into electronic typesetting  essentially unchanged.",
    },
    {
      img: img2,
      heading: "Into the forest: Katy Evening Dress",
      dateOfEvent: "Fashion- January 11, 2020",
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesettin , industrbut also the leap into electronic typesetting  essentially unchanged.",
    },
    {
      img: img3,
      heading: "Into the forest: Katy Evening Dress",
      dateOfEvent: "Fashion- January 11, 2020",
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesettin , industrbut also the leap into electronic typesetting  essentially unchanged.",
    },
    {
      img: img1,
      heading: "Into the forest: Katy Evening Dress",
      dateOfEvent: "Fashion- January 11, 2020",
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesettin , industrbut also the leap into electronic typesetting  essentially unchanged.",
    },
  ]; 

  render() {
    return (
      <>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div className="grid">
            {this.user.map((eveInfo, id) => (
              <>
                <div
                  key={id}
                  style={{ flexDirection: "column", width: "300px " }}
                >
                  <img
                    alt="loading"
                    src={eveInfo.img}
                    style={{ width: "300px" }}
                  />
                  <h4>{eveInfo.heading}</h4>
                  <p>{eveInfo.dateOfEvent} </p>
                  {this.state.expandedIndex === id ? (
                    <p>{eveInfo.describe}</p>
                  ) : (
                    <p
                      style={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {eveInfo.describe}
                    </p>
                  )}
                  <p
                    onClick={() => this.handleTextShow(id)}
                    style={{ fontWeight: 500 }}
                  >
                    Read More
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    );
  }
}
