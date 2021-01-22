import React from "react";
import styled from "styled-components";

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
        <div className="menu">
          <div>홈</div>
          <div>메뉴</div>
          <div>리뷰</div>
          <div>사진</div>
        </div>
      </div>
      <NaverMap className="naverMap"></NaverMap>
    </div>
  );
};

export default index;
