import { useEffect, useRef, useState } from "react";
import styles from './MyRef2.module.css';
const MyRef2 = () => {
    const txtref = useRef();
    const itemArr = useRef([]);
    const [itemTag, setItemTag] = useState();
    const [sameItem, setSameItem] = useState("");
    useEffect(() => {
        txtref.current.focus();
    }, []);

    const addItem = (e) => {
        e.preventDefault();
        const newItem = txtref.current.value;

        if (itemArr.current.includes(newItem)) {
            setSameItem(newItem);
            return;
        }

        itemArr.current = [...itemArr.current, newItem];
        console.log("addItem=", itemArr.current);
        setItemTag(itemArr.current.map((item, index) => (
            <span key={index} className={styles.spanitem}>{item}</span>
        )));

        txtref.current.value = "";
        setSameItem("");
    };
    const resetItem = () => {
        console.log("resetItem");
        itemArr.current = [];
        setItemTag([]);
        txtref.current.value = "";
        setSameItem("");
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addItem(e);
        }
    };
    return (
        <>
            <main className="container" data-theme="dark">
                <article>
                    <header>
                        <>
                            <div>
                                <div>
                                    <label htmlFor="txt1">입력하세용</label>
                                    <input ref={txtref} type="text" id="txt1" name="txt1" className={`${styles.inputspan} ${styles.smallInput}`} required onKeyDown={handleKeyDown}/>
                                </div>
                                <div className="grid">
                                    <button onClick={(e) => addItem(e)}>등록</button>
                                    <button onClick={(e) => resetItem(e)}>취소</button>
                                </div>

                            </div>
                        </>
                    </header>
                    {itemTag}
                    <footer>
                        {sameItem && (<div className={styles.samediv}>중복됫어용</div>)}
                    </footer>
                </article>
            </main>
        </>
    )
}
export default MyRef2;
