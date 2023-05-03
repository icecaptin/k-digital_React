const AccidentNav1 = ({c1, sel1, setSel1}) => {

    const btTag = c1.map((item) => 
    <li key={item}>
        <button onClick={()=> setSel1(item)}>{item}</button>
        </li>
    );
    return (
        <>
            <nav>
                <ul>
                    <li><strong>사고유형 대분류</strong></li>
                </ul>
                <ul>
                    {btTag}
                </ul>
            </nav>
        </>
    )
}
export default AccidentNav1;