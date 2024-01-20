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

const ProductTable = () => {
  // 데이터 관리 및 페이징 구현은 필요에 따라 추가 구현

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
      <tbody>{/* 테이블 데이터 매핑 및 체크박스 구현 */}</tbody>
    </table>
  );
};

const ProductButtons = () => {
  const handleSort = (order) => {
    // 정렬 기능 구현 (오름차순 또는 내림차순)
  };
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

  // 생성, 수정, 판매, 삭제 등의 버튼에 대한 클릭 이벤트 및 처리 추가
  

  return (
    <div style={buttonContainerStyle}>
      <button style={buttonStyle}>생성</button>
      <button style={buttonStyle}>수정</button>
      <button style={buttonStyle}>판매</button>
      <button style={buttonStyle}>삭제</button>
      <button style={buttonStyle} onClick={() => handleSort('asc')}>🔼 </button>
      <button style={buttonStyle} onClick={() => handleSort('desc')}>🔽 </button>
    </div>
  );
  };


const Pagination = () => {
  // 페이징 구현

  return <div>{/* 페이지 번호 및 이전/다음 버튼 등 추가 */}</div>;
};

const TotalCount = ({ count }) => {
  return <div>총 {count}건</div>;
};

const App = () => {
  const [totalCount, setTotalCount] = useState(0);

  return (
    <div>
      <ProductInput />
      <ProductButtons />
      <ProductTable />
      <TotalCount count={totalCount} />
      <Pagination />
    </div>
  );
};

export default App;