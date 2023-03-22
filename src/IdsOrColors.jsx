import { useState, use } from "react";

const fetchIds = () => fetch("/ids.json").then((res) => res.json());
const fetchColors = () => fetch("/colors.json").then((res) => res.json());
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
const IdsOrColors = () => {
  const [number, setNumber] = useState(getRandomNumber());

  let data = null;
  if (number % 2 === 0) {
    data = use(fetchIds());
  } else {
    data = use(fetchColors());
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>{`random number is: ${number}`}</span>
      <span>{number % 2 === 0 ? "EVEN MEANS IDS" : "ODD MEANS COLORS"}</span>
      <span>{JSON.stringify(data)}</span>
      <button onClick={() => setNumber(getRandomNumber())}>
        new random number
      </button>
    </div>
  );
};

export default IdsOrColors;
