const CntInput = ({ numCount, minusNum, plusNum, numChange }) => {
    return (
        <>
            <article>
                <div className="grid">
                    <div></div>
                    <div><button onClick={minusNum}>-</button></div>
                    <div><input type="number" id="txt1" name="txt1" value={numCount} onChange={numChange} readOnly /></div>
                    <div><button onClick={plusNum}>+</button></div>
                    <div></div>
                </div>
            </article>
        </>
    );
};

export default CntInput;