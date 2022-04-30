import React, { useState, useEffect } from "react";
import { Carousel, Spin } from "antd";

const contentStyle = {
  height: "600px",
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselView = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 5000);
  }, []);
  return (
    <>
      <Carousel autoplay effect="fade">
        {loader === false && <Spin />}

        <div>
          <img src={"https://i.ibb.co/KzcHWsV/1.jpg"} style={contentStyle} />
        </div>
        <div>
          <img src={"https://i.ibb.co/1vwrsXR/2.jpg"} style={contentStyle} />
        </div>
        <div>
          <img src={"https://i.ibb.co/xfBtRcf/3.jpg"} style={contentStyle} />
        </div>
        <div>
          <img src={"https://i.ibb.co/QH0shpV/4.jpg"} style={contentStyle} />
        </div>
      </Carousel>
    </>
  );
};

export default CarouselView;
