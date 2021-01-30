import React from "react";
import SVG from "../../../src/assets/search.svg";

const SearchBar = () => {
  return (
    <div className="RestaurantSearch">
      <div class="search_wrap">
        <div class="search_box">
          {/* <button type="button" class="button_search"> 검색 </button> */}
          <img src={SVG} class="search-icon" alt="search"></img>
          <div class="input_box">
            {/* <label class="label_search ng-star-inserted" for="input_search1611765486961"> 장소, 버스, 지하철, 도로 검색 </label> */}
            {/* <input type="text" autocomplete="off" autofocus="" class="input_search ng-pristine ng-valid ng-touched" id="input_search1611765486961"></input> */}
            <input type="text" placeholder="Search.."></input>
          </div>
        </div>
      </div>
    </div>
  );
};

 /* <div className="RestaurantSearch">
      <input type="text" placeholder="Search.."></input>
      <img src={SVG} class="search-icon" alt="search"></img>
    </div> */
export default SearchBar;
