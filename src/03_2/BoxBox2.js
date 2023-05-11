import { useState, useEffect } from "react";
import BoxRows2 from "./BoxRows2";
import './BoxBox.module.css';

const BoxBox2 = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [mvData, setmvData] = useState(null);

    useEffect(() => {
        const fetchMV = async () => {
            try {
                if (selectedDate === "") {
                    return;
                }
                let formattedDate = selectedDate.replaceAll("-", "");
                const mvData = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${formattedDate}`;
                const response = await fetch(mvData);
                const data = await response.json();
                setmvData(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMV();
    }, [selectedDate]);
    
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setSelectedDate(selectedDate);
        console.log("날짜:", selectedDate);
    };
    return (
        <>
            <main className="container" data-theme="dark">
                <article>
                    <header><h1>박스오피스</h1></header>
                    <input type="date" id="date" name="date" onChange={handleDateChange}/>
                    <table>
                        <thead>
                            <tr className="tr1">
                                <th scope="col">순위</th>
                                <th score="col">개봉일</th>
                                <th scope="col">영화명</th>
                                <th scope="col">매출액</th>
                                <th scope="col">증감</th>
                                <th scope="col">누적매출액</th>
                            </tr>
                        </thead>
                        <BoxRows2 />
                    </table>
                </article>
            </main>
        </>
    )
}
export default BoxBox2;