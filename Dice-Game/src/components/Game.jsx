import { useState } from "react";

function Game() {
  const [score, setScore] = useState(0);
  const images = [
    "../public/dice_1.png",
    "../public/dice_2.png",
    "../public/dice_3.png",
    "../public/dice_4.png",
    "../public/dice_5.png",
    "../public/dice_6.png",
  ];
  const arr = [1, 2, 3, 4, 5, 6];
  const [random, setRandom] = useState(1);
  const [selected, setSelected] = useState(0);
  const [show, setShow] = useState(false);
  const handleClick = (val) => {
    setSelected(val);
    console.log(val);
  };

  return (
    <>
      <div className="flex justify-between p-10 text-xl overflow-hidden">
        <div className="flex-col justify-items-center ">
          <h1 className="text-5xl font-bold">{score}</h1>
          <h3>Total Score</h3>
        </div>
        <div>
          {!selected && (
            <p className="text-red-500 text-end text-base">
              You have not selected any number
            </p>
          )}
          {arr.map((value, ind) => {
            return (
              <button
                key={ind}
                className={`px-4 py-3 m-2 bg-${
                  value == selected ? "black" : "white"
                } text-${
                  value == selected ? "white" : "black"
                } border-2 font-bold  cursor-pointer`}
                onClick={() => handleClick(value)}
              >
                {value}
              </button>
            );
          })}
          <p className="text-end">select number</p>
        </div>
      </div>
      <div className="flex-col justify-items-center ">
        <button
          onClick={() => {
            if (selected == 0) return;
            let r = Math.floor(Math.random() * 6) + 1;
            setRandom(r);
            console.log(r);
            if (selected == r) setScore(score + r);
            else setScore(score - 2);
          }}
        >
          <img src={images[random - 1]} alt="dice" />
        </button>
        <p>Click on Dice to roll</p>
        <div >
          <button
            className="px-5 py-2 m-5 border-2 bg-blue-400 text-zinc-100 rounded-md cursor-pointer"
            onClick={() => setScore(0)}
          >
            Reset Score
          </button>
          <button
            className="px-5 py-2 m-5 border-2 bg-blue-400 text-zinc-100 rounded-md cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          >
            Show Rules
          </button>
        </div>
        {show && (
          <div className="bg-red-100 p-4 rounded">
            <h1 className="font-bold text-lg">How to play dice game</h1>
            <br />
            <p>
              Select any number <br />
              Click on dice image <br />
              after click on dice if selected number is equal to dice number you
              will get same point as dice <br />
              if you get wrong guess then 2 point will be dedcuted{" "}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Game;
