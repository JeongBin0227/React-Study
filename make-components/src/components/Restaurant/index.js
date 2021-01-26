import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantTab from "./RestaurantTab";
import RestaurantKakaoMap from "./RestaurantKakaoMap";

const NaverMap = styled.div`
  width:150px
  height: 150px;
  background-color: red;
  padding: 10px;
  border: 2px solid white;
`;

const index = () => {
  return (
    <div className="restaurant">
      <div>
        <SearchBar></SearchBar>
        <RestaurantInfo></RestaurantInfo>
        <RestaurantTab></RestaurantTab>
        <RestaurantKakaoMap></RestaurantKakaoMap>
      </div>
      <NaverMap className="naverMap"></NaverMap>
    </div>
  );
};

export default index;
