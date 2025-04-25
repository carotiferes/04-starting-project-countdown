import { forwardRef, useImperativeHandle, useRef } from "react"; // for versions of React < 19, otherwise ref can be sent as any other prop

const ResultModal = forwardRef(function ResultModal({targetTime, remainingTime, onReset}, ref) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  // detach
  useImperativeHandle(ref, () => { // functions that will be exposed
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });

  return (
		<dialog ref={dialog} className="result-modal" onClose={onReset}> {/* add onClose to close dialog with ESC */}
			{userLost ? <h2>You lost</h2> : <h2>Your Score: {score} </h2>}
			<p>
				The target time was <strong>{targetTime} seconds</strong>
			</p>
			<p>
				You stopped the timer with{" "}
				<strong>{formattedRemainingTime} seconds left</strong>
			</p>
			<form method="dialog" onSubmit={onReset}>
				<button>Close</button>
			</form>
		</dialog>
	);
})

export default ResultModal;