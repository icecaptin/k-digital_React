import React, { useState, useRef } from 'react';
import GalleryView from './GalleryView';
import styles from './Tour.module.css';
import loadingImg from './loading.gif';
import homeimg from './korea.jpg';


const Tour = () => {
    const txt1 = useRef();
    const [inputKey, setInputKey] = useState('');
    const [searchClicked, setSearchClicked] = useState(false);
    const [loading, setLoading] = useState(false); // 로딩 상태 추가

    const handleInputChange = (e) => {
        setInputKey(e.target.value);
    };

    const searchKeywords = async (e) => {
        e.preventDefault();
        setLoading(true); // 로딩 상태 변경
        setSearchClicked(true);
        await someAsyncFunction(); // 비동기 작업 예시 (실제로는 데이터를 가져오는 등의 작업을 수행)
        setLoading(false); // 로딩 상태 변경
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

    const someAsyncFunction = () => {
        return new Promise((resolve) => {
            // 예시: 2초 후에 비동기 작업 완료
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    };

    return (
        <>
            <main>
                <article>
                    <div>
                        <img className={styles.homeimg} src={homeimg} alt="홈 사진" />
                    </div>
                    <div className="grid">
                        <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="입력하세용" className={styles.inputtour} value={inputKey} onChange={handleInputChange} onKeyPress={handleKeyPress} required />
                        <div className={styles.btns}>
                            <button disabled={loading} onClick={searchKeywords}>검색</button>
                            <button disabled={loading} onClick={searchClear}>취소</button>
                        </div>
                    </div>
                    {loading && <div className={styles.loading}><img src={loadingImg} alt="로딩 중" />로딩 중...</div>} {/* 로딩 중 아이콘 표시 */}
                </article>
                <div>
                    {searchClicked && <GalleryView inputKey={inputKey} />}
                </div>
            </main>
        </>
    );
};

export default Tour;
