import React from "react";
import "./GalleryDetails.css";

const GalleryDetails = () => {
  return (
    <div className="max-w-5xl mx-auto mt-5">
      {/* Details */}
      <div>
        <div className="flex justify-between">
          <div>
            {" "}
            <h2 className="font-bold text-xl">Hotel Vishal @ Airport</h2>
            <div className="flex">
              {" "}
              <p className="mr-2 mt-2 mb-2">
                104/2/2,National Highway 8,Mahipalpur,New <br />
                Delhi,110037 New Delhi ,India
              </p>{" "}
              <a href="#" className="mt-2 text-blue-500 underline">
                View Map
              </a>
            </div>
            <p className="font-bold">+91-7654564545,8197344682</p>
          </div>
          <div>
            {" "}
            {/* map */}
            <div>
              {/* <GoogleMap></GoogleMap> */}
              {
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                      width="161"
                      height="130"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    ></iframe>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
        <ul className="flex features space-x-10 ml-7 my-3 font-bold">
          <li>Free Parking</li>
          <li>Conference Room</li>
          <li>ATM</li>
          <li>Conference Room</li>
          <li>Conference Room</li>
        </ul>
        <article>
          Located in New Delhi,5.5km from Rajshrapati Bhawan, Hotel Vishal @
          Airport provides accommodation with a resturant, free private parking
          and a fitness centre. This Great restaurant offers an ATM, a
          Conference service and free WiFi. The accommodation features a 24-hour
          front-desk, room service and currency exchange for Quests.
        </article>
      </div>

      <hr className=" " />
    </div>
  );
};

export default GalleryDetails;
