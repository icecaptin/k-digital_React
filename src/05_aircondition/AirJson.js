import React from 'react';
import aircondition from "../05_aircondition/dataFrcst.json";

const AirJson = ({ selectedDate }) => {
  let dateData = {};
  if (selectedDate) {
    dateData = aircondition[selectedDate] || {};
  }

  const locations = [
    "서울", "인천", "경기북부", "경기남부", "강원영서",
    "강원영동", "대전", "세종", "충남", "충북",
    "광주", "전북", "전남", "부산", "대구",
    "울산", "경북", "경남", "제주"
  ];

  const getValuesByLocation = (location) => {
    const value = dateData[location];
    return value === "낮음" || value === "높음" ? value : "";
  };

  return (
    <table>
      <tbody>
        <tr>
          <th></th>
          {locations.map((location) => {
            return (
              <th key={location}>{location}</th>
            );
          })}
        </tr>
        {Object.keys(dateData).length > 0 ? (
          <tr>
            <td>공기질</td>
            {locations.map((location) => {
              const value = getValuesByLocation(location);
              return (
                <td key={`${location}value`}>{value}</td>
              );
            })}
          </tr>
        ) : (
          <tr>
            <td colSpan={locations.length + 1}>데이터가 없습니다.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default AirJson;
