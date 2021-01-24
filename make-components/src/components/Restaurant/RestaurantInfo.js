import React from "react";
import styled from "styled-components";

const RestaurantInfo = ({}) => {
  return (
    <div className="restaurantTitle">
      <div className="main">
        <a>
          <h1 className="title">라이스&포테이토</h1>
        </a>
        <span className="subjectTitle">한식</span>
      </div>
      <div className="sub">
        <span>김치철판볶음밥 등 최고의 맛집</span>
        <span>김치철판볶음밥 등 최고의 맛집1</span>
      </div>
    </div>
  );
};

export default RestaurantInfo;
