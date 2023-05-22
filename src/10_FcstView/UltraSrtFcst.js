import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import xy from "./getxy.json";
import getcode from "./getcode.json";

const UltraSrtFcst = () => {
    const [selectedType, setSelectedType] = useState("");
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const date = queryParams.get("date");
    const cityCode = queryParams.get("city");
    const xloc = queryParams.get("x");
    const yloc = queryParams.get("y");

    // "1단계"에 해당하는 도시 이름 가져오기
    const selectedCity = xy.find((item) => item["행정구역코드"] === Number(cityCode))?.["1단계"];

    const x = xy.find((item) => item["1단계"] === selectedCity)?.["격자 X"];
    const y = xy.find((item) => item["1단계"] === selectedCity)?.["격자 Y"];

    const [forecastData, setForecastData] = useState([]);

    const code = getcode
        .filter((item) => item["예보구분"] === "단기예보")
        .map((item) => (
            <option value={item["항목값"]} key={item["항목값"]}>
                {item["항목명"]}
            </option>
        ));

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://apis.data.go.kr/${cityCode}/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=qM4okcjM%2BI0QuL7Ij3ga3WGbLeimcGOVHaIZM4yqK3xPeBrL1v43dW52%2FNMkHmqGQhqNHh%2BWQl4Rw%2B7WJ6VRwQ%3D%3D&numOfRows=10&dataType=JSON&pageNo=1&base_date=${date}&base_time=0600&nx=${x}&ny=${y}`;
            
            // 비동기 요청 코드 작성
            const response = await fetch(url);
            const data = await response.json();

            // 데이터 가공 및 상태 업데이트
            const forecastItems = data?.response.body.items.item;
            if (forecastItems) {
                const formattedData = forecastItems.map((item) => ({
                    category: item.category,
                    baseDate: item.baseDate,
                    baseTime: item.baseTime,
                    obsrValue: item.obsrValue,
                }));
                setForecastData(formattedData);
            }
        };

        fetchData();
    }, [cityCode, date, x, y]);

    return (
        <>
            <h1>초단기예보</h1>
            <p>
                {date} {selectedCity}의 초단기예보
            </p>
            <select value={selectedType} onChange={handleTypeChange}>
                <option value="">선택</option>
                {code}
            </select>
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
                    {forecastData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.category}</td>
                            <td>{item.baseDate}</td>
                            <td>{item.baseTime}</td>
                            <td>{item.obsrValue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default UltraSrtFcst;
