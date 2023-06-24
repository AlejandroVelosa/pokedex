import { useState } from 'react';
import './styles/Pagination.css'

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const maxVisiblePages = 3;
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);
    const visiblePages = Math.min(totalPages, maxVisiblePages);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        onPageChange(pageNumber);
    };

    let startPage = 1;
    if (currentPage > halfVisiblePages) {
        startPage = currentPage - halfVisiblePages;
    }

    let endPage = startPage + visiblePages - 1;
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - visiblePages + 1);
    }

    const pageNumbers = Array.from({ length: visiblePages }, (_, index) => startPage + index);

    return (
        <div className="pagination">
            <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                Previous
            </button>

            {pageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={currentPage === pageNumber ? 'active' : ''}
                >
                    {pageNumber}
                </button>
            ))}

            <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
