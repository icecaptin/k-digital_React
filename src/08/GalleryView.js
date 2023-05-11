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

    useEffect(() => {
        searchKeywords();
    }, [inputKey]);



    return (
        <>
            {galleryData.map((gallery) => (
                <article className='grid' {...styles.contents}>
                    <div key={gallery.galTitle}>
                        <h2>{gallery.galTitle}</h2>
                        <a href={gallery.galWebImageUrl}><img src={gallery.galWebImageUrl} alt={gallery.galTitle} className={styles.imageurl} /></a>
                        <p>위치: {gallery.galPhotographyLocation}</p>
                        <p><a href={`https://www.google.com/search?q=${encodeURIComponent(gallery.galTitle)}`} target="_blank" rel="noopener noreferrer">검색해보기</a></p>
                        <p>{gallery.galSearchKeyword.split(',').map((keyword) => (<span key={keyword}>#{keyword.trim()}{' '}</span>))}</p>
                    </div>
                </article>
            ))}
        </>
    );
};

export default GalleryView;
