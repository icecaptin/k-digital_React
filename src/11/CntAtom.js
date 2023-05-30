import { RecoilRoot, atom, useRecoilState } from "recoil";

const numcountState = atom({
    key: "numCount",
    default: 0,
});

const Cnt2 = () => {
    return (
        <RecoilRoot>
            <CntContent />
        </RecoilRoot>
    );
};

const CntContent = ({}) => {
    const [numCount, setNumcount] = useRecoilState(numcountState);

    const plusNum = () => {
        if (numCount < 100)
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
            <main className="container">
                <article>
                    <div className="grid">
                        <div></div>
                        <div><button onClick={minusNum}>-</button></div>
                        <div><input type="number" id="txt1" name="txt1" value={numCount} onChange={numChange} readOnly/></div>
                        <div><button onClick={plusNum}>+</button></div>
                        <div></div>
                    </div>
                </article>
                <article className="grid">
                    <div>
                        입력값: <span>{numCount}</span> 입력값 2배: <span>{numCount * 2}</span> 입력값 3배: <span>{numCount * 3}</span>
                    </div>
                </article>
            </main>
        </>
    );
};

export default Cnt2;