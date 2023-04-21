import MyClockTime from './MyClockTime';
import MyClockImage from "./MyClockImage";
const MyClock = () => {
    return (
        <>
            <article data-theme='dark'>
                <div>
                    <MyClockImage />
                    <MyClockTime />
                </div>
            </article>
        </>
    )
}
export default MyClock;
