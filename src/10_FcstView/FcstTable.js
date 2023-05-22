import React from 'react';

const FcstTable = ({ url }) => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">항목명</th>
          <th scope="col">예측일자</th>
          <th scope="col">예측시간</th>
          <th scope="col">예보</th>
        </tr>
      </thead>
      <tbody>
        {url.map((item, index) => (
          <tr key={index}>
            <td>{item.category}</td>
            <td>{item.baseDate}</td>
            <td>{item.baseTime}</td>
            <td>{item.obsrValue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FcstTable;
