const AccidentNav2 = ({ c2, sel1, sel2, setSel2 }) => {
    const c2Arr = sel1 ? c2.filter((item) => item[0] === sel1).map((item) => item[1]) : [];

    
    console.log(c2Arr);
    // console.log(c1);
    // const show = (item) => {
    //     console.log(item);
    // }

    const btTag2 = c2Arr.map((item) =>
        <li key={item}>
            <button onClick={() => setSel2(item)}>{item[0]}</button>
        </li>
    );

    return (
        <nav>
            <ul>
                <h2>사고유형 중분류</h2>
            </ul>
            <ul>
                {btTag2}
            </ul>
        </nav>
    );
}
export default AccidentNav2;