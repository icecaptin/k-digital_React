import { Routes, Route, Link } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { useState } from "react";
import CntDisp from './CntDisp';
import CntInput from "./CntInput";

const Cnt = () => {
    const [numCount, setNumcount] = useState(0);

    const plusNum = () => {
        if (numCount < 1000)
            setNumcount((prevCount) => prevCount + 1);
    };

    const minusNum = () => {
        if (numCount > 0) {
            setNumcount((prevCount) => prevCount - 1);
        }
    };

    const numChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            setNumcount(value);
        }
    };

    return (
        <>
            <RecoilRoot>
                <Routes>
                    <Route path="/CntInput" element={<CntInput numCount={numCount} minusNum={minusNum} plusNum={plusNum} numChange={numChange} />} />
                    <Route path="/CntDisp" element={<CntDisp numCount={numCount} minusNum={minusNum} plusNum={plusNum} numChange={numChange} />} />
                </Routes>
            </RecoilRoot>
            <main className="container">
                <Link to="/CntInput">입력값</Link>
                <Link to="/CntDisp">입력값출력</Link>
            </main>
        </>
    );
};

export default Cnt;
