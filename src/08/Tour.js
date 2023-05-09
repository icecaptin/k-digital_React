import { useState, useEffect, useRef} from 'react';
import GalleryView from './GalleryView';
import styles from './Tour.module.css';
const Tour = () => {
    const searchKeywords = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return;
        let kw = encodeURI(txt1.current.value);
        console.log(txt1.current.value, kw);
    };
    const txt1 = useRef();

    useEffect(() => {
        txt1.current.focus();
    })

    return (
        <>
            <main>
                <article>
                    <div className="grid">
                        <input ref={txt1}type="text" id="tourname" name="tourname" placeholder="입력하세용" className={styles.inputtour} required />
                        <div className={styles.btns}>
                            <button onclick={(e) => searchKeywords(e)}>검색</button>
                            <button>취소</button>
                        </div>
                    </div>
                </article>
                <article>
                    <GalleryView />
                </article>
            </main>
        </>
    )
}
export default Tour;