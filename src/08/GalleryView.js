import React, { useEffect, useState } from 'react';
import styles from './GalleryView.module.css';
const GalleryView = ({ inputKey }) => {
    const [galleryData, setGalleryData] = useState([]);

    const searchKeywords = async () => {
        try {
            if (inputKey === '') return;
            const encodedUrl = encodeURI(inputKey);
            const apiUrl = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=qM4okcjM%2BI0QuL7Ij3ga3WGbLeimcGOVHaIZM4yqK3xPeBrL1v43dW52%2FNMkHmqGQhqNHh%2BWQl4Rw%2B7WJ6VRwQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${encodedUrl}&_type=json`;

            const response = await fetch(apiUrl);
            const data = await response.json();

            const galleryList = data.response.body.items.item;
            setGalleryData(Array.isArray(galleryList) ? galleryList : []);
        } catch (error) {
            console.error(error);
        }
    };
    const titleArray = galleryData.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t.galTitle === item.galTitle
        ))
    );


    useEffect(() => {
        searchKeywords();
    }, [inputKey]);



    return (
        <>
            <article>
                <div className={styles.row}>
                    {titleArray.map((title, index) => (
                        <div className={styles.column} key={index}>
                            <article>
                                <h2>{title.galTitle}</h2>
                                {galleryData
                                    .filter((gallery) => gallery.galTitle === title.galTitle)
                                    .map((gallery) => (

                                        <div className={styles.item} key={gallery.id}>
                                            <a href={gallery.galWebImageUrl}> <img src={gallery.galWebImageUrl} alt={gallery.galTitle} className={styles.imageurl} /> </a>
                                            <p>위치: {gallery.galPhotographyLocation}</p>
                                            <p><a href={`https://www.google.com/search?q=${encodeURIComponent(gallery.galTitle)}`} target="_blank" rel="noopener noreferrer" > 검색해보기</a> </p>
                                            <p className={styles.ptag}> {gallery.galSearchKeyword.split(",").map((keyword) => (<span key={keyword}>#{keyword.trim()} </span>))}
                                            </p>
                                        </div>

                                    ))}
                            </article>
                        </div>
                    ))}
                </div>
            </article>
        </>
    );

};

export default GalleryView;
