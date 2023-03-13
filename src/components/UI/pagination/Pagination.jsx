import React from "react";
import classes from "./Pagination.module.css";

const Pagination = ({ pagesArray, changePage, page }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      {pagesArray.map((num) => {
        return (
          <span
            onClick={() => {
              changePage(num);
            }}
            className={
              page === num
                ? [classes.page, classes.pageCurrent].join(" ")
                : classes.page
            }
            key={num}
          >
            {num}
          </span>
        );
      })}
    </div>
  );
};
export default Pagination;
