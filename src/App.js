import React, { useState } from "react";

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
  return (
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>상품명</th>
          <th>최저가</th>
          <th>유효기간</th>
          <th>입고날짜</th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((item) => (
          <tr key={item.번호}>
            <td>{item.번호}</td>
            <td>{item.상품명}</td>
            <td>{item.최저가}</td>
            <td>{item.유효기간}</td>
            <td>{item.입고날짜}</td>
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

  return (
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', padding: 0 }}>
        {currentPage !== 1 && (
          <li>
            <button onClick={() => paginate(currentPage - 1)}> 왼쪽</button>
          </li>
        )}
        {[currentPage].map((number) => (
          <li key={number} style={{ margin: '0 5px' }}>
            <button
              onClick={() => paginate(number)}
              style={{ fontWeight: 'bold' }}
            >
              {number}
            </button>
          </li>
        ))}
        {currentPage !== totalPages && (
          <li>
            <button onClick={() => paginate(currentPage + 1)}>오른쪽</button>
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
