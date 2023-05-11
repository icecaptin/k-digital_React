import React, { useState, useEffect, useRef } from 'react';
import GalleryView from './GalleryView';
import styles from './Tour.module.css';

const Tour = () => {
    const txt1 = useRef();
    const [inputKey, setInputKey] = useState('');
    const [searchClicked, setSearchClicked] = useState(false);

    const handleInputChange = (e) => {
        setInputKey(e.target.value);
    };

    const searchKeywords = (e) => {
        e.preventDefault();
        setSearchClicked(true);
    };

    const searchClear = (e) => {
        e.preventDefault();
        setInputKey('');
        setSearchClicked(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchKeywords(e);
        }
    };

    return (
        <>
            <main>
                <article>
                    <div className="grid">
                        <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="입력하세용" className={styles.inputtour} value={inputKey} onChange={handleInputChange} onKeyPress={handleKeyPress} required />
                        <div className={styles.btns}>
                            <button onClick={searchKeywords}>검색</button>
                            <button onClick={searchClear}>취소</button>
                        </div>
                    </div>
                </article>
                <div>
                    {searchClicked && <GalleryView inputKey={inputKey} />}
                </div>
            </main>
        </>
    );
};

export default Tour;
