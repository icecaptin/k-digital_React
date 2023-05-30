const CntDisp = (probs) => {
    const numCount = probs.numCount;
    return (
        <>
            <article className="grid">
                <div>
                    입력값: <span>{numCount}</span> 입력값 2배: <span>{numCount * 2}</span> 입력값 3배: <span>{numCount * 3}</span>
                </div>
            </article>
        </>
    )
}
export default CntDisp;