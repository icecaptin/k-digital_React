import BoxRows from "./BoxRows";
import './BoxBox.moudle.css';

const BoxBox = () => {

    return (
        <>
            <main className="container">
                <article>
                    <header><h1>박스오피스</h1></header>
                    {/* <input type="date" class="container" id="datePicker"></input> */}
                    <table>
                        <thead>
                            <tr className="tr1">
                                <th scope="col">순위</th>
                                <th score="col">개봉일</th>
                                <th scope="col">영화명</th>
                                <th scope="col">매출액</th>
                                <th scope="col">증감</th>
                                <th scope="col">누적매출액</th>
                            </tr>
                        </thead>
                        <BoxRows />
                    </table>
                </article>
            </main>
        </>
    )
}
export default BoxBox;