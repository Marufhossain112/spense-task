import React from "react";

const PropertyRules = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="font-bold text-xl">Property Rules</h2>
      <p>Check-in: 12PM Check-out: 12PM</p>
      <div className="grid grid-cols-2">
        <div>
          <ul className="mt-2 ml-4">
            <li>- Guests with arms are not allowed</li>
            <li>- Guests with arms are not allowed</li>
            <li>- Guests with arms are not allowed</li>
            <li>- Guests who are below 18 years old are not allowed</li>
            <li>- Guests with arms are not allowed</li>
            <li>- PAN card and Non-Govt. card are not accepted </li>
            <li>- NID, Govt. Id and driving license are accepted</li>
            <li>- Outside food is not allowed</li>
            <li>- Drugs are not allowed</li>
            <li>- Smoking are not allowed</li>
          </ul>
        </div>
        <div>
          <ul className="mt-2 ml-4">
            <li>- Pets are not allowed</li>
            <li>- Outside food is not allowed</li>
            <li>- Outside parties are not allowed</li>
            <li>- Drugs are not allowed</li>
            <li>- Smoking are not allowed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyRules;
