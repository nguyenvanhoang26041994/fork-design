import { useState, useCallback, useMemo } from 'react';

const calMaxPage = (total, pageSize) => Math.ceil(total/pageSize);

// page are number
const isValidPage = (page, total, pageSize) => {
  if (page < 1 || page > calMaxPage(total, pageSize)) {
    return false;
  }
  return true;
};

const usePagination = function(_defaultProps) {
  const defaultProps = useMemo(() => ({
    total: 0,
    currentPage: 1,
    pageSize: 10,
    max: 5,
    ..._defaultProps,
  }), []);

  const [currentPage, setCurrentPage] = useState(defaultProps.currentPage);
  const [total, setTotal] = useState(defaultProps.total);
  const [pageSize, setPageSize] = useState(defaultProps.pageSize);
  const [max, setMax] = useState(defaultProps.max);

  const startPage = useMemo(() => (Math.ceil(currentPage / max) - 1) * max + 1, [max, currentPage]);
  const endPage = useMemo(() => {
    const _endPage = (Math.ceil(currentPage / max) - 1) * max + max;
    const maxPosiblePage = Math.ceil(total / pageSize);
    return maxPosiblePage < _endPage ? maxPosiblePage : _endPage;
  }, [max, total, pageSize, currentPage]);

  const isFirstPage = useMemo(() => currentPage === 1, [currentPage]);
  const isLastPage = useMemo(() => currentPage === calMaxPage(total, pageSize), [currentPage, total, pageSize]);

  const onChange = useCallback((page) => {
    setCurrentPage((prevPage) => {
      if (isValidPage(page, total, pageSize)) {
        return page;
      }

      return prevPage;
    });
  }, [setCurrentPage, total, pageSize]);

  const goNext = useCallback(() => {
    setCurrentPage((prevPage) => {
      if (isValidPage(prevPage + 1, total, pageSize)) {
        return prevPage + 1;
      }

      return prevPage;
    });
  }, [setCurrentPage, total, pageSize]);

  const goPrev = useCallback(() => {
    setCurrentPage((prevPage) => {
      if (isValidPage(prevPage - 1, total, pageSize)) {
        return prevPage - 1;
      }

      return prevPage;
    });
  }, [setCurrentPage, total, pageSize]);

  return [
    {
      currentPage,
      startPage,
      endPage,
      pageSize,
      total,
      max,
      isFirstPage,
      isLastPage,
      onChange,
      goNext,
      goPrev,
    },
    {
      setCurrentPage,
      setTotal,
      setPageSize,
      setMax,
    },
  ];
};

export default usePagination;
