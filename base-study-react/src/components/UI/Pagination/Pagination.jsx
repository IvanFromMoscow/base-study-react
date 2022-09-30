import React from 'react'
import styles from './Pagination.module.css';

const Pagination = ({currentPage, setPage, pages}) => {

  return (
    <div>
        <div className={styles.page__wrapper}>
            {
              pages.map( page => 
                <span 
                  onClick={(event) => setPage(+event.target.textContent)}
                  className={currentPage === page ? [styles.page, styles.page__active].join(' ') : styles.page}
                  key={page}
                >
                    {page}
                </span>
              )
            }
          </div>
    </div>
  )
}

export default Pagination