import React, { useState } from "react";
import exampleImage from './assets/image/lunch.jpg';

const ProductInput = () => {
  const [productName, setProductName] = useState("");

  const handleSearch = () => {
    // 검색 기능 구현
  };

  return (
    <div>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="상품명 입력란"
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};



const ProductTable = ({ currentItems }) => {

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    textAlign: 'left',
  };

  const thStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };

  const imageStyle = {
    width: '100px', // 이미지의 너비 고정
    height: '100px', // 이미지의 높이 고정
    objectFit: 'cover' // 이미지 비율 유지
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>번호</th>
          <th style={thStyle}>상품명</th>
          <th style={thStyle}>최저가</th>
          <th style={thStyle}>유효기간</th>
          <th style={thStyle}>입고날짜</th>
          <th style={thStyle}>제품사진</th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((item) => (
          <tr key={item.번호}>
            <td style={tdStyle}>{item.번호}</td>
            <td style={tdStyle}>{item.상품명}</td>
            <td style={tdStyle}>{item.최저가}</td>
            <td style={tdStyle}>{item.유효기간}</td>
            <td style={tdStyle}>{item.입고날짜}</td>
            <td style={tdStyle}><img
              src={exampleImage.제품사진}
              style={imageStyle}
              loading="lazy" // 이미지 로딩 최적화 (지연 로딩)
            />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const ProductButtons = ({ handleSort }) => {
  const buttonContainerStyle = {
    textAlign: 'right',
  };

  const buttonStyle = {
    padding: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '4px',
    background: 'none',
    margin: '0 4px',
  };

  return (
    <div style={buttonContainerStyle}>
      <button style={buttonStyle}>생성</button>
      <button style={buttonStyle}>수정</button>
      <button style={buttonStyle}>판매</button>
      <button style={buttonStyle}>삭제</button>
      <button style={buttonStyle} onClick={() => handleSort('asc')}>🔼</button>
      <button style={buttonStyle} onClick={() => handleSort('desc')}>🔽</button>
    </div>
  );
};

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const navStyle = {
    textAlign: 'center', // 가운데 정렬을 위한 스타일
    marginTop: '20px'
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'inline-block', // 가로로 표시되도록 설정
    padding: 0
  };

  const liStyle = {
    display: 'inline', // 항목들을 가로로 나열
    margin: '0 5px'
  };

  const buttonStyle = {
    padding: '5px 10px',
    border: '1px solid #ddd',
    backgroundColor: '#f8f8f8',
    cursor: 'pointer'
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        {currentPage !== 1 && (
          <li style={liStyle}>
            <button style={buttonStyle} onClick={() => paginate(currentPage - 1)}>왼쪽</button>
          </li>
        )}
        {[currentPage].map((number) => (
          <li key={number} style={liStyle}>
            <button
              style={buttonStyle}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
        {currentPage !== totalPages && (
          <li style={liStyle}>
            <button style={buttonStyle} onClick={() => paginate(currentPage + 1)}>오른쪽</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

const TotalCount = ({ count }) => {
  return <div>총 {count}건</div>;
};

const App = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // 아래 for 문을 사용하여 예시 데이터를 생성합니다.
  const tableData = [];
  for (let i = 1; i <= 100; i++) {
    tableData.push({
      번호: i,
      상품명: `상품 ${i}`,
      최저가: 1000 * i,
      유효기간: `2023-01-${i}`,
      입고날짜: `2023-01-${i}`,
    });
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (order) => {
    // 정렬 기능 구현 (오름차순 또는 내림차순)
  };



  return (
    <div>
      <ProductInput />
      <ProductButtons handleSort={handleSort} />
      <ProductTable currentItems={currentItems} />
      <TotalCount count={totalCount} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={tableData.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
