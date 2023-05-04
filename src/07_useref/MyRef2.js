import { useEffect, useRef, useState } from "react";

const MyRef2 = () => {
    const txtref = useRef();
    const itemArr = useRef([]);
    const [itemTag, setItemTag] = useState();
    useEffect(() => {
        txtref.current.focus();
    }, []);

    const addItem = (e) => {
        e.preventDefault();
        itemArr.current = [...itemArr.current, txtref.current.value];
        console.log("addItem=", itemArr.current);
        setItemTag(itemArr.current.map((item, index) => (
            <div key={index}>{item}</div>
        )));
    }
    const resetItem = () => {
        console.log("resetItem");
    }
    return (
        <>
            <main className="container" data-theme="dark">
                <article>
                    <header>
                        <>
                            <div className="grid">
                                <label htmlFor="txt1">입력하세용</label>
                                <input ref={txtref} type="text" id="txt1" name="txt1" required />

                                <div>
                                    <button onClick={(e) => addItem(e)}>등록</button>
                                    <button onClick={(e) => resetItem(e)}>취소</button>
                                </div>
                                {itemTag}
                            </div>
                        </>
                    </header>
                </article>
            </main>
        </>
    )
}
export default MyRef2;
