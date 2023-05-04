import { useRef, useState } from "react";

const MyRef = () => {
    let cnt1 = 1;
    const [cnt2, setCnt2] = useState(1);
    const cnt3 = useRef(1);

    const showCnt1 = () => {
        console.log(cnt1, cnt2, cnt3.current);
    }
    const showCnt = () => {
        cnt1 = cnt1 + 1;
        showCnt1();
    }
    const showCnt2 = () => {
        setCnt2(cnt2 + 1);
        showCnt();
    }
    const showCnt3 = () => {
        cnt3.current = cnt3.current + 1;
        showCnt();
    }
    return(
        <>
        <main className="container" data-theme="dark">
            <article>
                <header>
                    <div className="grid">
                        <button onClick={()=> showCnt()}>컴포넌트 변수: {cnt1}</button>
                        <button onClick={()=> showCnt2()}>state 변수: {cnt2}</button>
                        <button onClick={()=> showCnt3()}>ref 변수: {cnt3.current}</button>
                    </div>
                </header>
            </article>

        </main>
        </>
    )
}
export default MyRef;