import React, { useContext } from "react";
import "./SelectPage.css";
import { GlobalContext } from "../../context/GlobalState";
import { SET_PAGE } from "../../reducers/CharReducer";
const SelectPage = () => {
  const { state, dispatch, page } = useContext(GlobalContext);
  const info = state.info;
  console.log("info", info, page);

  const handlePageChange = (type) => {
    let newPage;
    if (type === "prev" && page > 1) {
      newPage = page - 1;
    } else if (type === "next") {
      if (page === info.pages) return;
      newPage = page + 1;
    }
    dispatch({ type: SET_PAGE, payload: newPage });
  };
  return (
    <div className="select-page">
      <div className="pagination">
        <span onClick={() => handlePageChange("prev")}>{"<"}</span>
        <span>{page}</span>
        <span onClick={() => handlePageChange("next")}>{">"}</span>
      </div>
    </div>
  );
};

export default SelectPage;
