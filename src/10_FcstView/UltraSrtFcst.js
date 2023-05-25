import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import xy from "./getxy.json";
import getcode from "./getcode.json";

const UltraSrtFcst = () => {
    const [selectedType, setSelectedType] = useState("");
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const date = queryParams.get("date");
    const cityCode = queryParams.get("city");

    const selectedCity = xy.find((item) => item["행정구역코드"] === Number(cityCode))?.["1단계"];

    const xloc = xy.find((item) => item["1단계"] === selectedCity)?.["격자 X"];
    const yloc = xy.find((item) => item["1단계"] === selectedCity)?.["격자 Y"];

    const [forecastData, setForecastData] = useState([]);

    const code = getcode
        .filter((item) => item["예보구분"] === "초단기예보")
        .map((item) => ({
            value: item["항목값"],
            label: item["항목명"],
        }));

    const generateBaseTime = () => {
        const baseTimes = [];
        for (let hour = 6; hour <= 24; hour++) {
            baseTimes.push(`${hour.toString().padStart(2, "0")}00`);
        }
        return baseTimes;
    };

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            const baseTimes = generateBaseTime();
            const formattedData = [];

            for (let i = 0; i < baseTimes.length; i++) {
                const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=qM4okcjM%2BI0QuL7Ij3ga3WGbLeimcGOVHaIZM4yqK3xPeBrL1v43dW52%2FNMkHmqGQhqNHh%2BWQl4Rw%2B7WJ6VRwQ%3D%3D&numOfRows=60&pageNo=1&base_date=${date.replace(/-/g, "")}&base_time=${baseTimes[i]}&nx=${xloc}&ny=${yloc}`;

                const response = await fetch(url);
                const xmlResponse = await response.text();

                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlResponse, "text/xml");

                const items = xmlDoc.getElementsByTagName("item");
                const itemsData = Array.from(items).map((item) => {
                    const obsrValue = item.getElementsByTagName("obsrValue")[0]?.textContent; // 값 가져오기
                    return {
                        category: item.getElementsByTagName("category")[0]?.textContent,
                        baseDate: item.getElementsByTagName("baseDate")[0]?.textContent,
                        baseTime: item.getElementsByTagName("baseTime")[0]?.textContent,
                        fcstValue: Number(obsrValue), // obsrValue를 fcstValue로 수정
                    };
                });

                formattedData.push(...itemsData);
            }

            setForecastData(formattedData);
        };

        fetchData();

    }, [date, xloc, yloc]);

    return (
        <>
            <h1>초단기예보</h1>
            <p>
                {date} {selectedCity}의 초단기예보
            </p>
            <select value={selectedType} onChange={handleTypeChange}>
                <option value="">선택</option>
                {code.map((item) => (
                    <option value={item.value} key={item.value}>
                        {item.label}
                    </option>
                ))}
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
                    {selectedType !== "" ? (
                        forecastData
                            .filter((item) => item.category === selectedType)
                            .map((item, index) => {
                                const formattedTime = `${item.baseTime.slice(0, 2)}:${item.baseTime.slice(2)}`;
                                const selectedItem = code.find((codeItem) => codeItem.value === item.category);
                                const itemLabel = selectedItem ? selectedItem.label : ""; // 항목명 가져오기
                                const itemValue = selectedItem ? selectedItem.value : ""; // 항목값 가져오기
                                let formattedValue = "";
                                if (item.fcstValue !== undefined) {
                                    if (item.category === "T1H") {
                                        formattedValue = `${item.fcstValue} ºC`;
                                    } else if (item.category === "REH") {
                                        formattedValue = `${item.fcstValue} %`;
                                    } else if (item.category === "RN1") {
                                        formattedValue = `${item.fcstValue} mm`;
                                    } else if (item.category === "UUU" || item.category === "VVV" || item.category === "WSD") {
                                        formattedValue = `${item.fcstValue} m/s`;
                                    } else if (item.category === "VEC") {
                                        formattedValue = `${item.fcstValue} deg`;
                                    }
                                    else {
                                        formattedValue = item.fcstValue;
                                    }
                                }
                                return (
                                    <tr key={index}>
                                        <td>{itemLabel} ({itemValue})</td>
                                        <td>{item.baseDate}</td>
                                        <td>{formattedTime}</td>
                                        <td>{formattedValue}</td>
                                    </tr>
                                );
                            })
                    ) : (
                        <tr>
                            <td colSpan="4">항목을 선택하세요.</td>
                        </tr>
                    )}

                </tbody>
            </table>
        </>
    );
};

export default UltraSrtFcst;
