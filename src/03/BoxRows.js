import mvlist from "./moviedata.json"

const BoxRows = () => {
    let trTags = [];
    for (let row of mvlist) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);

        let rankIntenText = row.rankInten;
        let rankIntenColor = '';

        if (parseInt(row.rankInten) === 1) {
            rankIntenText = `+${row.rankInten}`;
            rankIntenColor = 'red';
        } else if (parseInt(row.rankInten) === -1) {
            rankIntenText = row.rankInten;
            rankIntenColor = 'blue';
        }else {
            rankIntenText = '-';
        }

        let openDt = new Date(row.openDt);
        let openDtFormatted = `${openDt.getFullYear()}년 ${String(openDt.getMonth() + 1).padStart(2, '0')}월 ${String(openDt.getDate()).padStart(2, '0')}일`;

        trTags.push(
            <tr key={row.rank}>
                <td>{row.rank}</td>
                <td>{openDtFormatted}</td>
                <td>{row.movieNm}</td>
                <td>{parseInt(row.salesAmt).toLocaleString()}</td>
                <td style={{ color: rankIntenColor }}>{rankIntenText}</td>
                <td>{parseInt(row.salesAcc).toLocaleString()}</td>
            </tr>
        )
        console.log(trTags)

    }
    return (
        <>
            {trTags}
        </>
    )
}
export default BoxRows;
