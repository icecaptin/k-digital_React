import React, { useState } from "react";

const LottoCheck = () => {
  const [userNumbers, setUserNumbers] = useState("");
  const [winningNumbers, setWinningNumbers] = useState("");
  const [result, setResult] = useState("");
  const [randomNumbers, setRandomNumbers] = useState([]);

  const generateRandomNumbers = () => {
    const lines = [];

    for (let i = 0; i < 5; i++) {
      const numbers = [];

      while (numbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;

        if (!numbers.includes(randomNumber)) {
          numbers.push(randomNumber);
        }
      }

      numbers.sort((a, b) => a - b); // 작은 숫자부터 정렬

      lines.push(numbers.join(", "));
    }

    setRandomNumbers(lines);
  };

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

      <button onClick={generateRandomNumbers}>랜덤 번호 생성</button>
      {randomNumbers.map((numbers, index) => (
        <p key={index}>생성된 랜덤 번호: {numbers}</p>
      ))}
    </div>
  );
};

export default LottoCheck;
