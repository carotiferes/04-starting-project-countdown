import { useState } from "react";

// let timer; if i do this, it will not update because it's shared across all instances of the component

export default function TimerChallenge({title, targetTime}) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  // let timer; if i do this, the variable resets every time the component is re-executed

  function handleStart() {
    timer = setTimeout(() => {
      setTimerExpired(true)
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop(params) {
    clearTimeout(timer);
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