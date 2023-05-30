import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

const CntInput = () => {
    const [numCount, setNumcount] = useRecoilState(0);

    const plusNum = () => {
        if (numCount < 1000)
            setNumcount((prevCount) => prevCount + 1);
    };

    const minusNum = () => {
        if (numCount > 0) {
            setNumcount((prevCount) => prevCount - 1);
        }
    };

    const numChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            setNumcount(value);
        }
    };

    return (
        <article>
        <form>
            <div className="grid">
                <div></div>
                <div><button onClick={minusNum}>-</button></div>
                <div><input type="text" id="txt1" name="txt1" readOnly value={numChange}/></div>
                <div><button onClick={plusNum}>+</button></div>
                <div></div>
            </div>
        </form>
        <footer>
                <Link to='/disp'>출력화면이동</Link>
        </footer>
    </article>
    );
    
}

export default CntInput ;