import MyDivArticle from "./MyDivArticle";
// import "./MyDiv.css";
import "./MyDiv.module.css";

const MyDiv = () => {

    return (
        <main className={"container"}>
            <h1>MyDiv</h1>
            <MyDivArticle />
            <MyDivArticle aname='MyDiv1' />
            <MyDivArticle aname='MyDiv2' />
        </main>
    );
}

export default MyDiv;