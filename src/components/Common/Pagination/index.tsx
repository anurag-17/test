import React from "react";
import ReactPaginate from "react-paginate";
import { Wrapper } from "./style";

interface Props {
  pageCount?: number | any;
  handlePageClick?: (e: any, data: any) => void;
}

const Pagination = ({ pageCount, handlePageClick }: Props) => {
  return (
    <Wrapper>
      <ReactPaginate
        pageCount={pageCount}
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        onPageChange={()=>handlePageClick}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </Wrapper>
  );
};

export default Pagination;
