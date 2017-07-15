import React from 'react';
import Pagination from 'material-ui-pagination';
import './candidates_pagination.css';

const CandidatesPagination = ({ total, display, current }) =>
  <div className="pagination">
    <Pagination
      total={total}
      current={current}
      display={display}
    />
  </div>;

  export default CandidatesPagination;
