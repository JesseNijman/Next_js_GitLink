import React from "react";

interface CountDown_props {
  time: number;
}

export default function CountDown(props) {
  // This function will put a stopwatch on the page and tick the given seconds away

  const [count, setCount] = React.useState(props.time);

  function StartCounting() {
    if (count != 0) {
      setTimeout(() => setCount(count - 1), 1000);
    }
  }

  StartCounting();

  return <p className="mt-4">Tijd over: {count}s</p>;
}
