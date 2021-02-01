import React, { useState } from "react";
import styled from "styled-components";
import RestaurantHome from "../Restaurant/RestaurantHome";
import RestaurantMenu from "../Restaurant/RestaurantMenu";
import RestaurantReview from "../Restaurant/RestaurantReview";
import RestaurantPicture from "../Restaurant/RestaurantPicture";

const RestaurantTab = ({}) => {
  const [menuTab, setMenuTab] = useState("0");

  const toggleTab = (e) => {
    setMenuTab(e.getAttribute("value"));
    console.log(typeof e.getAttribute("value"));
  };
  return (
    <>
      <div className="menu" onClick={(e) => toggleTab(e.target)}>
        <span
          className={`menuTab ${menuTab === "0" ? "selected" : ""}`}
          value={0}
        >
          홈
        </span>
        <span
          className={`menuTab ${menuTab === "1" ? "selected" : ""}`}
          value={1}
        >
          메뉴
        </span>
        <span
          className={`menuTab ${menuTab === "2" ? "selected" : ""}`}
          value={2}
        >
          리뷰
        </span>
        <span
          className={`menuTab ${menuTab === "3" ? "selected" : ""}`}
          value={3}
        >
          사진
        </span>
      </div>
      <div className="contents">
        {menuTab === "0" ? <RestaurantHome></RestaurantHome> : null}
        {menuTab === "1" ? <RestaurantMenu></RestaurantMenu> : null}
        {menuTab === "2" ? <RestaurantReview></RestaurantReview> : null}
        {menuTab === "3" ? <RestaurantPicture></RestaurantPicture> : null}
      </div>
    </>
  );
};

export default RestaurantTab;
