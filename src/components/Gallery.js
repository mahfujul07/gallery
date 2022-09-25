import React, { useState } from "react";
import "./gallery.css";
import CloseIcon from "@material-ui/icons/Close";

import Img1 from "../img/portfolio-1.jpg";
import Img2 from "../img/portfolio-2.jpg";
import Img3 from "../img/portfolio-3.jpg";
import Img4 from "../img/portfolio-4.jpg";
import Img5 from "../img/portfolio-5.jpg";
import Img6 from "../img/portfolio-6.jpg";
import Img7 from "../img/portfolio-7.jpg";
import Img8 from "../img/portfolio-8.jpg";
import Img9 from "../img/portfolio-9.jpg";
import Img10 from "../img/portfolio-10.jpg";
import Img11 from "../img/portfolio-11.jpg";
import Img12 from "../img/portfolio-12.jpg";
import Img16 from "../img/portfolio-16.jpg";
import Img17 from "../img/portfolio-17.jpg";
import Img18 from "../img/portfolio-18.jpg";
import Img19 from "../img/portfolio-19.jpg";
import Img20 from "../img/portfolio-20.jpg";
import Img21 from "../img/portfolio-21.jpg";
import Img22 from "../img/portfolio-22.jpg";

const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 16,
            imgSrc: Img16,
        },
        {
            id: 17,
            imgSrc: Img17,
        },
        {
            id: 18,
            imgSrc: Img18,
        },
        {
            id: 19,
            imgSrc: Img19,
        },
        {
            id: 20,
            imgSrc: Img20,
        },
        {
            id: 21,
            imgSrc: Img21,
        },
        {

            id: 22,
            imgSrc: Img22,
        },

    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

  return (
    <>
    <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="temp img" />
        <CloseIcon onClick={() => setModel(false)} />
    </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
              <img className="w-full" src={item.imgSrc} alt="gallery" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
