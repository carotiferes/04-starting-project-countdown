import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// let timer; if i do this, it will not update because it's shared across all instances of the component

export default function TimerChallenge({title, targetTime}) {
  const dialog = useRef();
  // let timer; if i do this, the variable resets every time the component is re-executed
  const timer = useRef(); // component instance specific and it will not be reset when the component reexecutes
  // no direct impact in the UI

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if(timeRemaining <= 0) { // time is up
    clearInterval(timer.current);
    dialog.current?.open();
  }
  
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
    }, 10); // SetInterval executes every x seconds
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
}

  return (
		<>
			<ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? "s" : ""}
				</p>
				<p>
					<button onClick={timerIsActive ? handleStop : handleStart}>
						{timerIsActive ? "Stop" : "Start"} Challenge
					</button>
				</p>
				<p>{timerIsActive ? "Time is running..." : "Timer inactive"}</p>
			</section>
		</>
	);
}