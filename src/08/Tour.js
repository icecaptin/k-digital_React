import { useState, useEffect, useRef} from 'react';
import GalleryView from './GalleryView';
import styles from './Tour.module.css';
const Tour = () => {
     const txt1 = useRef() ;

    //컴포넌트가 맨처음 랜더링되면
    useEffect(() => {
        txt1.current.focus();
    }, []);

    //확인버튼
    const searchKeywords = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return ; 
        
        let kw = encodeURI(txt1.current.value) ; 
        console.log(txt1.current.value, kw) ;
    }
    //취소버튼
    const searchClear = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <main>
                <article>
                    <div className="grid">
                        <input ref={txt1}type="txt1" id="txt1" name="txt1" placeholder="입력하세용" className={styles.inputtour} required />
                        <div className={styles.btns}>
                            <button onclick={(e) => searchKeywords(e)}>검색</button>
                            <button onclick={(e) => searchClear(e)}>취소</button>
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