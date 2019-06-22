import React from "react";

const renderPageNumbers = props =>
  props.pageNumbers !== null &&
  props.pageNumbers.map(number => {
    return (
      <li
        key={number}
        id={number}
        className={number === props.currentPage ? "active" : ""}
        onClick={props.onClickPagination}
      >
        {number}
      </li>
    );
  });

export default renderPageNumbers;
