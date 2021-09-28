import React from 'react';
import { useAuth } from '../context/auth'; // 取得page, setPage, totalPage, setTotalPage資料

function PagesBtn(props) {
  const { page, setPage, totalPage } = useAuth(); // 取得page, setPage, totalPage, setTotalPage資料

  const getPages = () => {
    let pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <div className="btn-group mr-2" role="group" aria-label="Second group">
          <button
            type="button"
            className="btn btn-primary"
            key={i}
            style={{ backgroundColor: page === i ? '#24936e' : '' }}
            onClick={(e) => {
              console.log('i', i);
              setPage(i);
            }}
          >
            {i}
          </button>
        </div>
      );
    }
    return pages;
  };

  return (
    <>
      <div
        className="btn-toolbar justify-content-center mountain_btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group mr-2" role="group" aria-label="Third group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setPage(1);
            }}
          >
            |&lt;
          </button>
        </div>
        <div className="btn-group mr-2" role="group" aria-label="First group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => {
              if (page == 1) {
                e.preventDefault();
                // return;
              } else {
                setPage(page - 1);
              }
            }}
          >
            &lt;
          </button>
        </div>
        {getPages()}
        <div className="btn-group mr-2" role="group" aria-label="Third group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => {
              if (page === totalPage) {
                e.preventDefault();
              } else {
                setPage(page + 1);
              }
            }}
          >
            &gt;
          </button>
        </div>
        <div className="btn-group" role="group" aria-label="Third group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setPage(totalPage);
            }}
          >
            &gt;|
          </button>
        </div>
      </div>
    </>
  );
}

export default PagesBtn;
