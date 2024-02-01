import React from "react";

const NavigationButtons = ({ page, setPage, maxPageCount }) => {
  return (
    <div className=" d-flex justify-content-between my-5">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary "
      >
        {"< Geri"}
      </button>
      <span>{page}</span>
      <button
        disabled={page === maxPageCount}
        onClick={() => setPage(page + 1)}
        className="btn btn-primary "
      >
        {"İleri >"}
      </button>
    </div>
  );
};

export default NavigationButtons;
