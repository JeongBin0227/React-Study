import React, { useState } from "react";
import styled from "styled-components";

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
      <div className="contents">{<span>{menuTab}</span>}</div>
    </>
  );
};

export default RestaurantTab;
