import datat from './datat.json';
import styles from './AccidentNav2.module.css';
const AccidentNav2 = ({ c2, sel1, sel2, setSel2 }) => {
    const c2Arr = sel1 ? c2.filter((item) => item[0] === sel1).map((item) => item[1]) : [];

    const btTag2 = c2Arr.map((item) => (
        <li key={item}>
            <button className={
                item === '횡단중' ? styles['car-person'] : '' ||
                item === '정면충돌' ? styles['car-person'] : '' ||
                item === '공작물충돌' ? styles['car-person'] : ''
                } 
                onClick={() => setSel2([sel1, item])}>{item}</button>
        </li>
    ));

    let content = null;
    if (sel2.length > 0) {
        const selData = datat.data.find(
            (data) =>
                data.사고유형_대분류 === sel2[0] && data.사고유형_중분류 === sel2[1]
        );
        content = (
            <ul className={styles.contentul}>
                <li className={styles.contentli}>발생건수: {selData.사고건수}</li>
                <li className={styles.contentli}>사망자수: {selData.사망자수}</li>
                <li className={styles.contentli}>중상자수: {selData.중상자수}</li>
                <li className={styles.contentli}>경상자수: {selData.경상자수}</li>
                <li className={styles.contentli}>부상신고자수: {selData.부상신고자수}</li>
            </ul>
        );
    }

    return (
        <>
            <nav className="container">
                <ul>
                    <li>
                        <strong>사고유형 중분류</strong>
                    </li>
                </ul>
                <ul>
                    <li>{btTag2}</li>
                </ul>
            </nav>
            <div>{content}</div>
        </>
    );
};

export default AccidentNav2;
