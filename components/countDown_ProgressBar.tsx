import React from "react";
import CountDown from "./countDown";

interface CountDown_ProgressBar {
  time: number;
}

export default function CountDown_ProgressBar(props) {
  // What was used many times in the example was making the width of the progress a state, and updating this state based on what it was linked to
  const [seconds, setSeconds] = React.useState(props.time);
  const [percentage, setPercentage] = React.useState(0);

  const startingCount = props.time;

  function StartCounting() {
    if (seconds > -1) {
      setTimeout(() => setSeconds(seconds - 1));
      setTimeout(() => setPercentage(100 - (seconds / startingCount) * 100));
    }
  }

  StartCounting();

  const fillIn = {
    transitionDuration: `${props.time}s`,
    // transitionDelay: "1s",
    width: `${percentage}%`,
  };

  return (
    <div>
      <CountDown time={props.time}></CountDown>
      <section className="w-full h-4 mt-4 p-0 bg-gray-200 rounded-xl">
        <div
          className="h-full bg-gradient-to-r from-green-300 via-green-300 to-green-600 rounded-xl transition-width ease-in"
          style={fillIn}
        ></div>
        {/* <button onClick={CalculatePercentage}>Click me</button> */}
      </section>
    </div>
  );
}
