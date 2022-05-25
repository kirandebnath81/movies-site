import React from "react";

import ReactPaginate from "react-paginate";

//style
import { Box } from "./style/Pagination.styles";

//reux
import { useDispatch } from "react-redux";
import { setPaginate } from "../features/pagination/PaginationSlice";

export const Pagination = ({ totalPages }) => {
  const dispatch = useDispatch();
  const handlePageClick = ({ selected }) => {
    dispatch(setPaginate(selected + 1));
    window.scroll(0, 0);
  };

  return (
    <Box>
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        pageCount={totalPages < 500 ? totalPages : 500}
        onPageChange={handlePageClick}
        containerClassName="paginateContaner"
        activeClassName="active"
      />
    </Box>
  );
};
