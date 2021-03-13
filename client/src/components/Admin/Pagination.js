import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PageCounter = ({ total, pageLimit, activePage, setActivePage }) => {
  const totalPages = Math.ceil(total / pageLimit);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleBack = (e) => {
    e.preventDefault();
    setActivePage(parseInt(activePage) - 1);
  };

  const handleNext = (e) => {
    e.preventDefault();
    setActivePage(parseInt(activePage) + 1);
  };

  return (
    <nav aria-label="...">
      <Pagination
        className="pagination justify-content-end mb-0"
        listClassName="justify-content-end mb-0"
      >
        <PaginationItem className={activePage === 1 ? 'disabled' : ''}>
          <PaginationLink onClick={handleBack} tabIndex="-1">
            <FaChevronLeft />
            <span className="sr-only">Back</span>
          </PaginationLink>
        </PaginationItem>

        {pageNumbers.map((pageNum) => {
          return (
            <PaginationItem
              key={pageNum}
              className={pageNum === activePage ? 'active' : ''}
            >
              <PaginationLink onClick={() => setActivePage(pageNum)}>
                {pageNum}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem
          className={activePage * pageLimit >= total ? 'disabled' : ''}
        >
          <PaginationLink onClick={handleNext}>
            <FaChevronRight />
            <span className="sr-only">Next</span>
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </nav>
  );
};

export default PageCounter;
