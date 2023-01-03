import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import GalleryDetails from "../GalleryDetails/GalleryDetails";

import Navbar from "../Navbar/Navbar";
import PropertyRules from "../PropertyRules/PropertyRules";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Gallery></Gallery>
      <GalleryDetails></GalleryDetails>
      <PropertyRules></PropertyRules>
    </div>
  );
};

export default Home;
