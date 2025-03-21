import { useState } from "react";

// let timer; if i do this, it will not update because it's shared across all instances of the component

export default function TimerChallenge({title, targetTime}) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  // let timer; if i do this, the variable resets every time the component is re-executed
  const timer = useRef(); // component instance specific and it will not be reset when the component reexecutes
  // no direct impact in the UI

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true)
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop(params) {
    clearTimeout(timer.current);
  }

  return (
		<section className="challenge">
			<h2>{title}</h2>
			{timerExpired && <p>You lost!</p>}
			<p className="challenge-time">
				{targetTime} second{targetTime > 1 ? "s" : ""}
			</p>
			<p>
				<button onClick={timerStarted ? handleStop : handleStart}>
					{timerStarted ? "Stop" : "Start"} Challenge
				</button>
			</p>
			<p>{timerStarted ? "Time is running..." : "Timer inactive"}</p>
		</section>
	);
}