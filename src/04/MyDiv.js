import MyDivArticle from './MyDivArticle';

const MyDiv = () => {
    return (
        <main className="container">
            <MyDivArticle />
            <MyDivArticle aname='MyDiv1'/>
            <MyDivArticle aname='MyDiv2'/>
        </main>
    );
}

export default MyDiv;