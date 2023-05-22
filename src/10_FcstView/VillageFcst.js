import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import FcstTable from './FcstTable';
import xy from "./getxy.json";
import getcode from "./getcode.json";

const VillageFcst = () => {
    const [selectedType, setSelectedType] = useState("");
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const date = queryParams.get("date");
    const cityCode = queryParams.get("city");

    const code = getcode
        .filter((item) => item["예보구분"] === "단기예보")
        .map((item) => (
            <option value={item["항목값"]} key={item["항목값"]}>
                {item["항목명"]}
            </option>
        ));


    const handleCityChange = (e) => {
        setSelectedType(e.target.value);
    };

    // "1단계"에 해당하는 도시 이름 가져오기
    const selectedCity = xy.find((item) => item["행정구역코드"] === Number(cityCode))?.["1단계"];

    return (
        <>
            <h1>단기예보</h1>
            <p>
                {date} {selectedCity}의 단기예보
            </p>
            <select value={selectedType} onChange={handleCityChange}>
                <option value="">선택</option>
                {code}
            </select>
            <FcstTable />
        </>
    );
}

export default VillageFcst;