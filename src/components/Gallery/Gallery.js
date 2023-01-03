import React from "react";
import "./Gallery.css";
import gallery1 from "../../images/gallery-1.jpeg";
import gallery2 from "../../images/gallery-2.jpeg";
import gallery3 from "../../images/gallery-3.jpeg";
import gallery4 from "../../images/gallery-4.jpeg";
import gallery5 from "../../images/gallery-5.jpeg";
const Gallery = () => {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 max-w-5xl mx-auto">
      <div>
        <img className="rounded-md" src={gallery1} alt="" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img  className="child-img rounded-md" src={gallery2} alt="" />
        </div>
        <div>
          <img className="child-img rounded-md"  src={gallery3} alt="" />
        </div>
        <div>
          <img  className="child-img rounded-md" src={gallery4} alt="" />
        </div>
        <div>
          <img className="child-img rounded-md"  src={gallery5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
