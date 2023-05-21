import React, { useState } from "react";

const LottoCheck = () => {
  const [userNumbers, setUserNumbers] = useState("");
  const [winningNumbers, setWinningNumbers] = useState("");
  const [result, setResult] = useState("");

  const checkNumbers = () => {
    const userNumbersArray = userNumbers.split("\n").join("").split(" ");
    const winningNumbersArray = winningNumbers.split(" ");
    let correctNumbers = 0;

    for (let i = 0; i < winningNumbersArray.length; i++) {
      const number = winningNumbersArray[i];

      if (userNumbersArray.includes(number)) {
        correctNumbers++;
      }
    }

    if (correctNumbers === 6) {
      setResult("1등입니다!");
    } else if (correctNumbers === 5) {
      setResult("2등입니다!");
    } else if (correctNumbers === 4) {
      setResult("3등입니다!");
    } else if (correctNumbers === 3) {
      setResult("4등입니다!");
    } else {
      setResult("꽝입니다.");
    }
  };

  return (
    <div>
      <h2>당첨 확인하기</h2>
      <p>로또 번호를 입력하세요: </p>
      <textarea value={userNumbers} onChange={(e) => setUserNumbers(e.target.value)} />
      <p>당첨 번호를 입력하세요: </p>
      <textarea value={winningNumbers} onChange={(e) => setWinningNumbers(e.target.value)} />
      <button onClick={checkNumbers}>확인</button>
      <p>{result}</p>
    </div>
  );
};

export default LottoCheck;
