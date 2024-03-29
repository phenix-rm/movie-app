import React from 'react'
import { Pagination } from 'antd'

import './AppPagination.scss'

const AppPagination = ({ totalPage, currentPage, pageChange }) => {
  return (
    <Pagination
      className="pagination"
      size="small"
      total={totalPage}
      defaultCurrent={1}
      current={currentPage}
      onChange={pageChange}
    />
  )
}

export default AppPagination
