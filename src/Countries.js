import React from "react";
export default function Countries(props) {
  return (
    <div className="Countries">
      <ul>
        {props.countries.map(function (country, index) {
          return (
            <li key={index}>
              {" "}
              The captial city of {country.name} is {country.captial}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
